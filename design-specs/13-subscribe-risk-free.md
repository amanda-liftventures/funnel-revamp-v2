# 13 — Subscribe Risk-Free for 7 Days

- **Figma node:** `7815:31603` ("iPhone 13 & 14 - 255") · file `2T3j73CQ4BKfuuXPnb0qFi`
- **Frame:** 390 × 844 (iPhone 13 & 14)
- **Screenshot:** `screens/13-subscribe-risk-free.png`

## Exact copy (verbatim)

| Where | Text |
|---|---|
| Status bar time | `9:41` (SVG glyph asset) |
| Browser chrome pill | `supersummary.com` |
| Headline | `Subscribe Risk-Free for 7 Days` (wraps to 2 lines at this width; "Risk-Free" sits over a green hand-drawn highlight) |
| Checklist row 1 | `From $3 a month, billed annually` |
| Checklist row 2 | `7-day Money-Back Guarantee` |
| Checklist row 3 | `Cancel anytime` |
| Rating 1 (glyphs baked into SVG assets) | `4.8` + 4 stars + `In App Store` |
| Rating 2 (glyphs baked into SVG assets) | `4.5` + 4 stars + `In Google Play` |
| CTA button | `Next` |

## Layout structure

```
Frame 390×844 — flex column, gap 12, align start
│  background: radial gradient at 0.7 opacity over solid #F8F8F8 (see Colors)
├─ "chrome" group (bg white, w 390) — in-flow, first visible child
│  ├─ SystemStatusBar — h 38, w 390
│  ├─ Chrome - Top — h 55, w 390 (supersummary.com pill; see 00-shared-chrome.md)
│  └─ ProgressBar — h 36, w 390 (fill 294px; see 00-shared-chrome.md)
│     (note: on this frame the ProgressBar is nested INSIDE the chrome group)
├─ Content — flex 1, flex column, gap 0, align center, justify center,
│  │        padding-top 16, padding-bottom 88 (reserves room for the fixed footer)
│  ├─ Title block — flex column, gap 16, padding 16px 24px, w full
│  │  ├─ Highlight (decoration) — absolute, left 201, top 21, 168 × 35, rotated 180°,
│  │  │    component "Supporting element/Text Highlight Medium":
│  │  │    5 stacked brush-stroke vectors, fill #D1EBC4, opacity 0.7 each
│  │  │    (vector insets within the 168×35 box:
│  │  │     1: 0 7.5% 64.68% 2.52% · 2: 21.68% 0 50.05% 4.39% · 3: 41.18% 1.53% 28.12% 3.16%
│  │  │     4: 57.47% 6.24% 14.9% 0.1% · 5: 73.91% 7.11% 0 0)
│  │  └─ Headline <p> — min-w full, text-align center
│  └─ "Benefits" — w 390, flex column, gap 8, padding 40px 24px
│     ├─ 3 × checklist row — bg white, radius 24, padding 8px 12px, flex row, gap 12, items center
│     │    [check icon 24×24 (rounded-square #E8F5E2 bg, radius 8, checkmark #578243)]
│     │    [text, flex-1]
│     └─ Ratings row — w full, flex row, gap 8, justify center, padding-y 32
│        ├─ "Appstore" widget — 145.627 × 48 (absolute-positioned children):
│        │    apple logo PNG 22.78 × 23.04 @ (11.39, 12.48)
│        │    "4.8" glyphs 21.378 × 11.31 @ (42.02, 9.05)
│        │    star 12.183 × 11.776 @ (67.94, 8.03)
│        │    star 12.86  × 11.776 @ (86.11, 8.03)
│        │    star 12.183 × 11.776 @ (104.96, 8.03)
│        │    star 12.183 × 11.776 @ (122.99, 8.03)   ← 4 stars total
│        │    "In App Store" 79.597 × 12.948 @ (43.06, 29.63)
│        └─ "Google Play" widget — 145.627 × 48:
│             play logo PNG 21.861 × 24.96 @ (11.39, 11.52)
│             "4.5" glyphs 21.252 × 11.167 @ (41.11, 9.2)
│             star 12.2   × 11.776 @ (67.07, 8.03)
│             star 12.878 × 11.776 @ (85.27, 8.03)
│             star 12.2   × 11.776 @ (104.14, 8.03)
│             star 12.2   × 11.776 @ (122.2, 8.03)    ← 4 stars total
│             "In Google Play" 92.856 × 13.447 @ (42.15, 29.15)
└─ Footer (absolute, bottom 0, left 50% translateX(-50%), w 390, bg white)
   │  flex column, gap 12, justify center, padding: 16px 16px 24px 16px
   └─ <Button> primary — h 48, w full, radius 16, bg #006c7a, padding-x 16, gap 4
        [label "Next"][End Icon 24×24 arrow_forward #F8F8F8]
```

