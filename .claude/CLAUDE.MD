# Portfolio Project Context

## Architecture
- **Stack**: Vite 7 + React 19 + TypeScript 5.9 + Tailwind CSS v4 + Shadcn UI
- **Package Manager**: pnpm 10
- **Deployment**: Vercel (static hosting, every route prerendered at build time)
- **Routing**: react-router-dom, routes generated from the year registry (`src/years.ts`)

## Versioning Strategy
- **Root (`/`)**: the current year (`CURRENT_YEAR` in `src/years.ts`); older years at `/{year}`
- **Years**: self-contained — own pages, components, content and Tailwind stylesheet
- **Components**: `src/components/{year}/` per year; `src/components/ui/` and `src/components/shared/` shared
- **Pages**: `src/pages/{year}/` per year, registered by its `year.ts`
- New year → `/new-portfolio-year` skill

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
- Shared UI: `src/components/ui/` (shadcn, token-driven); shared app components: `src/components/shared/`
- Shared hooks: `src/hooks/` (only code used by 2+ years)
- Year styles: `src/pages/{year}/styles.css`; shared base: `src/styles/`
- Assets: `public/`
