---
target: 2027 home page
total_score: 18
max_score: 28
na_heuristics: 5,7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/juandawdb/Documents/Code/Personal/Frontend/juankdawd-portfolio/src/pages/2027/HomePage.tsx"
target_fingerprint: "sha256:383606f963d22906dd3b20bdae0236941b920c0c605eacb502848aa0ab3d0a94"
target_path: /Users/juandawdb/Documents/Code/Personal/Frontend/juankdawd-portfolio/src/pages/2027/HomePage.tsx
timestamp: 2026-10-17T06-15-36Z
slug: src-pages-2027-homepage-tsx
---
⚠️ DEGRADED: single-context (sub-agents not requested by the user; the detector results from the earlier audit were already in context)

## Design Health Score (portfolio, Experience/Persuade)

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Copy-email confirms visually and to screen readers; theme toggle clear |
| 2 | Match System / Real World | 2 | Terminal jargon (`contact --me`, `./hoja-de-vida.pdf`, `8 total`) is charming for devs, opaque for non-technical freelance clients |
| 3 | User Control and Freedom | 3 | Anchors, archive links, theme toggle all reversible |
| 4 | Consistency and Standards | 3 | One section pattern applied everywhere; consistent to the point of monotony |
| 5 | Error Prevention | n/a | No forms |
| 6 | Recognition Rather Than Recall | 2 | Phone navbar has no section links; bare "2026 2025" with no "archive" label |
| 7 | Flexibility and Efficiency | n/a | Portfolio |
| 8 | Aesthetic and Minimalist Design | 2 | Chip clouds on every project and job, bio repeats the hero bullets, glass on every section |
| 9 | Error Recovery | 3 | Clipboard failure keeps the email visible |
| 10 | Help and Documentation | n/a | Portfolio |
| **Total** | | **18/28** | **Acceptable** |

## Design Specificity Verdict
LLM: The terminal voice and the red DAWD block are authored and memorable. Everything around them (frosted glass cards, blue halo, hairline grid, blinking cursor, tag-chip clouds) is the 2025-26 developer-portfolio template; swap the name and it fits any dev. The positioning (ships SaaS solo) is not said anywhere above the fold, and the flagship project gets the same weight as a weekend side project.
Detector: 0 findings in source; built page: blinking-cursor, radial-halo, codex-grid-background (advisory) at every width, plus 6 line-length findings at 1280 (more at 1920). All true positives. No browser overlay (no shared browser tab).

## Priority Issues
1. [P1] Hero buries the work on phones. Name, 3 bullets, 3 full-width buttons and a 90-word bio fill ~1.3 screens; no project is visible in the first viewport. Fix: cut the bio to one sentence that states the positioning, put CV/contact on one row, let the flagship project start in the first viewport. (/impeccable distill, /impeccable layout)
2. [P1] No flagship. Innovation Befine (the proof of "ships SaaS solo") looks identical to the other 7, and its screenshot is a tiny unreadable payroll table. Fix: a featured treatment for #1 (larger, outcome line, "built solo" called out), a compact list for the rest. (/impeccable layout, /impeccable bolder)
3. [P2] Generic decoration layer: glass on all 7 sections, blue halo, grid, fake cursor. Fix: glass only on navbar and hero; flat surfaces elsewhere; drop the grid and cursor; reduce the halo. (/impeccable quieter)
4. [P2] Bio is résumé boilerplate ("Proven track record", "Deep expertise") that reads machine-written and repeats the bullets. Fix: rewrite in first person, concrete, one or two lines. (/impeccable clarify)
5. [P2] Chip soup: 11 tags on Befine, up to 13 on a job; the Stack section repeats them all. Fix: 3-4 key tags per item, full list only in Stack. (/impeccable distill)

## Persona Red Flags
- Recruiter on phone (60 seconds): sees name and stack, then a long bio; must scroll past it to see any work; job bullets are 9 deep for Melt Studio.
- Freelance founder: "contact --me" and "./hoja-de-vida.pdf" read as code; no plain "Hire me / Email" wording; light-mode resume button is pale pink and looks disabled.
- Distracted mobile user (Casey): no section nav on phone, contact only reachable at the very bottom or via the hero button.

## Minor Observations
- Line length 130-140 chars at 1080p in project descriptions and job bullets.
- Amatis screenshot is a login screen: weak evidence of the product.
- "8 total" aside adds nothing.
- Light-mode primary button (pale fill) is weaker than the dark-mode one.

## Questions to Consider
- What if the first screen said "I build and ship SaaS products end to end, alone" and showed Befine right under it?
- Does every section need a glass card, or could the terminal voice carry the identity on a plain surface?
- Would a recruiter miss the tag chips if only the Stack section had them?
