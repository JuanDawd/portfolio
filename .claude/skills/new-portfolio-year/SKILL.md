---
name: new-portfolio-year
description: Scaffold a new yearly portfolio version (e.g. 2027) with its own pages, components, stylesheet, breakpoints and fonts, registered as a draft. Also covers launching it (making it the year served at "/") and archiving the previous year. Use when starting or launching an annual portfolio.
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: '[year]'
---

# New Portfolio Year

Each year is a self-contained app inside the shared shell: its own pages, components,
content and **its own Tailwind build** (tokens, fonts, breakpoints). The year registry
(`src/years.ts`) discovers years from `src/pages/*/year.ts` — routes, prerendered HTML,
sitemap and navbar year links all derive from it. Nothing else needs registering.

`$ARGUMENTS` is the new year (e.g. `2027`). Below, `PREV` is the current `CURRENT_YEAR`
in `src/years.ts`.

## Rules (keep years independent)

- A year imports only from its own folders (`src/pages/{year}/`, `src/components/{year}/`)
  or truly shared code: `src/components/ui/`, `src/components/shared/`, `src/lib/`,
  `src/hooks/`. **Never import another year's code** — copy it instead.
- Shared code must be used by 2+ years. Year-only helpers live in the year's folders.
- `src/components/ui/` (shadcn) is shared and styled only through CSS tokens. To change a
  primitive's structure or variants for one year, copy it to `src/components/{year}/ui/`.
- Links: inside a year use `<Link to={yearHref(year, page)}>`. **Across years use a plain
  `<a href={yearHref(otherYear)}>`** (full page load) so only one year's stylesheet is
  ever active. Never hardcode `/`, `/{year}` or year labels — use `yearHref`,
  `otherYears`, `CURRENT_YEAR` from `@/years`.
- Past years are frozen snapshots: don't edit their content when building a new year.

## 1. Scaffold (as a draft)

Start from a copy of the previous year when the new design is an evolution of it, or
from the minimal files below for a fresh design. Either way, the result must have:

```
src/pages/$ARGUMENTS/
├── year.ts        ← registry entry (draft: true)
├── styles.css     ← this year's Tailwind build
├── Layout.tsx     ← imports ./styles.css, wraps ThemeProvider
├── HomePage.tsx
└── constants.ts   ← all of this year's content (bio, experience, projects, …)
src/components/$ARGUMENTS/   ← one folder per component with an index.ts barrel
```

If copying PREV: `cp -R src/pages/PREV src/pages/$ARGUMENTS` and
`cp -R src/components/PREV src/components/$ARGUMENTS`, then replace every `PREV` in the
new folders (imports `@/components/PREV/…`, `yearHref('PREV' …)`, `otherYears('PREV')`,
the `@source '../../components/PREV'` line, `year: 'PREV'`). Verify with
`grep -rn "PREV" src/pages/$ARGUMENTS src/components/$ARGUMENTS` → no results.
Then set `draft: true` in `year.ts`.

