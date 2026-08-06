# 12 — Inside of your Study Guide for The Great Gatsby

- **Figma node:** `7814:30044` ("Step 25") · file `2T3j73CQ4BKfuuXPnb0qFi`
- **Frame:** 390 × 844 (iPhone 13 & 14)
- **Screenshot:** `screens/12-inside-study-guide.png`

## Exact copy (verbatim)

| Where | Text |
|---|---|
| Status bar time | `9:41` (SVG glyph asset) |
| Browser chrome pill | `supersummary.com` |
| Book cover (baked into SVG/PNG assets) | `SuperSummary` (logo), `The Great Gatsby`, `F. Scott Fitzgerald` |
| Headline | `Inside of your Study Guide for The Great Gatsby:` — "The Great Gatsby" is italic; trailing colon is regular weight |
| Chip 1 | `Symbols & Motifs` |
| Chip 2 | `Discussion Questions ·` (verbatim from Figma text node — includes a trailing space + middle dot `·`, likely a data artifact) |
| Chip 3 | `Chapter Summaries` |
| Chip 4 | `Important Quotes` |
| Chip 5 | `Character Lists & Analyses` |
| Chip 6 | `Themes` |
| Handwritten note | `+ much more` |
| CTA button | `Next` |

## Layout structure

```
Frame "Step 25" 390×844 — flex column, gap 0, align start
│  background: radial-gradient (see Colors) painted over white
├─ iOS Header (bg white, w 390)
│  ├─ SystemStatusBar — h 38, w 390 (component authored at 375)
│  └─ Chrome - Top — h 55, w 390 ("supersummary.com" pill; see 00-shared-chrome.md)
├─ ProgressBar — h 36, w 390 (see 00-shared-chrome.md; fill 294px)
├─ Content — flex 1, flex column, gap 24, align center, justify center, w full
│  ├─ Body — flex column, gap 32, align center
│  │  ├─ Cover — 140 × 195 (book cover composed of layered assets, Elevation/1 shadow style present in design: 0 2 8 0 Semantic/shadow)
│  │  │  ├─ cover-outline-shadow.svg (white card + shadow, inset 0.21% 0.3%)
│  │  │  ├─ cover-outline.svg (border stroke, same inset)
│  │  │  ├─ SuperSummary logo: cover-logo.svg masked by cover-logo-mask.svg
│  │  │  │    inset 5.13% 40.48% 88.03% 7.14% (mask 73.333 × 13.333)
│  │  │  ├─ cover-title-text.svg ("The Great Gatsby") inset 17.78% 16.05% 75.81% 7.27%, fill #212121
│  │  │  ├─ cover-author-text.svg ("F. Scott Fitzgerald") inset 25.69% 27.62% 68.75% 7.9%, fill #212121
│  │  │  └─ cover-illustration.png (yellow vintage-car art, 120 × 107.5) inset 39.74% 7.14% 5.13% 7.14%
│  │  └─ Headline <p> — w 342, text-align center
├─ Claims — flex column, gap 12, align center, w full   (sibling inside Content)
│  │  ├─ Chips — flex wrap, gap 8 (row and column), padding-x 16, justify center, content center, w full
│  │  │  └─ 6 × <Chip> — bg #d6e3f2, radius 100px (full pill), min-height 32,
│  │  │       padding 4px 12px, internal gap 2, row: [Start Icon 16×16][label]
│  │  └─ "+ much more" — w 293, text-align right
└─ Footer — bg white, w 390, padding 16 (all sides), flex column, gap 12
   └─ <Button> primary — h 48, w full, radius 16, bg #006c7a, padding-x 16, gap 4,
        centered row: [label "Next"][End Icon 24×24 arrow_forward]
```

## Colors

