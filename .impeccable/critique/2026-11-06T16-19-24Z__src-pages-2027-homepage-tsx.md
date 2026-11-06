---
target: 2027 portfolio (critique + audit)
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/mnt/Data/Personal/juankdawd-portfolio/src/pages/2027/HomePage.tsx"
target_fingerprint: "sha256:383606f963d22906dd3b20bdae0236941b920c0c605eacb502848aa0ab3d0a94"
target_path: /mnt/Data/Personal/juankdawd-portfolio/src/pages/2027/HomePage.tsx
timestamp: 2026-11-06T16-19-24Z
slug: src-pages-2027-homepage-tsx
---
Method: dual-agent (A: a8892bc29adf2f4b0 · B: ada5a731a2c8a216c)

## Design Health Score (critique)
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Copy-email feedback good; no active-section state in nav |
| 2 | Match System / Real World | 3 | `2027 ▾` reads as a date, not "past portfolio years" |
| 3 | User Control and Freedom | 3 | CV only reachable by scrolling back to the hero |
| 4 | Consistency and Standards | 3 | nav "work" vs section "projects"; `+6` tags inert while `+8 more` expands |
| 5 | Error Prevention | 3 | Clipboard failure silent (email stays visible) |
| 6 | Recognition Rather Than Recall | 3 | Hidden tags only in a `title` tooltip, unusable on phones |
| 7 | Flexibility and Efficiency | n/a | Single-page portfolio |
| 8 | Aesthetic and Minimalist Design | 2 | 33-chip Stack wall, 70-word Atelier paragraph, ~7 phone screens |
| 9 | Error Recovery | 3 | Few error paths, covered |
| 10 | Help and Documentation | n/a | Portfolio |
| **Total** | | **23/32** | Good |

## Audit Health Score
| # | Dimension | Score | Key Finding |
|---|---|---|---|
| 1 | Accessibility | 3 | Text AA everywhere; focus ring 2.4–2.6:1; reflow fails at 320px |
| 2 | Performance | 3 | 1920px LCP image without srcset; 6 backdrop-filter layers |
| 3 | Theming | 4 | Fully tokenised; logo hex is the only exception |
| 4 | Responsive | 2 | 20px overflow at 320px; targets drop to 16–20px from sm up |
| 5 | Implementation Integrity | 3 | Detector clean; minor duplication |
| **Total** | | **15/20** | Good |

## Design Specificity Verdict
Half authored. The terminal voice, the red DAWD block and the JD glass mark are Juan's; the structure under them (pill nav, hero card, stacked rounded panels, chip cloud, contact card) is the category default. The hero "glass" blurs a flat gradient, so it reads as a lighter navy box. Detector: 0 findings in src/pages/2027 and src/components/2027 (Logo.tsx CSS lives in a JS string the detector likely doesn't parse). Overlay skipped: no injectable browser.

## Priority Issues
- [P1] 320px reflow overflow — Hero.tsx:18 `whitespace-nowrap text-5xl` h1 is 286px in a 256px column; every section runs 20px off-screen (WCAG 1.4.10). Fix: smaller/clamped size below sm, drop nowrap, min-w-0 on grid children. /impeccable adapt
- [P1] CV not close at hand after the hero — phone nav only offers `contact` (Navbar.tsx:80-85), Contact card omits the CVs (Contact.tsx:30-75). Fix: both CV links in Contact, CV in the phone nav. /impeccable clarify
- [P1] Positioning proof buried — "built solo", "in production at Innovations Befine" sit inside a 70-word paragraph (constants.ts:275); hero claim has no evidence. Fix: 3–4 terminal proof lines for Atelier, echo one in the hero. /impeccable distill
- [P2] Homelab diagram contradicts its text — vaultwarden.svg shows Raspberry Pi + SQLite, copy says Proxmox + LXC (constants.ts:308). /impeccable polish
- [P2] Focus ring below 3:1 — shared.css:124 `outline-ring/50` = 2.37/2.59:1 (WCAG 1.4.11, 2.4.7). Fix: 2027 `:focus-visible` 2px solid ring + offset. /impeccable harden

## Persona Red Flags
- Recruiter on phone: never sees "Mid-Senior" on the page (only <title>); sticky nav offers no CV; `+6`/`+8` counts not tappable.
- Freelance founder: Atelier copy is jargon (native SSE, IndexedDB queue, RBAC); business outcome is half a sentence; no "working with me" line.
- Skeptical tech lead: catches Raspberry Pi vs Proxmox, `cat ./stack` on a directory.
- Low-vision: 11px tag text.

## Minor Observations
- Atelier screenshot `object-cover` crop on lg shows a dark sliver (Projects.tsx:26).
- Touch targets shrink to 16–28px from sm (Projects.tsx:102,113; Experience.tsx:55,109) — gate on pointer:fine instead.
- Atelier webp 1920×1080 preloaded, shown ≤613px; add srcset + fetchpriority.
- Light-theme logo: lower J goes grey on white nav; salmon D vs crimson primary.
- Stack: 33 chips, some without icons (AWS); low-signal certificates (HackerRank, English test).
- Hero lines wrap mid-phrase at 320px; light-theme secondary buttons barely separate from hero.
- Logo home link 34×32; no skip link; footer not a contentinfo landmark; unused Section `aside` prop; `dark` class set in 3 places.

## Questions to Consider
- If the terminal voice is the brand, why is the layout a stack of cards? Could the page behave like a session?
- Is Stack earning ~600px on a phone?
- What would a founder need in 10 seconds to believe "ships whole products solo"?
- Should the archive (`2027 ▾`) be a story beat instead of a cryptic control?
