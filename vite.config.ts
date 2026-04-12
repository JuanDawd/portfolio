import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Target modern browsers — smaller output, no legacy polyfills
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — cached across deploys
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Framer Motion is large (~100 KB gz) and used by the 2026 landing page
          'vendor-motion': ['framer-motion'],
          // Radix UI primitives shared by both year UIs
          'vendor-radix': [
            'radix-ui',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-label',
          ],
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
})
