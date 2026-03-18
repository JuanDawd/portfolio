# Portfolio Project Context

## Architecture
- **Stack**: Vite 7 + React 19 + TypeScript 5.9 + Tailwind CSS v4 + Shadcn UI
- **Package Manager**: pnpm 10
- **Deployment**: Vercel (static hosting)
- **Routing**: react-router-dom (client-side)

## Versioning Strategy
- **Root (`/`)**: Landing page / year selector
- **Years**: Each year lives at `/{year}` as a route namespace
- **Components**: `src/components/{year}/` per year, `src/components/ui/` shared
- **Pages**: `src/pages/{year}/` per year

## Tech Preferences
- TypeScript strict mode
- Tailwind v4 for styling (via `@tailwindcss/vite` plugin)
- Shadcn UI for base components
- Lucide React for icons
- Framer Motion for animations
- D3 for data visualizations

## File Patterns
- Components: `src/components/{year}/{Feature}/` with barrel exports
- Pages: `src/pages/{year}/`
- Shared UI: `src/components/ui/`
- Shared hooks: `src/hooks/`
- Assets: `public/`
