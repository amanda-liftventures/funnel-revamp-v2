# Mobile Web Funnel Revamp — v2 (Survey-Driven Funnel)

Front-end implementation of the v2 mobile funnel, pixel-matched to the Figma file
[Mobile App Funnel Revamp [Jira Ticket] | Q2'2026](https://www.figma.com/design/2T3j73CQ4BKfuuXPnb0qFi/?node-id=7856-19681)
(Page 31 — the post-workshop flow). Built with React + Vite + TypeScript; all
content comes from mocked JSON.

## Usability-test variants

Two flows ship from one build, chosen by `?variant=` on the URL:

| URL | Flow |
|---|---|
| `https://<deployment>/?variant=complete` | Full flow, 13 screens (default) |
| `https://<deployment>/?variant=compact` | Same behaviour, minus the three reading-habit questions (10 screens) |

`complete` is the default, so a link with no parameter — or with an
unrecognised one — still shows a working funnel. A link that loses its `?`
(`/variant=compact`) also resolves, via `vercel.json`'s catch-all rewrite plus a
path fallback in `src/variant.ts`.

Membership lives in the data, not the code: a step is in every variant unless it
declares `"variants": [...]` in `src/data/funnel.json`. To move a screen between
variants, edit that one field.

## Flow

Entry: full-screen takeover when a CTA is tapped on a Study Guide page (mobile only).

1. **Welcome** — "Your next great read starts on SuperSummary" → Get Started
2. **Q:** Where are you in *The Great Gatsby*? *(single-select, auto-advances)*
3. **Q:** What brought you here today? *(single)*
4. **Value props** — "See what makes us different"
5. **Trust** — Trustpilot testimonials
6. **Q:** How many books do you read in a year? *(slider — `complete` only)*
7. **Q:** How often do you read books? *(single — `complete` only)*
8. **Q:** Pick your top genres *(multi, max 3 — `complete` only)*
9. **Belonging** — "Get more out of your book club"
10. **Q:** What can we help you do? *(multi, Next button)*
11. **Payoff** — benefit checklist (Screen 11.4). Headline and subhead are
    personalized by the Q2 answer (see below); the checklist is the same for
    everyone.
12. **Inside of your Study Guide for The Great Gatsby** — each of the nine chips
    opens its own bottom-sheet drawer (slides up; closes via X, scrim tap, or
    Escape). Content lives in `chips` in `src/screens/InsideGuideScreen.tsx`,
    illustrations in `src/funnel-assets/12-chip-drawers/`.
13. **Subscribe Risk-Free for 7 Days** → **Create Account** (static end screen,
    marks the hand-off to checkout)

Survey questions are required: single-selects advance on tap (the Figma frames
have no footer on those steps); multi-selects disable Next until at least one
option is chosen. Answers live for the session only — a reload starts clean.

## Personalized payoff copy

The payoff screen's headline and subhead change with the Q2 answer ("What
brought you here today?"), in both variants. The mapping lives in the
`spark-checklist` step in `src/data/funnel.json`, keyed by Q2 answer value:

| Q2 answer | Headline (highlighted phrase) |
|---|---|
| Preparing for a book club | Spark strong **discussions** |
| Going deeper on a book | Go **deeper** than the plot |
| Studying for a class | Walk into class **prepared** |
| Teaching a class | Teach it with **confidence** |
| Helping someone with a book | Have the **answers** |
| Exploring what to read next | Find your **next great read** |
| Other / no answer / unknown | Know the book **inside out** (`default` row) |

Each row is `{ headline, highlight, subhead }` — mirroring the copy table.
`highlight` must be a substring of `headline`; the brush SVG is drawn behind it
and scales to the phrase, so any wording works. Omit `highlight` for no brush.
The `default` row also covers a user reaching the screen without answering Q2.

## Behavior notes

- **Progress bar** shows real progress: equal increments per step, reaching 100%
  on Subscribe. The denominator follows the active variant, so both flows fill
  completely. (The Figma frames' fills are representational only.)
- **Delayed CTA** — on non-question screens the footer (white background *and*
  button) fades in 1s after the screen mounts, and is unclickable until then.
- **Book slider** (screen 6) starts at the smallest range so lighter readers only
  ever add to the pile; books pop in staggered on increase and out in reverse on
  decrease. All motion respects `prefers-reduced-motion`.
- **DeviceChrome** (iOS status bar + fake Safari bar) replicates the chrome baked
  into the Figma frames so the app can be pixel-diffed against them. Remove
  `<DeviceChrome />` in `src/App.tsx` for production embedding.
- Intricate illustrations (feature tiles, book covers) are flattened 3x PNG
  exports from Figma, not hand-rebuilt DOM.
- Unwired alternates kept for future A/B tests: `WayMoreScreen` and
  `SparkDetailScreen` (earlier payoff-screen variants).
- **Known content gap:** the Quotes drawer illustration is currently a copy of
  the Themes artwork — the two frames share the same image fills in Figma.
  Replace `quotes.png` once a distinct illustration exists.

## Commands

```bash
npm run dev              # dev server on :5173
npm run build            # production build (dist/) — what Vercel runs
npm run build:prototype  # single-file clickable prototype (prototype/index.html)
```

## Deployment

`vercel.json` pins the Vite preset, `dist` output, and a catch-all rewrite to
`index.html`. Pushing this branch to a Vercel-connected repo is all that's
needed; both variant URLs work on the same deployment.

## Structure

- `src/data/funnel.json` — mocked funnel content (copy, options, icons, variants)
- `src/data/types.ts` — step type definitions
- `src/variant.ts` — URL → variant resolution and step filtering
- `src/App.tsx` — funnel state machine (step index, answers)
- `src/components/` — DeviceChrome, ProgressBar, FooterCTA, OptionPill, RichText
- `src/screens/` — one component per screen
- `design-specs/` — extracted Figma specs (per-frame .md), frame screenshots
  (`screens/*.png`) and raw assets; source of truth for pixel values

## Design system

Tokens in `src/styles/tokens.css` come from SuperSummary DS 2.0
(`OHMReJVPdXRYkjndGFVpf0`); `src/styles/ds.css` carries the Button, Link and
Radio Button state matrices extracted from that file. Funnel CTAs use
`interactive-primary` (#006C7A); type families are General Sans (display),
Open Sans (UI), Caveat (handwritten annotation).
