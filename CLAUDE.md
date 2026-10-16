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

Each portfolio year is a self-contained app inside a shared shell:

- **Registry**: `src/years.ts` discovers years from `src/pages/*/year.ts` (pages, titles, descriptions, `draft` flag). Routes (`src/App.tsx`), prerendered pages, the sitemap and navbar year links are all derived from it — no other place lists years.
- **Routes**: `/` → `CURRENT_YEAR` (currently 2026), every other year at `/{year}`. Unknown URLs render the shared 404 inside the current year's layout.
- **Pages + data**: `src/pages/{year}/` — `year.ts`, `Layout.tsx`, page components, `styles.css` and a `constants.ts` with the year's content
- **Components**: `src/components/{year}/` — year-specific components (forked primitives go in `src/components/{year}/ui/`)
- **Shared**: `src/components/ui/` (shadcn, styled only via tokens), `src/components/shared/` (icons, 404), `src/lib/`, `src/hooks/` — only code used by 2+ years
- **Independence rules**: a year never imports another year's code. Cross-year links are plain `<a href={yearHref(year)}>` (full page load, so only one year's stylesheet is active); never hardcode year URLs — use `yearHref` / `otherYears` / `CURRENT_YEAR`. Past years are frozen snapshots.

Adding or launching a year: use the `/new-portfolio-year` skill.

### Build and prerendering

`pnpm build` = type-check → client build → SSR build of `src/entry-server.tsx` → `scripts/prerender.mjs`, which writes static HTML for every registry page (own `<head>`, the year's CSS and chunk preloads), `404.html` and `sitemap.xml`. `src/main.tsx` hydrates that HTML (or renders from scratch in dev). Per-page meta lives in `year.ts`; `usePageMeta` keeps the head in sync on client navigation.

Preview a build with `npx serve dist` — it resolves routes and `404.html` like Vercel. `pnpm preview` falls back to the home page for every URL.

### Theme system

A custom `ThemeProvider` lives in `src/lib/theme.tsx` (shared; layouts import it directly). It handles `light`/`dark`/`system` modes using `localStorage` + the `dark` class on `<html>`, which an inline script in `index.html` sets before first paint. Does **not** use `next-themes`.

### CSS

Tailwind v4 via `@tailwindcss/vite`, CSS-native config. **Each year has its own Tailwind build** in `src/pages/{year}/styles.css` (imported by its Layout, so it only loads on that year's routes): `@import 'tailwindcss' source(none)`, the shared base `src/styles/shared.css` (token → utility mapping, neutral default tokens, shadcn variants, base layer), `@source` lines for the folders it uses, its fonts, and its design tokens on `:root` / `.dark` (`oklch()`).

Breakpoints are per year: 2025 and 2026 import `src/styles/breakpoints-desktop-first.css` (max-width variants: `md:` means 767px and below). A year that doesn't import it gets Tailwind's default mobile-first breakpoints.

### Content data

All portfolio content (bio, experience list, projects list, skills, certifications, social links) lives in `src/pages/{year}/constants.ts`; page titles/descriptions live in `src/pages/{year}/year.ts`. (2025 predates this and also keeps some content in `src/components/2025/*/Constants.ts`.)

### Skills icons

`simple-icons` is used for tech stack icons throughout. Icons are referenced as SVG path strings (`si*.path`) and hex colors (`si*.hex`) directly from the package.

### Testing

Vitest with `happy-dom` environment. Test files colocate with components as `*.test.tsx`. Setup in `src/test/setup.ts`.
