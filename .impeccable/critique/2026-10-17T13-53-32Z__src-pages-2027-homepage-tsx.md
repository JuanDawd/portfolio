---
target: 2027 home page
total_score: 21
max_score: 28
na_heuristics: 5,7,10
p0_count: 0
p1_count: 0
target_identity: "file:/Users/juandawdb/Documents/Code/Personal/Frontend/juankdawd-portfolio/src/pages/2027/HomePage.tsx"
target_fingerprint: "sha256:383606f963d22906dd3b20bdae0236941b920c0c605eacb502848aa0ab3d0a94"
target_path: /Users/juandawdb/Documents/Code/Personal/Frontend/juankdawd-portfolio/src/pages/2027/HomePage.tsx
timestamp: 2026-10-17T13-53-32Z
slug: src-pages-2027-homepage-tsx
---
⚠️ DEGRADED: single-context (sub-agents not requested by the user)

## Design Health Score (portfolio, Experience/Persuade) — 21/28, was 18/28

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Copy-email and expand/collapse both announce state |
| 2 | Match System / Real World | 3 | Plain-English pitch line now carries the meaning; terminal labels kept by choice |
| 3 | User Control and Freedom | 3 | Expand/collapse reversible, toggle below the list |
| 4 | Consistency and Standards | 3 | Featured + compact list is a clear, consistent pattern |
| 5 | Error Prevention | n/a | No forms |
| 6 | Recognition Rather Than Recall | 3 | Phone contact link, labelled archive |
| 7 | Flexibility and Efficiency | n/a | Portfolio |
| 8 | Aesthetic and Minimalist Design | 3 | Much cleaner; projects and experience still repeat each other |
| 9 | Error Recovery | 3 | Clipboard fallback |
| 10 | Help and Documentation | n/a | Portfolio |

## Design Specificity Verdict
LLM: Now reads as authored: the pitch line, the "built solo" flagship and the terminal voice are specific to Juan. Remaining generic parts: the flagship's screenshot (a beige admin table) and a closing contact block that doesn't echo the pitch.
Detector: 1 finding at every width, blinking-cursor in the hero: intentional (owner asked to keep it). 0 findings in source. Glow, grid and line-length findings cleared.

## Priority Issues
1. [P2] Flagship evidence is weak: Befine's screenshot is a low-contrast payroll table, and the card has no link, demo or breakdown, so a recruiter cannot verify "built solo". Fix: a sharper screenshot (cashier dashboard), plus 3 short "what I built" lines or a case link. (/impeccable bolder)
2. [P2] Projects and experience repeat: Overnights, Selii and Faceself appear in both with near-identical text, making the page ~30% longer than it needs to be on a phone. Fix: link each job to its project instead of repeating, or drop duplicate project rows. (/impeccable distill)
3. [P2] Weak ending: the contact block is small, sits after education, and its line ("Building something with React, Next.js or real-time data?") doesn't echo the pitch; light-mode primary buttons (pale pink) look disabled. Fix: a closing that restates the pitch with the email as the strongest element; firmer light-mode primary. (/impeccable clarify, /impeccable colorize)
4. [P3] Light mode loses the glass/plain distinction: the hero glass and the plain panels are both near-white. Fix: give light-mode panels a slightly different surface or border. (/impeccable polish)
5. [P3] Older jobs (2020-2022) get equal weight to the current role. Fix: compress roles older than 3 years to a single line each. (/impeccable distill)

## Persona Red Flags
- Recruiter on phone: reaches the flagship fast now, but cannot open it or see more than a table.
- Freelance founder: the page ends on education and a small contact card; the call to act is quieter than the hero.
- Casey (mobile): ~6 screens of experience after ~8 of projects; duplicate entries.

## Minor Observations
- Stack cloud (40 chips) is fine as the full list but could group by area.
- Featured card image crops to the table header on phones.

## Questions
- What would make Befine undeniable in five seconds?
- Should the page end with the pitch instead of education?
