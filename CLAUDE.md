# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (Vite HMR)
pnpm build        # Type-check (tsc -b) then production build
pnpm preview      # Preview production build locally
pnpm lint         # ESLint
pnpm test         # Run tests once (Vitest)
pnpm test:watch   # Run tests in watch mode
```

Add new ShadcnUI components via:
```bash
pnpm dlx shadcn@latest add <component>
```

## Architecture

### Multi-year scoping

Each portfolio version is fully self-contained under a year namespace:

- **Routes**: `/` → 2026 portfolio (current default), `/2025` → 2025 portfolio
- **Components**: `src/components/{year}/` — year-specific components and local UI overrides
- **Pages + data**: `src/pages/{year}/` — layouts, page components, and a `constants.ts` that holds all content data (bio, experience, projects, skills, certifications)
- **Shared UI**: `src/components/ui/` — ShadcnUI-generated Radix primitives; committed to source, not generated at build time

Adding a new year means creating a new route scope with its own component tree and constants — use the `/new-portfolio-year` skill for scaffolding.

### Routing

Defined in `src/main.tsx` using React Router. Each year has a `Layout` component as the route wrapper with nested page routes.

### Theme system

A custom `ThemeProvider` lives in `src/lib/theme.tsx` (shared) and is re-exported per year via `src/components/{year}/theme-provider.tsx`. It handles `light`/`dark`/`system` modes using `localStorage` + `document.documentElement.classList`. Does **not** use `next-themes`.

### CSS

Tailwind v4 via `@tailwindcss/vite` plugin — config is CSS-native inside `src/index.css` using `@theme`. CSS variables use `oklch()` color space. Breakpoints are **desktop-first max-width** custom variants (`lg`, `md`, `sm`, `xs`) defined in `index.css` — this is intentional for 2025 compatibility, opposite to Tailwind's default mobile-first approach.

### Content data

All portfolio content (bio, experience list, projects list, skills, certifications, social links) lives in `src/pages/{year}/constants.ts`. Updating portfolio content means editing only this file for that year.

### Skills icons

`simple-icons` is used for tech stack icons throughout. Icons are referenced as SVG path strings (`si*.path`) and hex colors (`si*.hex`) directly from the package.

### Testing

Vitest with `happy-dom` environment. Test files colocate with components as `*.test.tsx`. Setup in `src/test/setup.ts`.
