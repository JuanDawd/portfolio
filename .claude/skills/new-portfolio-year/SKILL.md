---
name: new-portfolio-year
description: Scaffold a new yearly portfolio version. Creates year-scoped components, pages, and routes. Use when starting a new annual portfolio (e.g. 2026, 2027).
allowed-tools: Bash, Read, Write, Glob
argument-hint: "[year]"
---

# New Portfolio Year

Add a new year to the portfolio app. Each year lives as a route namespace (`/{year}`) with its own components and pages.

## Structure

```
src/
├── components/{year}/    ← Year-specific components
├── pages/{year}/         ← Layout + pages for the year
├── components/ui/        ← Shared Shadcn components (don't duplicate)
└── hooks/                ← Shared hooks (don't duplicate)
```

## Steps

### 1. Create Component Directory
```bash
mkdir -p src/components/$ARGUMENTS
```

### 2. Create Pages Directory with Starter Files

Create `src/pages/$ARGUMENTS/Layout.tsx`:
```tsx
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main>
      <Outlet />
    </main>
  )
}
```

Create `src/pages/$ARGUMENTS/HomePage.tsx`:
```tsx
export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold">$ARGUMENTS Portfolio</h1>
    </div>
  )
}
```

### 3. Add Routes to `src/main.tsx`

Import the new pages and add a route group:
```tsx
import Layout$ARGUMENTS from './pages/$ARGUMENTS/Layout.tsx'
import HomePage$ARGUMENTS from './pages/$ARGUMENTS/HomePage.tsx'

// Inside <Routes>:
<Route path="/$ARGUMENTS" element={<Layout$ARGUMENTS />}>
  <Route index element={<HomePage$ARGUMENTS />} />
</Route>
```

### 4. Update `src/App.tsx`

Add a link to the new year on the landing page:
```tsx
<Link to="/$ARGUMENTS">View $ARGUMENTS Portfolio</Link>
```

### 5. Verify
```bash
pnpm run dev
```
Navigate to `/$ARGUMENTS` to confirm the new year loads.

## Conventions
- Year-specific components go in `src/components/{year}/`
- Each component gets its own folder with barrel export (`index.ts`)
- Shared UI (Shadcn) stays in `src/components/ui/`
- Shared hooks stay in `src/hooks/`
- Previous years remain accessible at their routes
