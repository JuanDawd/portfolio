---
name: shadcn-vite-init
description: Initialize a fresh Vite + React + TypeScript project with Shadcn UI. Sets up Tailwind v4, path aliases, and installs shadcn/ui base configuration. Use when re-scaffolding the entire project from scratch.
allowed-tools: Bash, Read, Write, Glob
---

# Initialize Shadcn UI with Vite

Scaffold a new Vite + React + TypeScript + Shadcn UI project at root.

## When to Use
- Full project re-scaffold from scratch
- NOT for adding a new year (use `new-portfolio-year` instead)

## Prerequisites
- Node.js 22+
- pnpm 10+

## Steps

### 1. Initialize Vite Project
```bash
pnpm create vite@latest . -- --template react-ts
pnpm install
```

### 2. Install Tailwind CSS v4
```bash
pnpm add -D tailwindcss @tailwindcss/vite
```

Add the Tailwind plugin to `vite.config.ts`:
```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

Import in `src/index.css`:
```css
@import "tailwindcss";
```

### 3. Initialize Shadcn
```bash
pnpm dlx shadcn@latest init
```

Select: New York style, Zinc base color, CSS variables enabled.

### 4. Install Core Dependencies
```bash
pnpm add react-router-dom framer-motion lucide-react @vercel/analytics d3
pnpm add -D @types/d3
```

### 5. Verify
```bash
pnpm run dev
pnpm run build
```
