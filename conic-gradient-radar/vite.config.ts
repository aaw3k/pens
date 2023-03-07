import { defineConfig } from 'vite'
import { resolve } from 'path'
import pugPlugin from 'vite-plugin-pug'

const options = { pretty: true }
const locals = { name: 'My Pug' }

export default defineConfig({
  root: 'client',
  plugins: [pugPlugin(options, locals)],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'client'),
    },
  },
  build: {
    target: 'esnext',
    outDir: '../dist/',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'client/index.html'),
      },
    },
  },
})
