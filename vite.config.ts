import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start-plugin'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { site } from './src/content/site'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tanstackStart({
      customViteReactPlugin: true,
      tsr: {
        srcDirectory: 'src',
      },
      sitemap: {
        enabled: true,
        // Same canonical domain as the rest of the site; see src/content/site.ts.
        host: site.url,
      },
      pages: [
        {
          path: '/',
          prerender: {
            enabled: true,
            crawlLinks: true,
          },
        },
        {
          // The footer links to the generated sitemap, so the crawler finds it.
          // Keep it out of the prerender pass and out of the sitemap itself.
          path: '/sitemap.xml',
          prerender: { enabled: false },
          sitemap: { exclude: true },
        },
      ],
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
    },
  },
})
