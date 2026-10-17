# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, equally important:

- **Recruiters and hiring managers** (English- and Spanish-speaking markets) skimming quickly to decide whether to interview. Their job: confirm seniority and stack fit, then download the CV (English `resume.pdf` or Spanish `hoja-de-vida.pdf`) or reach out.
- **Freelance clients** (founders, small businesses) deciding whether to hire Juan for a project. Their job: see shipped, real work and send an email.

The owner often shows the site on a phone in person, so the phone view is the one judged first.

## Product Purpose

Juan Dawd's personal portfolio: a full-stack developer (React, Next.js, Node.js, PostgreSQL; currently at Melt Studio). Success is a CV download or an email from either audience.

## Positioning

Juan ships whole SaaS products solo, end to end. Innovation Befine (salon and workshop operations: real-time cashier dashboard over SSE, payroll engine, offline PWA, RBAC) is the proof. Real-time pipelines (Redis, MQTT, SSE) and the web + mobile + infra range support this but are secondary.

## Operating Context

- Each calendar year gets its own self-contained portfolio design. Past years stay online, frozen, at `/{year}` and are linked from the current one (the archive is part of the story).
- Visitors arrive from CV links, LinkedIn, GitHub and in-person phone demos.

## Capabilities and Constraints

- Stack: Vite + React 19 + TypeScript + Tailwind v4, statically prerendered on Vercel. Per-year rules in `CLAUDE.md`.
- All content lives in `src/pages/{year}/constants.ts`; do not invent projects, metrics or clients beyond it.
- Light and dark themes are both required; dark is the primary look, light follows the visitor's setting.
- Open decision: the site is English-only today; a Spanish version (i18n) may be added later.

## Brand Commitments

- Command-line voice: `~/juandawd`, `$ whoami`, `$ ls ./projects`, `contact --me`. Keep it in future work.
- Dark first.
- Bilingual audience: the Spanish CV ("hoja de vida") is always offered next to the English one.

## Evidence on Hand

- Projects, experience, education, certifications and skills: `src/pages/{year}/constants.ts`.
- Project screenshots: `public/{year}/projects/`.
- CVs: `public/resume/JuanDawd_ATS_Eng_CV.pdf`, `public/resume/JuanDawd_ATS_Esp_CV.pdf`.
- No testimonials, client logos or quantified business outcomes beyond those in the experience list. Do not fabricate them.

## Product Principles

1. Show shipped work first; claims come second.
2. Two exits, always close at hand: download the CV, or email.
3. The phone view is the real view.
4. A recognisable personality (the terminal voice) over generic polish.
5. Each year stands on its own; never break or restyle past years.

## Accessibility & Inclusion

WCAG AA contrast in both themes, 44px touch targets, `prefers-reduced-motion` respected, keyboard and screen-reader friendly (the decorative command prefixes are hidden from screen readers).
