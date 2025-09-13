import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // React that we selected
  // by default it's 5173.
  server: {
    port: 3000, // server object
  },
})
