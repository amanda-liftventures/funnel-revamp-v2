import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Honor the port assigned by the preview harness; default to 5173 otherwise
    port: Number(process.env.PORT) || 5173,
  },
})