Minimal files for a fresh design (also create an empty `src/components/$ARGUMENTS/`
and a `constants.ts` for the year's content as soon as there is any):

`src/pages/$ARGUMENTS/year.ts`

```ts
import type { YearDefinition } from '@/years'

export default {
  year: '$ARGUMENTS',
  draft: true,
  // ogImage: '/$ARGUMENTS/og-image.jpg', // 1200×630 in public/; defaults to /og-image.jpg
  pages: [
    {
      path: '',
      component: 'HomePage',
      // Placeholders — final wording before launch
      title: 'Juan Dawd | Full-Stack Developer',
      description: '…',
    },
  ],
} satisfies YearDefinition
```

`src/pages/$ARGUMENTS/styles.css` — mobile-first by default (Tailwind's normal
min-width breakpoints). Add `@import '../../styles/breakpoints-desktop-first.css';`
after the shared import only if this year should be desktop-first like 2025/2026.

```css
@import 'tailwindcss' source(none);
@import '../../styles/shared.css';
@import '@fontsource-variable/geist'; /* this year's fonts (pnpm add @fontsource/…) */

/* Classes are generated only from these files */
@source '../../components/ui';
@source '../../components/shared';
@source '../../components/$ARGUMENTS';
@source '.';

@theme inline {
  --font-sans: 'Geist Variable', sans-serif;
}

/* Design tokens — every shadcn/ui component reads these */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.15 0 0);
  --primary: oklch(0.55 0.2 260);
  --primary-foreground: oklch(0.98 0 0);
  /* …card, popover, secondary, muted, accent, border, input, ring, radius —
	   src/pages/2026/styles.css has the full list to copy from */
}

.dark {
  --background: oklch(0.13 0 0);
  --foreground: oklch(0.96 0 0);
  /* … */
}
```

Any token not defined here falls back to the neutral defaults in `src/styles/shared.css`.

`src/pages/$ARGUMENTS/Layout.tsx`

```tsx
import { Outlet } from 'react-router-dom'
import './styles.css'

import { ThemeProvider } from '@/lib/theme'

export default function Layout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Outlet />
      </div>
    </ThemeProvider>
  )
}
```

`src/pages/$ARGUMENTS/HomePage.tsx`

```tsx
export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold">Juan Dawd</h1>
    </main>
  )
}
```

More pages: add `{ path: 'projects', component: 'ProjectsPage', title, description }`
to `year.ts` and create `src/pages/$ARGUMENTS/ProjectsPage.tsx`. Page `<title>`/meta
come from `year.ts` — pages don't set them.

The draft is live at `/$ARGUMENTS` (noindex, not in the sitemap, not linked from other
years), so it can be deployed while in progress.

## 2. Verify

```bash
pnpm lint && pnpm test && pnpm build   # build fails loudly on a bad registry entry
npx serve dist                         # serves like Vercel (dir index + 404.html)
```

Open `/$ARGUMENTS`, and check `/` and the older years still look the same. The build log
lists every prerendered page; `dist/$ARGUMENTS/index.html` must link a CSS file of its
own (`grep stylesheet dist/$ARGUMENTS/index.html`).

## 3. Launch (when the new year is ready)

1. `src/pages/$ARGUMENTS/year.ts`: remove `draft: true`.
2. `src/years.ts`: set `CURRENT_YEAR = '$ARGUMENTS'`. The new year moves to `/` and PREV
   moves to `/PREV` automatically (routes, prerender, sitemap, navbar links).
3. Archive PREV: in `src/pages/PREV/year.ts`, change page titles/descriptions to archive
   wording (e.g. `'Juan Dawd | PREV Portfolio'`). Don't touch its content otherwise.
4. Make sure the new year's navbar links to the archive: render
   `otherYears('$ARGUMENTS').map(y => <a href={yearHref(y)}>{y}</a>)`.
5. Social preview: `/og-image.jpg` shows PREV's design. Either replace it with one in the
   new year's style (1200×630), or add `public/$ARGUMENTS/og-image.jpg` and set
   `ogImage` in the new year's `year.ts`. The build fails if `ogImage` points at a
   missing file. PREV keeps whatever its `year.ts` says, so give PREV an `ogImage`
   with the old image (e.g. `/PREV/og-image.jpg`) if it should keep it.
6. Update the "currently {year}" note in `CLAUDE.md` (Routes line), and point
   `tailwindStylesheet` in `.prettierrc.json` at `./src/pages/{year}/styles.css` so
   Prettier sorts classes with the new year's tokens (then run `pnpm format`).
7. Build and verify as in step 2, then also check:
   - `/PREV` renders and `dist/sitemap.xml` lists `/`, `/PREV` and older years.
   - The 404 page (`/does-not-exist`) — it is shared (`src/components/shared/NotFoundPage`)
     and now renders in the new year's layout and tokens, so check it in light and dark.
     If it needs a different look, give the year its own NotFound page rather than
     restyling the shared one.