## Colors

| Use | Value / token |
|---|---|
| Page background | radial gradient over `linear-gradient(90deg, #F8F8F8 0%, #F8F8F8 100%)` (solid #F8F8F8). Radial: center ≈ (211.5, 284), gradientTransform `matrix(0.050001 42.5 -26.512 0.031192 211.5 284)`, stop 0.15: `rgba(232,245,226,1)` (#E8F5E2), stop 0.9: `rgba(248,248,248,1)` (#F8F8F8), layer opacity **0.7** |
| Chrome group bg / checklist rows / footer | `white` (`--semantic/background-default`) |
| Chrome pill | `#E8EAED`, radius 30px; hairline `0px 0.4px 0px 0px #CCC` |
| Chrome URL text | `#202124`; share icon `#9AA0A6`; lock + status glyphs `black` |
| Back arrow glyph | `#303030` |
| Progress track | `#EDEDED` (`--semantic/background-offpaper`) |
| Progress fill | `#006C7A` (`--semantic/support/support-aqua[2]`) |
| Headline text | `#212121` (`--semantic/text-primary`) |
| Highlight brush strokes | `#D1EBC4` at opacity 0.7 |
| Checklist text | `#212121` |
| Check icon chip | bg `#E8F5E2` (24×24 rounded square, r 8), check `#578243` |
| Rating numerals + labels | `#212121` |
| Rating stars | `#F5D357` |
| Button background | `#006C7A` (`--semantic/interactive-primary`) |
| Button label + arrow | `#F8F8F8` (`--semantic/text-primary-contrast`) |

## Border radii / borders / shadows

- Checklist row: radius `24px`, no border, no shadow (white on tinted bg).
- Check icon: 24×24 rounded square, corner radius 8 (from SVG path), bg #E8F5E2.
- Button: radius `16px`, overflow clip, no border.
- Chrome pill: radius `30px`; chrome bar bottom hairline `0px 0.4px 0px 0px #ccc`.
- No drop shadows on this frame's content.

## Typography

| Node | Family / style | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| Headline (display/h4) | General Sans Medium (`--font-family/fontfamily-display`) | Medium (500) | 36px (`--font-size/2,25rem`) | 1.2 | 0 | #212121, center |
| Checklist rows (default/body-small) | Open Sans Regular (`--font-family/fontfamily-default`) | 400 (`--font-weight/fontweightregular`) | 14px (`--font-size/0,875rem`) | 1.5 | 0.25px | #212121 |
| Button label (Button/label-default) | Open Sans SemiBold | 600 (`--font-weight/fontweightsemibold`) | 16px (`--font-size/1rem`) | normal (100%) | 0.25px | #F8F8F8 |
| Chrome URL | SF Pro Regular | 400 | 18px | normal | — | #202124 |
| Rating text ("4.8", "In App Store", …) | vector outlines (SVG assets), not live text | — | ≈ 11–13.4px cap heights | — | — | #212121 |

## Progress bar state

Identical to frame 12: `ProgressBar` variant `step = "7"`; h 36, white bg, pl 8 / pr 16, gap 4; 24×24 back `<Icon>` (arrow_back, #303030); track flex-1 (338px) × 4px `#EDEDED`; fill fixed `294px` × 4px `#006C7A` → **294 / 338 ≈ 87%**.

## Header / footer composition

- **Header:** iOS status bar (9:41 / signal / wifi / battery, black SVG glyphs) → browser chrome bar (h 55, grey pill #E8EAED with lock + "supersummary.com", share icon right) → progress bar (h 36). All white, grouped as one "chrome" node on this frame.
- **Footer:** unlike frame 12 (in-flow, p 16), here the footer is **absolutely positioned** at bottom 0, horizontally centered (left 50%, translateX −50%), w 390, white, padding 16px 16px **24px** 16px. Contains the same primary `Next` button (h 48, #006C7A, radius 16, arrow_forward end icon). Content column reserves `padding-bottom: 88px` for it.

## Downloaded assets (`assets/13-subscribe-risk-free/`)

| File | Used for |
|---|---|
| `icon-arrow-back.svg` | Progress bar back arrow (#303030) |
| `statusbar-battery-outline.svg` / `statusbar-battery-cap.svg` / `statusbar-battery-fill.svg` | Status bar battery (same geometry as frame 12) |
| `statusbar-wifi.svg` / `statusbar-mobile-signal.svg` / `statusbar-time-941.svg` | Status bar wifi, signal, "9:41" |
| `chrome-share.svg` / `chrome-lock.svg` | Browser chrome share + lock icons |
| `button-icon-arrow-forward.svg` | Next button end icon (#F8F8F8) |
| `highlight-stroke-1.svg` … `highlight-stroke-5.svg` | 5 brush strokes of the "Text Highlight Medium" decoration behind "Risk-Free" (#D1EBC4, opacity 0.7, container rotated 180°) |
| `checklist-check-icon.svg` | 24×24 green check chip used by all 3 checklist rows (bg #E8F5E2, check #578243) |
| `appstore-apple-logo.png` | App Store rating widget — Apple logo (22.78 × 23.04) |
| `appstore-rating-4-8.svg` | "4.8" numerals (#212121) |
| `appstore-star-1.svg` … `appstore-star-4.svg` | 4 gold stars (#F5D357) |
| `appstore-label-in-app-store.svg` | "In App Store" lettering (#212121) |
| `googleplay-logo.png` | Google Play rating widget — Play triangle logo (21.861 × 24.96) |
| `googleplay-rating-4-5.svg` | "4.5" numerals (#212121) |
| `googleplay-star-1.svg` … `googleplay-star-4.svg` | 4 gold stars (#F5D357) |
| `googleplay-label-in-google-play.svg` | "In Google Play" lettering (#212121) |

Note: each rating widget shows exactly **4 star glyphs** in the design (verified against a zoomed render of node 7815:31675), not 5.

## Raw reference code (get_design_context, React + Tailwind)

```tsx
const imgVector = ".../63241725-260f-4eac-9d3a-74ec90004bfc.svg"; // arrow_back
const imgRectangle = ".../dcbf5a27-52df-49e2-9ba4-cf47a50a203d.svg"; // battery outline
const imgCombinedShape = ".../806ff643-57c9-49a1-966f-d19ea3f9f7a4.svg"; // battery cap
const imgRectangle1 = ".../ac7a30f3-9674-415d-8de9-37c6d6ad75da.svg"; // battery fill
const imgWifi = ".../fa5f3ab0-b761-4e25-a160-d983c1e8fba7.svg";
const imgMobileSignal = ".../5028de5b-6a3d-447c-a7d4-d0ea4bfe34f5.svg";
const img941 = ".../14bbcd4c-6714-4a7a-89fa-4c0fbb548587.svg";
const imgVector7 = ".../3498a9cd-3133-4b40-a05f-26afd9ee8a2f.png"; // apple logo
const imgVector14 = ".../ba23891a-d8fb-48fc-ae83-a4bffafab0ef.png"; // google play logo
const imgVector1 = ".../3468946d-777b-44fe-a116-8016e1a1932a.svg"; // arrow_forward
const imgShare = ".../6850b3b0-359e-403e-bac3-639028274b55.svg";
const imgLock = ".../47470413-dd2d-41fb-89b7-c862387be31f.svg";
const imgVector2..6 = "highlight strokes 1..5 (.svg)";
const imgFrame427319445 = ".../29ddb3ca-35f0-4e91-ab57-3bb1b9722852.svg"; // check icon
const imgVector8 = "appstore '4.8'"; const imgVector9..12 = "appstore stars 1..4";
const imgVector13 = "'In App Store'";
const imgVector15 = "googleplay '4.5'"; const imgVector16..19 = "googleplay stars 1..4";
const imgVector20 = "'In Google Play'";

// ProgressBar and SystemStatusBar components: byte-identical to frame 12
// (see 12-inside-study-guide.md) — nodes 7210:1758 / 7087:241.

export default function IPhone1314255() {
  return (
    <div className="content-stretch flex flex-col gap-[var(--12,12px)] items-start relative size-full" data-node-id="7815:31603" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.699999988079071'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0.050001 42.5 -26.512 0.031192 211.5 284)'><stop stop-color='rgba(232,245,226,1)' offset='0.15'/><stop stop-color='rgba(248,248,248,1)' offset='0.9'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(248, 248, 248) 0%, rgb(248, 248, 248) 100%)" }} data-name="iPhone 13 & 14 - 255">
      <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col gap-[var(--12,12px)] items-start justify-center left-1/2 pb-[var(--24,24px)] pt-[var(--16,16px)] px-[16px] w-[390px]" data-node-id="7815:31604" data-name="Frame">
        <div className="bg-[var(--semantic\/interactive-primary,#006c7a)] content-stretch flex gap-[var(--4,4px)] h-[48px] items-center justify-center overflow-clip px-[var(--16,16px)] py-[var(--0,0px)] relative rounded-[var(--default,16px)] shrink-0 w-full" data-node-id="7815:31605" data-name="<Button>">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightsemibold,600)] leading-[normal] relative shrink-0 text-[color:var(--semantic\/text-primary-contrast,#f8f8f8)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Next
          </p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="End Icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Style=Round">
              <div className="absolute inset-[18.36%_17.54%]" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="7815:31606" data-name="chrome">
        <SystemStatusBar className="h-[38px] overflow-clip relative shrink-0 w-[390px]" />
        <div className="h-[55px] relative shrink-0 w-[390px]" data-node-id="7815:31608" data-name="Chrome - Top">
          <div className="absolute bg-white inset-[0_0_1.82%_0] shadow-[0px_0.4px_0px_0px_#ccc]" data-name="bg" />
          <div className="absolute bg-[#e8eaed] bottom-[10px] h-[36px] left-[11px] right-[10px] rounded-[30px]" data-name="chrome-bar-input" />
          <div className="absolute overflow-clip right-[24px] size-[21px] top-[16px]" data-name=".icons/chrome/share">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.385px] left-1/2 top-1/2 w-[14.538px]" data-name="Share">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex gap-[7px] items-center justify-center left-[calc(50%+0.41px)] top-[16px]">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name=".icons/chrome/lock">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.508px] left-1/2 top-[calc(50%+0.64px)] w-[7.672px]" data-name="Lock">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular'] font-normal leading-[normal] relative shrink-0 text-[#202124] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              supersummary.com
            </p>
          </div>
        </div>
        <ProgressBar className="bg-[var(--semantic\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative shrink-0 w-[390px]" />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-center justify-center min-h-px pb-[88px] pt-[var(--16,16px)] relative w-full" data-node-id="7815:31610">
        <div className="content-stretch flex flex-col gap-[var(--16,16px)] items-start px-[var(--24,24px)] py-[var(--16,16px)] relative shrink-0 w-full" data-node-id="7815:31616">
          <div className="absolute flex h-[35px] items-center justify-center left-[201px] top-[21px] w-[168px]" data-node-id="7815:31617">
            <div className="flex-none rotate-180">
              <div className="h-[35px] relative w-[168px]" data-name="Supporting element/Text Highlight Medium">
                <div className="absolute inset-[0_7.5%_64.68%_2.52%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} /></div>
                <div className="absolute inset-[21.68%_0_50.05%_4.39%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} /></div>
                <div className="absolute inset-[41.18%_1.53%_28.12%_3.16%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} /></div>
                <div className="absolute inset-[57.47%_6.24%_14.9%_0.1%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} /></div>
                <div className="absolute inset-[73.91%_7.11%_0_0]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} /></div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[1.2] min-w-full not-italic relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/2\,25rem,36px)] text-center w-[min-content]" data-node-id="7815:31618">
            Subscribe Risk-Free for 7 Days
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--8,8px)] items-start px-[var(--24,24px)] py-[var(--40,40px)] relative shrink-0 w-[390px]" data-node-id="7815:31621" data-name="Benefits">
          <!-- 3 checklist rows: nodes 7815:31622 / 31626 / 31630 — identical structure:
               bg-white flex gap-[12px] items-center px-[12px] py-[8px] rounded-[24px] w-full
               [24×24 img: imgFrame427319445 check icon]
               [p flex-1: Open_Sans:Regular 400, 14px, leading 1.5, tracking 0.25px, #212121]
               Texts: "From $3 a month, billed annually" / "7-day Money-Back Guarantee" / "Cancel anytime"
          -->
          <div className="content-stretch flex gap-[8px] items-center justify-center py-[var(--32,32px)] relative shrink-0 w-full" data-node-id="7815:31675">
            <div className="h-[48px] overflow-clip relative shrink-0 w-[145.627px]" data-node-id="7815:31676" data-name="Appstore">
              <div className="absolute h-[23.04px] left-[11.39px] top-[12.48px] w-[22.78px]"><img alt="" className="absolute block inset-0 max-w-none size-full" height="23.04" src={imgVector7} width="22.78" /></div>
              <div className="absolute h-[11.31px] left-[42.02px] top-[9.05px] w-[21.378px]"><img alt="" src={imgVector8} className="absolute block inset-0 max-w-none size-full" /></div>
              <div className="absolute h-[11.776px] left-[67.94px] top-[8.03px] w-[12.183px]"><img alt="" src={imgVector9} className="absolute block inset-0 max-w-none size-full" /></div>
              <div className="absolute h-[11.776px] left-[86.11px] top-[8.03px] w-[12.86px]"><img alt="" src={imgVector10} className="absolute block inset-0 max-w-none size-full" /></div>
              <div className="absolute h-[11.776px] left-[104.96px] top-[8.03px] w-[12.183px]"><img alt="" src={imgVector11} className="absolute block inset-0 max-w-none size-full" /></div>
              <div className="absolute h-[11.776px] left-[122.99px] top-[8.03px] w-[12.183px]"><img alt="" src={imgVector12} className="absolute block inset-0 max-w-none size-full" /></div>
              <div className="absolute h-[12.948px] left-[43.06px] top-[29.63px] w-[79.597px]"><img alt="" src={imgVector13} className="absolute block inset-0 max-w-none size-full" /></div>
            </div>
            <div className="h-[48px] overflow-clip relative shrink-0 w-[145.627px]" data-node-id="7815:31684" data-name="Google Play">
              <div className="absolute h-[24.96px] left-[11.39px] top-[11.52px] w-[21.861px]"><img alt="" className="absolute block inset-0 max-w-none size-full" height="24.96" src={imgVector14} width="21.861" /></div>
              <div className="absolute h-[11.167px] left-[41.11px] top-[9.2px] w-[21.252px]"><img alt="" src={imgVector15} className="absolute block inset-0 max-w-none size-full" /></div>
              <div className="absolute h-[11.776px] left-[67.07px] top-[8.03px] w-[12.2px]"><img alt="" src={imgVector16} className="absolute block inset-0 max-w-none size-full" /></div>
              <div className="absolute h-[11.776px] left-[85.27px] top-[8.03px] w-[12.878px]"><img alt="" src={imgVector17} className="absolute block inset-0 max-w-none size-full" /></div>
              <div className="absolute h-[11.776px] left-[104.14px] top-[8.03px] w-[12.2px]"><img alt="" src={imgVector18} className="absolute block inset-0 max-w-none size-full" /></div>
              <div className="absolute h-[11.776px] left-[122.2px] top-[8.03px] w-[12.2px]"><img alt="" src={imgVector19} className="absolute block inset-0 max-w-none size-full" /></div>
              <div className="absolute h-[13.447px] left-[42.15px] top-[29.15px] w-[92.856px]"><img alt="" src={imgVector20} className="absolute block inset-0 max-w-none size-full" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

Note: the ProgressBar/SystemStatusBar components and the 3 checklist rows are condensed with comments; every other node is verbatim from `get_design_context`. Asset URLs truncated to `...` — files downloaded to `assets/13-subscribe-risk-free/` (remote URLs expire in ~7 days).
