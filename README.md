# Juan Dawd -- Portfolio

Personal developer portfolio built with React 19, Vite 7, and Tailwind CSS 4. Features a multi-year architecture where each portfolio version (2025, 2026) lives in its own scope with independent components, theming, and layout.

**Live:** [juandawd.dev](https://juandawd.dev)

## Tech Stack

| Layer           | Technology                        | Why                                            |
| --------------- | --------------------------------- | ---------------------------------------------- |
| Framework       | React 19 + Vite 7                 | Cutting-edge compiler features, sub-second HMR |
| Styling         | Tailwind CSS 4                    | Utility-first, CSS-native config via `@theme`  |
| Language        | TypeScript 5.9 (strict)           | Full type safety across the codebase           |
| UI Primitives   | Radix UI via ShadcnUI             | Accessible, unstyled headless components       |
| Animation       | Framer Motion                     | Declarative layout and gesture animations      |
| Data Viz        | D3                                | Custom SVG visualizations                      |
| Routing         | React Router 7                    | File-based year scoping                        |
| Testing         | Vitest + Testing Library          | Native Vite integration, fast execution        |
| Monitoring      | Vercel Analytics + Speed Insights | Real-user performance metrics                  |
| Package Manager | pnpm                              | Strict dependency resolution, disk-efficient   |

## Project Structure

```
src/
├── components/
│   ├── ui/              # Shared ShadcnUI components (Radix-based)
│   ├── 2025/            # 2025 portfolio components + theme
│   └── 2026/            # 2026 portfolio components + theme
├── pages/
│   ├── 2025/            # 2025 routes, layout, constants
│   └── 2026/            # 2026 routes, layout, constants
├── lib/
│   ├── theme.tsx         # Custom theme provider (light/dark/system)
│   └── utils.ts          # cn() and shared utilities
├── hooks/               # Custom React hooks
├── test/                # Test setup
├── index.css            # Global styles, CSS variables, year themes
└── main.tsx             # App entry point
```

Each portfolio year is self-contained: its own layout, theme variables, components, and constants. The shared `ui/` components use Radix primitives and are generated via the ShadcnUI CLI.

## Getting Started

```bash
pnpm install
pnpm dev          # Start dev server
pnpm build        # Type-check + production build
pnpm test         # Run test suite
pnpm test:watch   # Run tests in watch mode
pnpm lint         # ESLint
```

## Architecture Decisions

- **Multi-year scoping:** Each portfolio year has its own component tree and CSS custom properties, allowing full visual independence while sharing the same build pipeline and routing.
- **Custom theme provider:** A lightweight React context replaces `next-themes`, handling class-based dark mode toggling, system preference detection, and localStorage persistence without a Next.js dependency.
- **ShadcnUI as dev tooling:** Components are generated via `pnpm dlx shadcn@latest add` and committed to `src/components/ui/`. The `shadcn` package is a devDependency only.
