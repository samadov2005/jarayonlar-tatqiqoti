import { defineConfig } from 'vite'

export default defineConfig({
  base: '/jarayonlar-tatqiqoti/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
