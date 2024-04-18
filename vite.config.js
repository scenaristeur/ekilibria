import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // https://github.com/advanced-chat/vue-advanced-chat?tab=readme-ov-file#vue
          isCustomElement: (tagName) => {
            return tagName === 'vue-advanced-chat' || tagName === 'emoji-picker'
          }
          // treat all tags with a dash as custom elements
          // isCustomElement: (tag) => tag.includes('-')
        }
      }
    }),
    VueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
