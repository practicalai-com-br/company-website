import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/company-website/',
  build: {
    outDir: './build',
    emptyOutDir: true,
  }
})
