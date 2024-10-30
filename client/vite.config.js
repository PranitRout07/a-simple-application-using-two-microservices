import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/mountains': 'http://localhost:3143',
      '/api/cities': 'http://localhost:3142',
    }
  },
  plugins: [react()],
})
