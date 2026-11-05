/**
 * Vercel post-build step, run after `vite build` with START_TARGET=vercel.
 *
 * Nitro's prerender pass writes every static page as `<route>.html` inside
 * `.vercel/output/static`, while the canonical tags, the sitemap and the
 * footer links all advertise extensionless routes (`/manufacturing`,
 * `/products/cantilever-racks`). The Build Output API only maps a static file
 * to a second path through `overrides`, so this script teaches `config.json`
 * about the clean URL for each prerendered page.
 *
 * `index.html` files are skipped: the filesystem phase already resolves
 * directory indexes, and an empty override path would be meaningless.
 */
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const outputDir = path.join(process.cwd(), '.vercel', 'output')
const staticDir = path.join(outputDir, 'static')
const configPath = path.join(outputDir, 'config.json')

if (!existsSync(configPath)) {
  throw new Error(
    `Missing ${configPath}. Run this through "pnpm build:vercel" so Nitro emits the Vercel Build Output API directory.`,
  )
}

/** Every prerendered page, relative to the static dir, e.g. "products/drive-in-racks.html". */
function collectHtmlFiles(dir, prefix = '') {
  const files = []
  for (const entry of readdirSync(dir)) {
    const absolute = path.join(dir, entry)
    const relative = prefix ? `${prefix}/${entry}` : entry
    if (statSync(absolute).isDirectory()) {
      files.push(...collectHtmlFiles(absolute, relative))
      continue
    }
    if (entry.endsWith('.html') && entry !== 'index.html') {
      files.push(relative)
    }
  }
  return files
}

const config = JSON.parse(readFileSync(configPath, 'utf8'))
const overrides = { ...config.overrides }

const pages = collectHtmlFiles(staticDir)
for (const page of pages) {
  overrides[page] = { ...overrides[page], path: page.slice(0, -'.html'.length) }
}

config.overrides = overrides
writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`)

console.log(`[vercel] clean URLs mapped for ${pages.length} prerendered pages`)