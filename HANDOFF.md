# HANDOFF — SuperSummary Mobile Web Funnel Revamp v2

> Context document for picking this project up in a new session. Living notes on
> decisions and open items; the README covers how the code works.

## 1. What this project is

Front-end build of the **v2 survey-driven mobile funnel** for SuperSummary, replacing the current
one-question modal experiment. It's a clickable, pixel-matched implementation driven entirely by
mocked JSON — intended for usability testing, not production wiring. Two flow variants are tested
simultaneously off one deployment.

**Role split:** Amanda (designer, works in Figma, not a coder) directs; the assistant extracts specs
from Figma and implements. Reviews happen screen-by-screen: Amanda gives notes, they get fixed,
verified in a browser, then pushed.

## 2. Where everything lives

| Thing | Location |
|---|---|
| Repo | `/Users/amandatrotta/Documents/Liftventures/funnel-revamp-v2` |
| Branch | `funnel-v2` (all work; `main` is still just the initial commit) |
| Remote | https://github.com/amanda-liftventures/funnel-revamp-v2 |
| Figma — funnel | File `2T3j73CQ4BKfuuXPnb0qFi` · **Page 31** = current flow (frames "Screen 1…13") · Page 30 = superseded original |
| Figma — v1 payoff copy | Same file, page "🏁 Stakeholder Checkpoint \| v1.1" (frames Step 84–93) |
| Figma — design system | File `OHMReJVPdXRYkjndGFVpf0` (DS 2.0) |
| Material icons | File `SAknuBvuoCgFnwXCwRWJpb` |
| Extracted specs | `design-specs/` — per-frame `.md`, frame screenshots, raw assets. Source of truth for pixel values. |

**Figma access:** via the `figma-console` MCP Desktop Bridge. It must be open **in the target file** —
it silently attaches to whatever file has the plugin running. Use `figma_list_open_files` /
`figma_navigate` to check and switch. `figma_get_selection` reads Amanda's current selection, which
is how she hands over frames.

## 3. Stack and commands

React 19 + Vite 7 + TypeScript, no UI framework, plain CSS per component.

```bash
npm run dev              # dev server :5173
npm run build            # production build -> dist/ (what Vercel runs)
npm run build:prototype  # single self-contained HTML -> prototype/index.html
npx tsc -b               # typecheck (run from repo root)
```

`vercel.json` pins the Vite preset, `dist` output, and a catch-all rewrite to `index.html`.

## 4. The two variants

One build serves both, selected by URL:

- `/?variant=complete` — full 13-screen flow (**default**; also used for unknown/missing params)
- `/?variant=compact` — same behavior minus the three reading-habit questions (10 screens)

Logic in `src/variant.ts`. Membership is **data, not code**: a step is in every variant unless it
declares `"variants": [...]` in `funnel.json`. A link that loses its `?` (`/variant=compact`) still
resolves via a path fallback plus the Vercel rewrite.

## 5. The flow (14 steps, `src/data/funnel.json`)

| # | id | type | Variants | Notes |
|---|---|---|---|---|
| 1 | welcome | welcome | both | Animated guide-card strips |
| 2 | q-where-are-you | question | both | single-select, auto-advance |
| 3 | q-what-brought-you | question | both | **Q2 — drives all personalization** |
| 4 | value-props | value-props | both | |
| 5 | trust | trust | both | Trustpilot |
| 6 | q-books-per-year | **slider** | complete only | book-pile animation |
| 7 | q-how-often | question | complete only | |
| 8 | q-genres | question | complete only | multi, max 3 |
| 9 | belonging | belonging | both | **headline personalized by Q2** |
| 10 | q-what-can-we-help | question | both | multi |
| 11 | spark-checklist | spark-checklist | both | **headline + subhead personalized by Q2** |
| 12 | inside-guide | inside-guide | both | 9 chips, each opens a drawer |
| 13 | subscribe | subscribe | both | |
| 14 | create-account | create-account | both | static end screen, no chrome/progress |

## 6. Confirmed decisions

### Scope & behavior

- Build ends at Subscribe; Create Account is a **static image** marking the checkout hand-off (not
  interactive).
- Flow is **linear** — no branching. Personalization changes copy only.
- Questions are required. Single-selects **auto-advance on tap** (the frames have no footer on those
  steps); multi-selects disable Next until ≥1 selection.
- Answers are **session-only** (no localStorage). Fresh load = clean; navigating back re-shows
  in-session answers as checked (deliberate).
- Progress bar shows **real progress** — equal increments, 100% at Subscribe. Figma's fills are
  representational and were deliberately ignored. Denominator follows the active variant.
- On non-question screens the CTA **and its white footer** fade in together 1s after mount,
  unclickable until then. The footer overlays absolutely so the screen's gradient fills that area
  during the delay (a plain white strip read as a bug).
