import { defineConfig } from 'vite'

export default defineConfig({
  base: '/jarayonlar-tatqiqoti/',  // GitHub Pages-dagi repository nomiga qarab o'zgartiring
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
  }
})
