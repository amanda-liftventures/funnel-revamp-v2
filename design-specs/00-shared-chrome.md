# 00 — Shared screen chrome (all funnel screens)

Derived by comparing frames `7814:30044` (12-inside-study-guide) and `7815:31603` (13-subscribe-risk-free) in file `2T3j73CQ4BKfuuXPnb0qFi`. The four chrome pieces below are byte-identical component instances on both frames (same node ids for the shared components: SystemStatusBar `7087:241`, ProgressBar `7210:1758`) and are shared across all 390 × 844 funnel screens.

## 1. iOS status bar (`SystemStatusBar`, component 7087:241, variant Color=Black)

- Size: authored at 375 wide, used stretched to **390 × 38**, `overflow: clip`, transparent bg (sits on the white header block).
- All glyphs are SVG assets, black fill:
  - **Time "9:41"** — 28.426 × 11.089 at left 33.45, top 17.17 (`statusbar-time-941.svg`).
  - **Mobile Signal** — 17 × 10.667 at right 64.33, top 17.67 (`statusbar-mobile-signal.svg`).
  - **Wifi** — 15.272 × 10.966 at right 44.03, top 17.33 (`statusbar-wifi.svg`).
  - **Battery** (3 pieces): outline 22 × 11.333 at right 17, top 17.33; terminal cap 1.328 × 4 at right 14.67, top 21; fill 18 × 7.333 at right 19, top 19.33 (`statusbar-battery-*.svg`).

## 2. Browser chrome bar ("Chrome - Top")

- Size: **390 × 55**.
- **bg layer:** white, spans inset `0 0 1.82% 0` (top ~54px of the 55px), with bottom hairline shadow `0px 0.4px 0px 0px #CCC`.
- **URL pill ("chrome-bar-input"):** bg `#E8EAED`, height 36, radius 30, left 11, right 10, bottom 10.
- **Center group** (absolute, left `calc(50% + 0.41px)`, top 16, flex row, gap 7, items center):
  - Lock icon: 16 × 16 box, glyph 7.672 × 11.508 centered (y offset +0.64px), fill black (`chrome-lock.svg`).
  - Text: `supersummary.com` — SF Pro Regular, 18px, `#202124`, line-height normal, no wrap.
- **Share icon:** 21 × 21 box at right 24, top 16; glyph 14.538 × 19.385 centered, fill `#9AA0A6` (`chrome-share.svg`).

## 3. Progress bar (`ProgressBar`, component 7210:1758, variant Step=7)

- Size: **390 × 36**, bg white (`--semantic/background-default`).
- Layout: flex row, items center, gap **4**, padding-left **8**, padding-right **16**.
- **Back arrow:** `<Icon>` wrapper 24 × 24, radius 8, transparent bg; `arrow_back` glyph area 14.4px wide spanning 20%–80% vertically, inner vector inset 16.67%, fill `#303030` (`icon-arrow-back.svg`). Design-system `<Icon>`: Size=Small(16)/Default/Large, Color=gray here.
- **Track:** flex-1 (338px at 390 frame width), height **4px**, bg `#EDEDED` (`--semantic/background-offpaper`), square corners (no radius in design data).
- **Fill:** fixed width **294px** × 4px, bg `#006C7A` (`--semantic/support/support-aqua[2]`), left-aligned → fill fraction **294 / 338 ≈ 87%** on both of these frames (variant prop `step = "7"`). The bar is a single continuous track + fill, **not** discrete segments; other steps of the funnel change only the fill width.

## 4. Sticky footer with primary button

Both frames end with a white footer containing one full-width primary CTA:

- **Container:** w 390, bg white, flex column, gap 12.
  - Frame 12 variant: in-flow last child, padding **16 on all sides**.
  - Frame 13 variant: **absolutely positioned** at bottom 0, centered (left 50%, translateX −50%), padding **16px 16px 24px 16px**; the scrollable content reserves `padding-bottom: 88px`. Treat the footer as sticky/fixed to the viewport bottom.
- **`<Button>` (design-system ds/button, Size=Default, Type=Primary, State=Default, Style=Default):**
  - h **48**, w full, radius **16** (`--default`), bg `#006C7A` (`--semantic/interactive-primary`), padding-x 16, internal gap 4, content centered, `overflow: clip`.
  - Label: `Next` — Open Sans SemiBold (`--font-family/fontfamily-default`), weight 600 (`--font-weight/fontweightsemibold`), **16px** (`--font-size/1rem`), line-height normal (100%), letter-spacing **0.25px**, color `#F8F8F8` (`--semantic/text-primary-contrast`).
  - End icon: `arrow_forward`, 24 × 24 box, glyph inset 18.36% (vertical) / 17.54% (horizontal), fill `#F8F8F8` (`button-icon-arrow-forward.svg`).
  - State shown on both frames: **Default (resting)**; component also defines hover/focused/active/disable/loading states.

## Vertical stack (both frames)

```
0    ┌ status bar        h 38  (white)
38   ├ browser chrome    h 55  (white, hairline #ccc at bottom)
93   ├ progress bar      h 36  (white)
129  ├ content area      flex-1 (frame-specific background gradient over white / #f8f8f8)
     └ footer            h 80 (frame 12: 16+48+16) or h 88 (frame 13: 16+48+24), white, primary CTA
844  ┘
```

## Shared tokens observed

| Token | Value |
|---|---|
| `--semantic/background-default` | `white` |
| `--semantic/background-offpaper` | `#EDEDED` |
| `--semantic/interactive-primary` | `#006C7A` |
| `--semantic/support/support-aqua[2]` | `#006C7A` |
| `--semantic/text-primary` | `#212121` |
| `--semantic/text-secondary` | `#616161` |
| `--semantic/text-primary-contrast` | `#F8F8F8` |
| `--font-family/fontfamily-display` | General Sans |
| `--font-family/fontfamily-default` | Open Sans |
| Radii | button `16px` (`--default`), icon wrapper `8px`, chrome pill `30px`, chip `100px` (`--rounded`) |
| Spacing scale | 0 / 2 / 4 / 8 / 12 / 16 / 24 / 32 / 40 (`--0` … `--40`) |

Per-frame duplicates of the shared SVG assets live in `assets/12-inside-study-guide/` and `assets/13-subscribe-risk-free/` (identical geometry; filenames match across the two folders: `statusbar-*.svg`, `chrome-*.svg`, `icon-arrow-back.svg`, `button-icon-arrow-forward.svg`).