| Use | Value / token |
|---|---|
| Page background gradient | radial gradient, center (195, 289), radii ≈ 45.3 / 23.5 (userSpaceOnUse, gradientTransform `matrix(-2.1496e-14 45.3 -23.503 -2.5588e-14 195 289)`), stop 0: `rgba(214,227,242,1)` (#D6E3F2), stop 1: `rgba(255,255,255,1)`, opacity 1 |
| Header / footer / progress-bar bg | `white` (`--semantic/background-default`) |
| Chrome pill | `#E8EAED`, radius 30px |
| Chrome hairline | shadow `0px 0.4px 0px 0px #CCC` under white bg |
| Chrome URL text | `#202124` |
| Chrome share icon | `#9AA0A6` |
| Chrome lock icon / status bar glyphs | `black` |
| Back arrow glyph | `#303030` |
| Progress track | `#EDEDED` (`--semantic/background-offpaper`) |
| Progress fill | `#006C7A` (`--semantic/support/support-aqua[2]`) |
| Chip background | `#D6E3F2` (`--semantic/support/support-indigo[6]`) |
| Chip label + chip icons | `#1C416C` (`--semantic/support/support-indigo[1]`) |
| Headline text | `#212121` (`--semantic/text-primary`) |
| "+ much more" text | `#616161` (`--semantic/text-secondary`) |
| Button background | `#006C7A` (`--semantic/interactive-primary`) |
| Button label + arrow | `#F8F8F8` (`--semantic/text-primary-contrast`) |
| Cover card | white fill, dark outline stroke (in `cover-outline.svg`), illustration panel is a yellow PNG |
| Shadow style in design | Elevation/1 = drop shadow (0, 2) blur 8 spread 0, color token Semantic/shadow |

## Border radii / borders / shadows

- Chip: radius `100px` (pill), no border, no shadow.
- Button: radius `16px` (`--default`), no border; content clipped (`overflow: clip`).
- Chrome pill: radius `30px`.
- Back-arrow `<Icon>` wrapper: radius 8px on a 24×24 box (transparent background).
- Chrome bar: hairline `0px 0.4px 0px 0px #ccc` (bottom edge).
- Elevation/1 drop shadow style is attached to the design (book cover): offset (0, 2), radius 8, spread 0.

## Typography

| Node | Family / style | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| Headline (display/h6) | General Sans Medium (`--font-family/fontfamily-display`); span "The Great Gatsby" in General Sans SemiBold Italic | Medium (500) | 24px (`--font-size/1,5rem`) | 1.3 | 0.25px | #212121 |
| Chip label (Chip/label-default) | Open Sans SemiBold (`--font-family/fontfamily-default`) | 500 (`--font-weight/fontweightmedium`) | 12px (`--font-size/0,75rem`) | normal (100%) | 0.25px | #1C416C |
| "+ much more" | Caveat Regular | 500 (`--font-weight/fontweightmedium`) | 30px (`--font-size/1,875rem`) | 1.2 | — | #616161, text-align right, w 293 |
| Button label (Button/label-default) | Open Sans SemiBold | 600 (`--font-weight/fontweightsemibold`) | 16px (`--font-size/1rem`) | normal (100%) | 0.25px | #F8F8F8 |
| Chrome URL | SF Pro Regular | 400 | 18px | normal | — | #202124 |

## Progress bar state

- Component `ProgressBar`, variant prop `step = "7"`.
- 390 × 36, white bg, padding-left 8, padding-right 16, gap 4, items centered.
- Left: 24×24 `<Icon>` with `arrow_back` glyph (visible glyph 14.4px wide, vertical 20%–80% band; vector inset 16.67%; fill #303030).
- Track: flex-1 (= 338px at 390 frame width), h 4, `#EDEDED`, squared corners.
- Fill: fixed `294px` wide × 4px, `#006C7A` → fill fraction **294 / 338 ≈ 87%**.

## Header / footer composition

- **Header:** iOS status bar (9:41 left, signal + wifi + battery right, all as SVG assets, black) → browser chrome bar (h 55) with grey pill (#E8EAED) containing lock icon + "supersummary.com" centered, share icon at right → progress bar (h 36). All on white.
- **Footer:** white bar, w 390, padding 16 all sides, containing the primary CTA `Next` (h 48, #006C7A, radius 16) with a trailing arrow_forward icon (24×24, glyph inset 18.36% vertical / 17.54% horizontal, #F8F8F8). Footer is in-flow (last child of the frame column).

## Downloaded assets (`assets/12-inside-study-guide/`)

| File | Used for |
|---|---|
| `icon-arrow-back.svg` | Progress bar back arrow glyph (#303030) |
| `statusbar-battery-outline.svg` | Status bar battery outline (22 × 11.333, right 17, top 17.33) |
| `statusbar-battery-cap.svg` | Battery terminal cap (1.328 × 4, right 14.67, top 21) |
| `statusbar-battery-fill.svg` | Battery fill (18 × 7.333, right 19, top 19.33) |
| `statusbar-wifi.svg` | Wifi icon (15.272 × 10.966, right 44.03, top 17.33) |
| `statusbar-mobile-signal.svg` | Cell signal (17 × 10.667, right 64.33, top 17.67) |
| `statusbar-time-941.svg` | "9:41" time glyphs (28.426 × 11.089, left 33.45, top 17.17) |
| `chrome-share.svg` | Chrome share icon (14.538 × 19.385 inside 21×21 box at right 24, top 16) |
| `chrome-lock.svg` | Lock icon in URL pill (7.672 × 11.508 inside 16×16 box) |
| `cover-outline-shadow.svg` | Book cover white card + soft shadow |
| `cover-outline.svg` | Book cover border stroke |
| `cover-logo-mask.svg` | Mask for the SuperSummary logo on the cover |
| `cover-logo.svg` | SuperSummary logo artwork (masked) |
| `cover-title-text.svg` | "The Great Gatsby" title lettering on cover (#212121) |
| `cover-author-text.svg` | "F. Scott Fitzgerald" author lettering on cover (#212121) |
| `cover-illustration.png` | Yellow vintage-car illustration panel (120 × 107.5) |
| `chip-icon-interests.svg` | Chip 1 "Symbols & Motifs" icon (16px, `interests`) |
| `chip-icon-question-answer.svg` | Chip 2 "Discussion Questions" icon (`question_answer`) |
| `chip-icon-menu-book.svg` | Chip 3 "Chapter Summaries" icon (`menu_book`) |
| `chip-icon-format-quote.svg` | Chip 4 "Important Quotes" icon (`format_quote`) |
| `chip-icon-face.svg` | Chip 5 "Character Lists & Analyses" icon (`face`) |
| `chip-icon-theater-comedy.svg` | Chip 6 "Themes" icon (`theater_comedy`) |
| `button-icon-arrow-forward.svg` | Next button end icon (#F8F8F8) |

All chip icons render inside a 16×16 box; per-icon vector insets: interests `10.42% 8.33%`, question_answer `8.33%`, menu_book `14.58% 4.17%`, format_quote `25% 12.5%`, face `8.33%`, theater_comedy `8.33% 4.17%`.

## Raw reference code (get_design_context, React + Tailwind)

```tsx
const imgVector = ".../758879c3-8694-430f-af85-756c6201985a.svg"; // arrow_back
const imgRectangle = ".../b434e5c3-dc70-4d54-bc3a-7a2f364df836.svg"; // battery outline
const imgCombinedShape = ".../7c00df32-b39c-447b-a1da-f770d0f72732.svg"; // battery cap
const imgRectangle1 = ".../3cb0cef0-ea07-4f4b-a843-f0bdcb126058.svg"; // battery fill
const imgWifi = ".../7ab77e33-493f-447e-8f2c-6f2feca77c05.svg";
const imgMobileSignal = ".../a86709f4-0fab-4b7c-a59f-9b7f0f8f16e5.svg";
const img941 = ".../0d982b6c-676f-4e34-8a71-4078f0dadb39.svg";
const imgShare = ".../daba5ec7-6d68-433e-94b7-c125c64a561e.svg";
const imgLock = ".../024aaac2-1bbc-4e47-be26-ec5b33166c57.svg";
const imgVector5 = ".../c49c9aa3-be18-49ab-bf64-6dac29387011.png"; // cover illustration
const imgVector1 = ".../044fd554-2180-4439-b56f-bb829f2bf392.svg"; // cover outline shadow
const imgVector2 = ".../6977a945-c125-4cd2-9606-6cd8f979e055.svg"; // cover outline
const imgGroup = ".../522e84c8-c08b-432a-8b94-7cf65249f92d.svg"; // logo mask
const imgGroup1 = ".../b1e14a19-c20a-455f-b247-40ea0cf3c6f3.svg"; // logo
const imgVector3 = ".../87d55a3a-a14b-4606-a984-26bb3a6ac479.svg"; // cover title text
const imgVector4 = ".../9ea3b6d9-93fd-4ba1-8738-11b7f132609b.svg"; // cover author text
const imgVector6 = ".../b48946e4-0307-48d2-94e5-46cb6e551efd.svg"; // interests icon
const imgVector7 = ".../a18745c7-cf21-46d6-9d01-3d10fee1d302.svg"; // question_answer icon
const imgVector8 = ".../e3e014fe-ca86-43f4-a8d6-bd5681b3c7d1.svg"; // menu_book icon
const imgVector9 = ".../0722c6ee-f71a-4bf8-a9c7-785409cc2526.svg"; // format_quote icon
const imgVector10 = ".../885cb70f-6a18-4cef-bbba-e70fd24ee9a9.svg"; // face icon
const imgVector11 = ".../f32cb1d6-b7c7-4948-9747-119fcd962fc5.svg"; // theater_comedy icon
const imgVector12 = ".../778b55fa-3f92-484f-99a2-bd65deb23985.svg"; // arrow_forward icon

type ProgressBarProps = {
  className?: string;
  step?: "7";
};

function ProgressBar({ className, step = "7" }: ProgressBarProps) {
  return (
    <div className={className || "bg-[var(--semantic\\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative w-[390px]"} data-node-id="7210:1758">
      <div className="relative rounded-[var(--8,8px)] shrink-0 size-[24px]" data-node-id="7210:1751" data-name="<Icon>">
        <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 overflow-clip top-[20%] w-[14.4px]" data-name="arrow_back">
          <div className="absolute inset-[16.67%]" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--semantic\/background-offpaper,#ededed)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="7210:1752">
        <div className="bg-[var(--semantic\/support\/support-aqua\[2\],#006c7a)] h-[4px] relative shrink-0 w-[294px]" data-node-id="7210:1753" />
      </div>
    </div>
  );
}

function SystemStatusBar({ className, color = "Black" }: { className?: string; color?: "Black" }) {
  return (
    <div className={className || "h-[38px] overflow-clip relative w-[375px]"} data-node-id="7087:241">
      <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Right">
        <div className="absolute contents right-[14.67px] top-[17.33px]" data-name="Battery">
          <div className="absolute h-[11.333px] right-[17px] top-[17.33px] w-[22px]" data-name="Rectangle">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle} />
          </div>
          <div className="absolute h-[4px] right-[14.67px] top-[21px] w-[1.328px]" data-name="Combined Shape">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCombinedShape} />
          </div>
          <div className="absolute h-[7.333px] right-[19px] top-[19.33px] w-[18px]" data-name="Rectangle">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle1} />
          </div>
        </div>
        <div className="absolute h-[10.966px] right-[44.03px] top-[17.33px] w-[15.272px]" data-name="Wifi">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
        </div>
        <div className="absolute h-[10.667px] right-[64.33px] top-[17.67px] w-[17px]" data-name="Mobile Signal">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMobileSignal} />
        </div>
      </div>
      <div className="absolute contents left-[33.45px] top-[17.17px]" data-name="Date">
        <div className="absolute h-[11.089px] left-[33.45px] top-[17.17px] w-[28.426px]" data-name="9:41">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={img941} />
        </div>
      </div>
    </div>
  );
}

function IOsHeader({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col items-start relative w-[390px]"} data-node-id="7210:1668" data-name="iOS Header">
      <SystemStatusBar className="h-[38px] overflow-clip relative shrink-0 w-[390px]" />
      <div className="h-[55px] relative shrink-0 w-[390px]" data-node-id="7210:1643" data-name="Chrome - Top">
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
    </div>
  );
}

export default function Step25() {
  return (
    <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-start relative size-full" data-node-id="7814:30044" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-2.1496e-14 45.3 -23.503 -2.5588e-14 195 289)'><stop stop-color='rgba(214,227,242,1)' offset='0'/><stop stop-color='rgba(255,255,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Step 25">
      <IOsHeader className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" />
      <ProgressBar className="bg-[var(--semantic\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative shrink-0 w-[390px]" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--24,24px)] items-center justify-center min-h-px relative w-full" data-node-id="7814:30047" data-name="Content">
        <div className="content-stretch flex flex-col gap-[var(--32,32px)] items-center relative shrink-0" data-node-id="7814:30048" data-name="Body">
          <div className="h-[195px] relative shrink-0 w-[140px]" data-node-id="7814:30049" data-name="Cover">
            <div className="absolute inset-[0.21%_0.3%]" data-name="Vector">
              <div className="absolute inset-[-3.09%_-5.75%_-5.15%_-5.75%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div className="absolute inset-[0.21%_0.3%]" data-name="Vector">
              <div className="absolute inset-[-0.26%_-0.36%]">
                <img alt="" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
            <div className="absolute contents inset-[5.13%_40.48%_88.03%_7.14%]" data-name="Clip path group">
              <div className="absolute inset-[5.13%_40.48%_88.03%_7.14%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.003px] mask-size-[73.333px_13.333px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
            <div className="absolute inset-[17.78%_16.05%_75.81%_7.27%]" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
            </div>
            <div className="absolute inset-[25.69%_27.62%_68.75%_7.9%]" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
            </div>
            <div className="absolute inset-[39.74%_7.14%_5.13%_7.14%]" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="107.5" src={imgVector5} width="120" />
            </div>
          </div>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[0] not-italic relative shrink-0 text-[0px] text-[color:var(--semantic\/text-primary,#212121)] text-center tracking-[0.25px] w-[342px]" data-node-id="7814:30076">
            <span className="leading-[1.3] text-[24px]">{`Inside of your Study Guide for `}</span>
            <span className="font-['General_Sans:Semibold_Italic'] leading-[1.3] text-[24px]">The Great Gatsby</span>
            <span className="leading-[1.3] text-[24px]">:</span>
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--12,12px)] items-center relative shrink-0 w-full" data-node-id="7814:30077" data-name="Claims">
          <div className="content-center flex flex-wrap gap-[var(--8,8px)] items-center justify-center px-[var(--16,16px)] relative shrink-0 w-full" data-node-id="7814:30078" data-name="Chips">
            <!-- 6 <Chip> nodes: 7814:30079..30085 — identical structure:
                 bg-[#d6e3f2] flex gap-[2px] items-center justify-center min-h-[32px]
                 px-[12px] py-[4px] rounded-[100px]
                 [Start Icon: 16×16 box with per-icon inset vector img]
                 [label p: Open_Sans:SemiBold, font-weight var 500, 12px, tracking 0.25px, #1c416c, whitespace-nowrap]
                 Labels + icons:
                 30079 "Symbols & Motifs"           icon interests        (inset 10.42% 8.33%)
                 30080 "Discussion Questions ·"     icon question_answer  (inset 8.33%)
                 30081 "Chapter Summaries"          icon menu_book        (inset 14.58% 4.17%)
                 30082 "Important Quotes"           icon format_quote     (inset 25% 12.5% i.e. top/bottom 1/4, left/right 12.5%)
                 30084 "Character Lists & Analyses" icon face             (inset 8.33%)
                 30085 "Themes"                     icon theater_comedy   (inset 8.33% 4.17%)
            -->
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Caveat:Regular'] font-[var(--font-weight\/fontweightmedium,500)] justify-center leading-[0] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1\,875rem,30px)] text-right w-[293px]" data-node-id="7814:30088">
            <p className="leading-[1.2]">+ much more</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[var(--12,12px)] items-start justify-center p-[var(--16,16px)] relative shrink-0 w-[390px]" data-node-id="7814:30089" data-name="Footer">
        <div className="bg-[var(--semantic\/interactive-primary,#006c7a)] content-stretch flex gap-[var(--4,4px)] h-[48px] items-center justify-center overflow-clip px-[var(--16,16px)] py-[var(--0,0px)] relative rounded-[var(--default,16px)] shrink-0 w-full" data-name="<Button>">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightsemibold,600)] leading-[normal] relative shrink-0 text-[color:var(--semantic\/text-primary-contrast,#f8f8f8)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Next
          </p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="End Icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Style=Round">
              <div className="absolute inset-[18.36%_17.54%]" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

Note: the chips block in the fenced code above is condensed with a comment for readability; every other node is verbatim from `get_design_context`. Asset URL hosts (`https://www.figma.com/api/mcp/asset/`) are truncated to `...` — the files are downloaded locally in `assets/12-inside-study-guide/` (remote URLs expire in ~7 days).
