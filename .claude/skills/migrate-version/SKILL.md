---
name: migrate-version
description: Migrate the current portfolio to a new year version. Archives the current root to /archive/{year}, creates fresh 2025 structure, and migrates from Next.js to Vite.
disable-model-invocation: true
argument-hint: "[year-to-archive]"
---

# Migrate Portfolio Version

Migrate the portfolio from Next.js to Vite and archive the current version.

## Steps

1. **Archive Current Version**
   - Create `/archive/$ARGUMENTS/` directory
   - Move all current root files (except `.git/`, `.claude/`, `archive/`, `node_modules/`)
   - Create `archive/$ARGUMENTS/README.md` explaining this is the frozen $ARGUMENTS version

2. **Create New Vite Structure**
   - Initialize Vite + React + TypeScript at root
   - Install dependencies: `react`, `react-dom`, `react-router-dom`, `lucide-react`, `framer-motion`
   - Install dev deps: `typescript`, `tailwindcss`, `postcss`, `autoprefixer`, `@types/react`, `@types/react-dom`

3. **Migrate Content**
   - Copy and convert components from archived version
   - Convert Next.js `Image` to standard `img` or optimized component
   - Remove `next/head` usage, use standard HTML meta tags in `index.html`
   - Convert any API routes to static data files in `src/data/`
   - Move `public/` assets (except those used only by old version)

4. **Configuration**
   - Create `vite.config.ts` with React plugin
   - Setup Tailwind config (v3 style)
   - Create `index.html` with proper meta tags
   - Update `package.json` scripts (dev, build, preview)

5. **Verification**
   - Run `npm run dev` to verify it starts
   - Check that build completes without errors
   - Ensure all images and assets load correctly

## Notes
- Keep `.claude/` and `archive/` directories untouched during migration
- Preserve Git history (don't delete .git)
- Update this CLAUDE.md with new year after completion