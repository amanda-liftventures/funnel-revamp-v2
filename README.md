# Mobile Web Funnel Revamp — v2 (Survey-Driven Funnel)

Front-end implementation of the v2 mobile funnel, pixel-matched to the Figma file
[Mobile App Funnel Revamp [Jira Ticket] | Q2'2026](https://www.figma.com/design/2T3j73CQ4BKfuuXPnb0qFi/?node-id=7814-29771)
(Page 30). Built with React + Vite + TypeScript; all content comes from mocked JSON.

## Flow

Entry: full-screen takeover when a CTA is tapped on a Study Guide page (mobile only).

1. **Welcome** — "Your next great read starts on SuperSummary" → Get Started
2. **Value props** — "See what makes us different"
3. **Q:** Where are you in *The Great Gatsby*? *(single-select, auto-advances)*
4. **Q:** What brought you here today? *(single)*
5. **Trust** — Trustpilot testimonials
6. **Q:** How many books do you typically read in a year? *(single)*
7. **Q:** How often do you read books? *(single)*
8. **Q:** Pick your top genres *(multi, max 3, Next button)*
9. **Belonging** — "Get more out of your book club"
10. **Q:** What can we help you do? *(multi, Next button)*
11. **Way more than a summary** — static feature cards (Variant A; Variant B
    will swap this for the "Spark strong discussions" detail screen,
    `src/screens/SparkDetailScreen.tsx`, currently unwired)
12. **Inside of your Study Guide for The Great Gatsby**
13. **Subscribe Risk-Free for 7 Days** — hands off to the existing checkout (mocked)

Survey questions are required: single-selects advance on tap (the Figma frames
have no footer on those steps); multi-selects disable Next until at least one
option is chosen. Answers persist to `localStorage` (`funnel-v2-answers`).

## Behavior notes

- **Progress bar** fills exactly as drawn per Figma frame (`progress` in
  `src/data/funnel.json`). The design's fills are not monotonic across steps —
  they mirror the frames on purpose. Switch to `index / steps.length` if product
  prefers monotonic progress.
- **DeviceChrome** (iOS status bar + fake Safari bar) replicates the chrome baked
  into the Figma frames so the app can be pixel-diffed against them. Remove
  `<DeviceChrome />` in `src/App.tsx` for production embedding.
- The intricate feature-card illustrations (mock mini-UIs) are flattened PNG
  exports from Figma at 3x, not hand-rebuilt DOM.

## Commands

```bash
npm run dev              # dev server on :5173
npm run build            # production build (dist/)
npm run build:prototype  # single-file clickable prototype (prototype/index.html)
```

## Structure

- `src/data/funnel.json` — mocked funnel content (copy, options, icons, progress)
- `src/data/types.ts` — step type definitions
- `src/App.tsx` — funnel state machine (step index, answers, detail view)
- `src/components/` — DeviceChrome, ProgressBar, FooterCTA, OptionPill, RichText
- `src/screens/` — one component per screen
- `design-specs/` — extracted Figma specs (per-frame .md), frame screenshots
  (`screens/*.png`) and raw assets; source of truth for pixel values

## Design system

Tokens in `src/styles/tokens.css` come from SuperSummary DS 2.0
(`OHMReJVPdXRYkjndGFVpf0`). Funnel CTAs use `interactive-primary` (#006C7A);
type families are General Sans (display), Open Sans (UI), Caveat (handwritten
annotation).
