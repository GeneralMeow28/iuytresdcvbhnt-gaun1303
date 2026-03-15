import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemapPlugin from 'vite-plugin-sitemap'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    sitemapPlugin({
      hostname: 'https://generalmeow28.github.io/iuytresdcvbhnt-gaun1303/',
      dynamicRoutes: ['/iuytresdcvbhnt-gaun1303/vue-ensemble',
        '/iuytresdcvbhnt-gaun1303/impacts',
        '/iuytresdcvbhnt-gaun1303/surveillance'
      ],
      generateRobotsTxt: false,
    }),
    createHtmlPlugin({
      minify: true,
    })
  ],
  base: '/iuytresdcvbhnt-gaun1303/',
  publicDir: 'public',
  build:{
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
      },
      format: {
        comments: false,
      }
    },
    cssCodeSplit: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
