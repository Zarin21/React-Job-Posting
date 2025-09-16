import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    [react()], // React that we selected
    // by default it's 5173.
    tailwindcss(),
  ],
  server: {
    port: 3000, // server
  },
})
