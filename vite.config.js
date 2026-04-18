import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // GitHub repo nomi bilan mos bo‘lishi shart
  base: '/jarayonlar-tatqiqoti/',

  build: {
    outDir: 'dist',
    sourcemap: false,
  },

  server: {
    port: 5173,
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },

  // 🔥 MUHIM: SPA routing uchun (React Router ishlatsa)
  preview: {
    port: 4173,
  }
})