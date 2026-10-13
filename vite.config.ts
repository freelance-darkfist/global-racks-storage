import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start-plugin'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

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
        host: 'https://globalracksstorage.com',
      },
      pages: [
        {
          path: '/',
          prerender: {
            enabled: true,
            crawlLinks: true,
          },
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
