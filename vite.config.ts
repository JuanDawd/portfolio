import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Target modern browsers — smaller output, no legacy polyfills
    target: 'es2020',
    // Lets scripts/prerender.mjs preload each route's lazy chunks and CSS
    manifest: !isSsrBuild,
    rollupOptions: {
      // The SSR build (prerender only) externalizes deps, so manual chunks don't apply
      output: isSsrBuild ? {} : {
        manualChunks: {
          // Core React runtime — cached across deploys
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // simple-icons SVG path data — large but stable, benefits from long cache
          'vendor-icons': ['simple-icons'],
          // D3 is only used by the 2025 SolarSystem — isolate it from the 2026 bundle
          'vendor-d3': ['d3'],
          // Lucide icon components — stable, benefits from long-term cache
          'vendor-lucide': ['lucide-react'],
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
}))
