import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemapPlugin from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    sitemapPlugin({
      hostname: 'https://generalmeow28.github.io/iuytresdcvbhnt-gaun1303/',
      dynamicRoutes: [
        '/vue-ensemble',
        '/impacts',
        '/surveillance'
      ]
    })
  ],
  base: '/iuytresdcvbhnt-gaun1303/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