- Book slider starts at the **smallest range** so lighter readers only ever add to the pile.
- Cards on step 11 are **not clickable** (11 and the old detail screen are mutually exclusive A/B
  variants, not a drill-down).

### Design fidelity

- All background gradients were decoded from each frame's actual gradient matrix (early
  approximations were ~4× too small).
- Brush highlights are **word-anchored**, not pixel-positioned, so they track the text.
- DS component states (Button, Link, Radio Button) were pulled from the DS file's variant matrices,
  not invented.
- Intricate illustrations (feature tiles, book covers, drawer artwork) are **flattened 3× PNG
  exports** from Figma, not rebuilt in DOM.
- `DeviceChrome` (fake iOS status bar + Safari bar) replicates chrome baked into the frames so the
  app can be pixel-diffed. Remove it for production embedding.

## 7. Key technical patterns

- **Assets**: live in `src/funnel-assets/`, referenced by `/assets/...` paths in JSON/components and
  resolved through `src/assets-map.ts` (an `import.meta.glob` map). Anything bypassing `asset()`
  silently 404s to the SPA's HTML — this has bitten once.
- **Personalization**: a `copy` table on the step, keyed by Q2 answer value, plus a `default` row
  covering Other / unknown / unanswered. Rows are `{ headline, highlight?, subhead? }` mirroring the
  source copy tables.
- **Brush highlight** (both personalized screens): background image on the highlighted span,
  `background-size: max(100%, <art natural width>) <art natural height>`,
  `background-position: center 58%`, 12px horizontal padding/negative margin, and
  `box-decoration-break: clone`. The `clone` gives one stroke per line for wrapping phrases; the
  `max()` floor stops short phrases from squeezing the stroke (thin/distorted); the padding gives the
  overhang the frames show.
- **Layout robustness**: step 9's cards and badge flow *below* the copy rather than sitting at fixed
  offsets, so longer personalized headlines push them down instead of colliding.
- **Drawers** (step 12): `ChipDrawer` — 390×365 sheet, 16px top corners, `0 -6 16` shadow, slides
  up/down, closes via X / scrim / Escape, doesn't close on inside taps. Parent holds `active` +
  `open` so the exit animation completes before unmount.
- All motion respects `prefers-reduced-motion`.

## 8. Open items

1. **Quotes drawer artwork is a duplicate of Themes.** Verified two ways — exported PNGs are
   byte-identical and both Figma frames reference the same four image fills. It's the source frame,
   not the export. Needs a distinct illustration, then re-export `quotes.png`.
2. **Two highlight phrases were guessed.** In the step-11 copy table, two rows said "⚠️ see note" and
   the note was cut off in the screenshot. Chose the outcome word by pattern: "Go **deeper** than the
   plot" and "Know the book **inside out**". Confirm or correct.
3. **Slider screen has no Next button in Figma** — a standard Next was assumed (a slider can't
   auto-advance since any position is an answer). Confirm.
4. **Hidden "5 of 20" step-counter text** exists in every Page 31 frame but is invisible. Ignored.
   Confirm whether a "X of Y" label should ship.
5. **Vercel branch**: work is on `funnel-v2`; the clean production domain normally tracks the default
   branch (`main`, still empty). Either merge or set `funnel-v2` as production branch. **Also**:
   Vercel puts *preview* deployments behind login — external testers would hit an auth wall, so run
   the test off production.
6. **Git identity**: commits are authored as `amandatrotta@MacBook-Pro-de-Amanda.local`. Fix with
   `git config --global user.email "amanda@liftventures.com"` then amend if desired.
7. **Drawer scrim** (`rgba(0,0,0,0.32)`) isn't specified in Figma — the drawer frames are standalone.
   Adjust if the DS has a token.
8. **No PR opened yet** from `funnel-v2`.

## 9. Working practices that mattered

- **Verify in the browser, don't assume.** Every change was checked live (measuring geometry via the
  browser's JS console, screenshots for visual confirmation) before reporting done.
- **Scripted clicks leave text selection**, which renders as a grey block over headlines and looks
  like a styling bug in screenshots. Call `window.getSelection().removeAllRanges()` before
  screenshotting.
- **Never retype base64 through model output** when exporting Figma images — it corrupts silently.
  Extract the `b64` field from the tool-result spill file with Python, decode, then verify with
  `file` + an adler32/md5 check against the value Figma computed.
- **Changes are scoped to the screen under review**; when a shared component changes, say which
  already-approved screens it also affects.
- Commit messages state what changed and why; each review round ends with a rebuild of the prototype
  and a push.

## 10. Unwired alternates kept in the repo

For future A/B tests, swappable with a one-line change in `src/App.tsx`:

- `WayMoreScreen` — the earlier "Way more than a summary" payoff screen (replaced by Screen 11.4).
- `SparkDetailScreen` — the "Spark strong discussions" detail screen from the original card-tap
  concept.
