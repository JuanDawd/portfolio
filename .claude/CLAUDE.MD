# Portfolio Project Context

## Architecture
- **Current Stack**: Next.js 14 (App Router) → Migrating to Vite + React 18
- **Target Stack**: Vite 5 + React 18 + TypeScript + Tailwind CSS
- **Deployment**: Vercel (static hosting)

## Versioning Strategy
- **Root (`/`)**: Always contains the CURRENT year version
- **Archive**: Previous years live in `/archive/{year}/`
- **Current Year**: 2025
- **Migration in Progress**: 2024 → Archive, 2025 → Root

## Tech Preferences
- Vite over Next.js (static export, simpler config)
- TypeScript strict mode
- Tailwind for styling
- Lucide React for icons
- Framer Motion for animations (if needed)

## File Patterns
- Components: `src/components/{feature}/`
- Pages: `src/pages/` (Vite file-based routing or simple structure)
- Assets: `public/`
- Types: `src/types/`