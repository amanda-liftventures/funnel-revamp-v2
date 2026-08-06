import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Builds the clickable design-proposal prototype: one self-contained HTML file
// (JS, CSS and all images inlined) at prototype/index.html.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'prototype',
    assetsInlineLimit: 100 * 1024 * 1024,
  },
})
