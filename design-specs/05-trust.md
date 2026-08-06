# 05-trust — "Trusted by readers like you" (Trustpilot testimonials)

Figma node: `7814:30090` ("Step 68") · File key: `2T3j73CQ4BKfuuXPnb0qFi` · Frame: 390 x 844
Screenshot: `design-specs/screens/05-trust.png`

## Exact copy (verbatim)

- Status bar time: `9:41`
- Browser chrome URL: `supersummary.com`
- Headline: `Trusted by readers like you`
- Trustpilot block (rendered as SVG assets, visible text): `Excellent`, `995 reviews on`, `Trustpilot`
- Testimonial card content is baked into the screenshot PNG assets (card 1 visible text: name "Doris Caputi", subtitle "80 yr old lifelong reader", 5 orange stars, review body — all part of `testimonial-1-screenshot-14-20-57.png`; not separate text nodes)
- Footer button label: `Next`

## Layout structure

```
Step 68 (390x844, column flex, gap 0, radial-gradient background)
├── iOS Header (390w, white bg, column)
│   ├── System Status Bar (390x38): time "9:41" left (x≈33.45, y≈17.17), right cluster Mobile Signal / Wifi / Battery (right 14.67px, top 17.33px)
│   └── Chrome - Top (390x55)
│       ├── bg: white, shadow 0px 0.4px 0px 0px #ccc (hairline bottom)
│       ├── chrome-bar-input pill: #e8eaed, height 36, left 11 / right 10, bottom 10, radius 30px
│       ├── centered [lock icon 16x16 + "supersummary.com"] gap 7px, top 16
│       └── share icon 21x21, right 24, top 16
├── ProgressBar (390x36, white bg, row, gap 4px, padding-left 8px, padding-right 16px, items center)
│   ├── <Icon> back arrow: 24x24 wrapper, radius 8px, arrow_back glyph (14.4px wide, inset 20% v)
│   └── track: flex 1, bg #ededed (Semantic/background-offpaper), height 4px
│       └── fill: #006c7a (Semantic/support/support-aqua[2]), height 4px, width 252px (≈74.5% of 338px track). Continuous bar, no segments. Component variant step="6".
├── Content (flex 1, column, gap 24px, padding-y 24px, items center, justify center, full width)
│   ├── Title block (390w, column, gap 12px, padding 24px h / 12px v)
│   │   ├── Text Highlight Medium (decorative peach brush stroke): 148x35, absolutely positioned left 120px top 63px (relative to title block), rotated 180°, 5 SVG vectors — sits behind the words "like you"
│   │   └── H1: "Trusted by readers like you" — centered, full width
│   ├── Senja testimonial carousel row (flex 1, row, gap 16px, items start, padding: top 24px, bottom 40px, left/right 24px, full width — overflows right edge = horizontal scroll/carousel)
│   │   ├── Card 1: 300x308, border 1px solid #d9d9d9, radius 16px, image fill (testimonial-1-screenshot-14-20-57.png, drawn at 102.24%h/102.82%w, left -1.09%)
│   │   ├── Card 2: 300x164.957, border 1px solid #d9d9d9, radius 16px, image object-cover (testimonial-2-screenshot-14-20-31.png)
│   │   ├── Card 3: 300x331, border 1px solid #d9d9d9, radius 16px, image fill (testimonial-3-screenshot-14-21-28.png, 102.29%h/103.1%w, left -1.24%, top -0.86%)
│   │   └── Card 4: 300x183, border 1px solid #d9d9d9, radius 16px, image object-cover (testimonial-4-screenshot-14-22-11.png)
│   └── Social proof (column, items center, padding-x 16px, full width) — Trustpilot lockup, two stacked rows in an inline-grid:
│       ├── Row 1 (top): "Excellent" wordmark SVG 73.784x12.337 (offset top 4px) + 5 stars starting at ml 92.01px — each star 19.716x19.716, spaced 21.82px apart (4 full stars `trustpilot-star-full.svg`, 5th partial `trustpilot-star-partial.svg` ≈ 4.5 rating)
│       └── Row 2 (below, ml 1.73px, mt 23.96px): "995 reviews on" SVG 107.327x14.916 (offset top 4.56px) + Trustpilot logo 83.589x20.619 at ml 110.9px (3 vectors: green star + wordmark)
└── Footer (390w, white bg, column, gap 12px, padding 16px, justify center)
    └── <Button> Primary Default: full width, height 48px, bg #006c7a (Semantic/interactive-primary), radius 16px, row gap 4px, padding-x 16px, centered, overflow clip
        ├── Label "Next"
        └── End Icon: 24x24 arrow_forward (glyph inset 18.36% v / 17.54% h)
```

## Colors

| Use | Value | Token |
|---|---|---|
| Page background | radial-gradient, center (195, 303), from `rgba(252,234,221,1)` (peach) → `rgba(255,255,255,1)` white; gradientTransform matrix(-2.7521e-14 36.15 -23.772 -3.7138e-14 195 303) | — |
| Header / footer / progress bar bg | `#ffffff` | Semantic/background-default |
| Chrome hairline shadow | `0px 0.4px 0px 0px #ccc` | — |
| Chrome URL pill | `#e8eaed` | — |
| Chrome URL text | `#202124` | — |
| Progress track | `#ededed` | Semantic/background-offpaper |
| Progress fill | `#006c7a` | Semantic/support/support-aqua[2] |
| Headline text | `#212121` | Semantic/text-primary |
| Card border | `#d9d9d9` | Semantic/border-light |
| Button bg | `#006c7a` | Semantic/interactive-primary |
| Button label | `#f8f8f8` | Semantic/text-primary-contrast |

## Radii / borders / shadows

- Testimonial cards: radius 16px, border 1px solid #d9d9d9, no shadow
- Next button: radius 16px (token `--default`), no border, no shadow
- Chrome pill: radius 30px
- Back-arrow icon wrapper: radius 8px
- Only shadow on screen: chrome bottom hairline `0px 0.4px 0px 0px #ccc`

## Typography

| Node | Family | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| Headline "Trusted by readers like you" | General Sans (Font Family/fontFamily-display), style display/h4 | Medium (500) | 36px (Font Size/2.25rem) | 1.2 | 0 | #212121 |
| Button "Next" | Open Sans (Font Family/fontFamily-default), style Button/label-default | SemiBold (600) | 16px (Font Size/1rem) | normal (100%) | 0.25px | #f8f8f8 |
| Chrome URL "supersummary.com" | SF Pro | Regular (400) | 18px | normal | 0 | #202124 |

## Progress bar state

- Continuous fill bar (NOT segmented). Track: flex-1 (≈338px inside 390 − 8pl − 24 icon − 4 gap − 16pr), fill width 252px ≈ 74.5%. Component instance `ProgressBar` with variant `step="6"`. Back arrow at left; no step text.

## Header / footer composition

- Header: iOS status bar (9:41, signal/wifi/battery, black glyphs) + Chrome browser bar with lock + "supersummary.com" pill and share icon. All glyphs are SVG assets.
- Footer: white, 16px padding, single full-width Primary teal `Next` button (48px tall) with trailing arrow_forward icon. State: Default (enabled).

## Option list

- N/A — this screen has no options; it is an interstitial trust/social-proof screen with a horizontally overflowing testimonial card row.

## Downloaded assets (design-specs/assets/05-trust/)

| File | Used for |
|---|---|
| arrow-back-vector.svg | Progress bar back-arrow glyph |
| statusbar-battery-outline.svg / statusbar-battery-cap.svg / statusbar-battery-fill.svg | iOS status bar battery |
| statusbar-wifi.svg / statusbar-mobile-signal.svg | iOS status bar wifi + signal |
| statusbar-time-941.svg | "9:41" time glyph |
| chrome-share.svg / chrome-lock.svg | Browser chrome icons |
| highlight-vector-1..5.svg | Peach brush "Text Highlight Medium" behind "like you" (rotated 180°) |
| testimonial-1-screenshot-14-20-57.png (358x365) | Card 1 (Doris Caputi review) |
| testimonial-2-screenshot-14-20-31.png (351x193) | Card 2 |
| testimonial-3-screenshot-14-21-28.png (352x386) | Card 3 |
| testimonial-4-screenshot-14-22-11.png (349x213) | Card 4 |
| trustpilot-excellent.svg | "Excellent" wordmark |
| trustpilot-995-reviews-on.svg | "995 reviews on" text |
| trustpilot-logo-vector-1..3.svg | Trustpilot star + wordmark logo |
| trustpilot-star-full.svg | Rating stars 1–4 |
| trustpilot-star-partial.svg | Rating star 5 (partial fill) |
| next-button-arrow-forward.svg | Next button end icon |

## Raw reference code (get_design_context output)

```tsx
const imgVector = "https://www.figma.com/api/mcp/asset/94fa5cd8-026b-4720-b714-2f22e76fd2f8.svg";
const imgRectangle = "https://www.figma.com/api/mcp/asset/bef4e521-ddb2-47b7-8da1-596233e3a02c.svg";
const imgCombinedShape = "https://www.figma.com/api/mcp/asset/b9adc05f-f90c-4504-8e9e-24b11fd63412.svg";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/b5c73f34-f521-4673-82a2-808b999875cb.svg";
const imgWifi = "https://www.figma.com/api/mcp/asset/4d682c36-e8da-4799-9557-b4b62ed5fe65.svg";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/0a3abd70-5709-4620-93ae-7b9ce817bf30.svg";
const img941 = "https://www.figma.com/api/mcp/asset/df7a395b-de7e-4671-897b-6bc843d0fa5a.svg";
const imgShare = "https://www.figma.com/api/mcp/asset/00ab9e30-5bd6-4ba9-98dd-897935649b77.svg";
const imgLock = "https://www.figma.com/api/mcp/asset/53a6d533-c912-443f-9906-2b3c6c4f79af.svg";
const imgScreenshot20250627At1420571 = "https://www.figma.com/api/mcp/asset/f14bf4e8-20f4-4676-9b75-ffe51961f74f.png";
const imgScreenshot20250627At1420311 = "https://www.figma.com/api/mcp/asset/759d2a50-4e4c-4c1b-a4e2-1bd545c3939e.png";
const imgScreenshot20250627At1421281 = "https://www.figma.com/api/mcp/asset/693c9c92-9625-43e3-84e6-9019c9e1466a.png";
const imgScreenshot20250627At1422111 = "https://www.figma.com/api/mcp/asset/dd920c52-a613-4197-a181-156bc551248b.png";
const imgVector1 = "https://www.figma.com/api/mcp/asset/5b49de9e-7cac-4e63-bf7e-9e52f739c9a0.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/ec7de51d-dc2a-43cc-91b9-42ba98bc8731.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/cf7c71ab-70a3-46c5-af71-6ce9e005712c.svg";
const imgVector4 = "https://www.figma.com/api/mcp/asset/ad035fd8-d163-4dc2-9fb7-e33651a53ca8.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/879851a8-6614-4fd9-81ee-8a097e787973.svg";
const img995ReviewsOn = "https://www.figma.com/api/mcp/asset/0227e0fa-8901-4d69-8fa4-9dfa0739b362.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/75888767-1ae1-4862-9c2e-5953331b091e.svg";
const imgVector7 = "https://www.figma.com/api/mcp/asset/54c67a93-a1c9-4c16-b5cc-7173dc788dd9.svg";
const imgVector8 = "https://www.figma.com/api/mcp/asset/4b76ea3c-ed78-476b-864f-2724ff7794db.svg";
const imgExcellent = "https://www.figma.com/api/mcp/asset/af81bc2c-6adb-4008-ac5b-e8f53d3e0e0a.svg";
const imgStar = "https://www.figma.com/api/mcp/asset/101715ac-8798-4eec-90d7-c50c9d9eb2d9.svg";
const imgStar1 = "https://www.figma.com/api/mcp/asset/effe9f54-1721-4497-b18b-b320e45b3ab0.svg";
const imgVector9 = "https://www.figma.com/api/mcp/asset/acfd9ca9-3e5f-4b07-bf54-f8be07badcfb.svg";

type ProgressBarProps = {
  className?: string;
  step?: "6";
};

function ProgressBar({ className, step = "6" }: ProgressBarProps) {
  return (
    <div className={className || "bg-[var(--semantic\\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative w-[390px]"} data-node-id="7210:1749">
      <div className="relative rounded-[var(--8,8px)] shrink-0 size-[24px]" data-node-id="7210:1742" data-name="<Icon>">
        <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 overflow-clip top-[20%] w-[14.4px]" data-node-id="I7210:1742;2766:616" data-name="arrow_back">
          <div className="absolute inset-[16.67%]" data-node-id="I7210:1742;2766:616;2402:73543" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--semantic\/background-offpaper,#ededed)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="7210:1743">
        <div className="bg-[var(--semantic\/support\/support-aqua\[2\],#006c7a)] h-[4px] relative shrink-0 w-[252px]" data-node-id="7210:1744" />
      </div>
    </div>
  );
}

type SystemStatusBarProps = {
  className?: string;
  color?: "Black";
};

function SystemStatusBar({ className, color = "Black" }: SystemStatusBarProps) {
  return (
    <div className={className || "h-[38px] overflow-clip relative w-[375px]"} data-node-id="7087:241">
      <div className="absolute contents right-[14.67px] top-[17.33px]" data-node-id="7087:242" data-name="Right">
        <div className="absolute contents right-[14.67px] top-[17.33px]" data-node-id="7087:243" data-name="Battery">
          <div className="absolute h-[11.333px] right-[17px] top-[17.33px] w-[22px]" data-node-id="7087:244" data-name="Rectangle">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle} />
          </div>
          <div className="absolute h-[4px] right-[14.67px] top-[21px] w-[1.328px]" data-node-id="7087:245" data-name="Combined Shape">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCombinedShape} />
          </div>
          <div className="absolute h-[7.333px] right-[19px] top-[19.33px] w-[18px]" data-node-id="7087:246" data-name="Rectangle">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle1} />
          </div>
        </div>
        <div className="absolute h-[10.966px] right-[44.03px] top-[17.33px] w-[15.272px]" data-node-id="7087:247" data-name="Wifi">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
        </div>
        <div className="absolute h-[10.667px] right-[64.33px] top-[17.67px] w-[17px]" data-node-id="7087:251" data-name="Mobile Signal">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMobileSignal} />
        </div>
      </div>
      <div className="absolute contents left-[33.45px] top-[17.17px]" data-node-id="7087:256" data-name="Date">
        <div className="absolute h-[11.089px] left-[33.45px] top-[17.17px] w-[28.426px]" data-node-id="7087:257" data-name="9:41">
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
        <div className="absolute bg-white inset-[0_0_1.82%_0] shadow-[0px_0.4px_0px_0px_#ccc]" data-node-id="I7210:1643;726:1322" data-name="bg" />
        <div className="absolute bg-[#e8eaed] bottom-[10px] h-[36px] left-[11px] right-[10px] rounded-[30px]" data-node-id="I7210:1643;726:1323" data-name="chrome-bar-input" />
        <div className="absolute overflow-clip right-[24px] size-[21px] top-[16px]" data-node-id="I7210:1643;732:2974" data-name=".icons/chrome/share">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.385px] left-1/2 top-1/2 w-[14.538px]" data-node-id="I7210:1643;732:2974;732:2858" data-name="Share">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare} />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex gap-[7px] items-center justify-center left-[calc(50%+0.41px)] top-[16px]" data-node-id="I7210:1643;726:1325">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I7210:1643;732:2892" data-name=".icons/chrome/lock">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.508px] left-1/2 top-[calc(50%+0.64px)] w-[7.672px]" data-node-id="I7210:1643;732:2892;732:2890" data-name="Lock">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['SF_Pro:Regular'] font-normal leading-[normal] relative shrink-0 text-[#202124] text-[18px] whitespace-nowrap" data-node-id="I7210:1643;726:1327" style={{ fontVariationSettings: '"wdth" 100' }}>
            supersummary.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Step68() {
  return (
    <div className="content-stretch flex flex-col gap-[var(--0,0px)] items-start relative size-full" data-node-id="7814:30090" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-2.7521e-14 36.15 -23.772 -3.7138e-14 195 303)'><stop stop-color='rgba(252,234,221,1)' offset='0'/><stop stop-color='rgba(255,255,255,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Step 68">
      <IOsHeader className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" />
      <ProgressBar className="bg-[var(--semantic\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative shrink-0 w-[390px]" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--24,24px)] items-center justify-center min-h-px py-[24px] relative w-full" data-node-id="7814:30093" data-name="Content">
        <div className="content-stretch flex flex-col gap-[var(--12,12px)] items-start px-[var(--24,24px)] py-[var(--12,12px)] relative shrink-0 w-[390px]" data-node-id="7814:30094">
          <div className="absolute flex h-[35px] items-center justify-center left-[120px] top-[63px] w-[148px]" data-node-id="7814:30095">
            <div className="flex-none rotate-180">
              <div className="h-[35px] relative w-[148px]" data-name="Supporting element/Text Highlight Medium">
                <div className="absolute inset-[0_7.5%_64.68%_2.52%]" data-node-id="I7814:30095;1587:1229" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[21.68%_0_50.05%_4.39%]" data-node-id="I7814:30095;1587:1230" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[41.18%_1.53%_28.12%_3.16%]" data-node-id="I7814:30095;1587:1231" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
                <div className="absolute inset-[57.47%_6.24%_14.9%_0.1%]" data-node-id="I7814:30095;1587:1232" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                </div>
                <div className="absolute inset-[73.91%_7.11%_0_0]" data-node-id="I7814:30095;1587:1233" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[1.2] min-w-full not-italic relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/2\,25rem,36px)] text-center w-[min-content]" data-node-id="7814:30096">
            Trusted by readers like you
          </p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px pb-[var(--40,40px)] pt-[var(--24,24px)] px-[var(--24,24px)] relative w-full" data-node-id="7815:31416" data-name="Senja">
          <div className="border border-[var(--semantic\/border-light,#d9d9d9)] border-solid h-[308px] relative rounded-[16px] shrink-0 w-[300px]" data-node-id="7815:31417" data-name="Screenshot 2025-06-27 at 14.20.57 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img alt="" className="absolute h-[102.24%] left-[-1.09%] max-w-none top-0 w-[102.82%]" src={imgScreenshot20250627At1420571} />
            </div>
          </div>
          <div className="border border-[var(--semantic\/border-light,#d9d9d9)] border-solid h-[164.957px] relative rounded-[16px] shrink-0 w-[300px]" data-node-id="7815:31418" data-name="Screenshot 2025-06-27 at 14.20.31 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgScreenshot20250627At1420311} />
          </div>
          <div className="border border-[var(--semantic\/border-light,#d9d9d9)] border-solid h-[331px] relative rounded-[16px] shrink-0 w-[300px]" data-node-id="7815:31419" data-name="Screenshot 2025-06-27 at 14.21.28 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img alt="" className="absolute h-[102.29%] left-[-1.24%] max-w-none top-[-0.86%] w-[103.1%]" src={imgScreenshot20250627At1421281} />
            </div>
          </div>
          <div className="border border-[var(--semantic\/border-light,#d9d9d9)] border-solid h-[183px] relative rounded-[16px] shrink-0 w-[300px]" data-node-id="7815:31420" data-name="Screenshot 2025-06-27 at 14.22.11 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgScreenshot20250627At1422111} />
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center px-[16px] relative shrink-0 w-full" data-node-id="7814:30103" data-name="Social proof">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="7814:30104" data-name="Trustpilot">
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1.73px] mt-[23.96px] place-items-start relative row-1" data-node-id="7814:30105">
              <div className="col-1 h-[14.916px] ml-0 mt-[4.56px] relative row-1 w-[107.327px]" data-node-id="7814:30106" data-name="995 reviews on">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={img995ReviewsOn} />
              </div>
              <div className="col-1 h-[20.619px] ml-[110.9px] mt-0 overflow-clip relative row-1 w-[83.589px]" data-node-id="7814:30120" data-name="Trustpilot-logo">
                <div className="absolute inset-[35.44%_-0.02%_0_26.27%]" data-node-id="I7814:30120;104:1721" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                </div>
                <div className="absolute inset-[0_76.05%_7.26%_0]" data-node-id="I7814:30120;104:1722" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                </div>
                <div className="absolute inset-[57.33%_82.81%_29.15%_11.98%]" data-node-id="I7814:30120;104:1723" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} />
                </div>
              </div>
            </div>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-node-id="7814:30121">
              <div className="col-1 h-[12.337px] ml-0 mt-[4px] relative row-1 w-[73.784px]" data-node-id="7814:30122" data-name="Excellent">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExcellent} />
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[92.01px] mt-0 place-items-start relative row-1" data-node-id="7814:30132">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[19.716px]" data-node-id="7814:30133" data-name="Star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <div className="col-1 ml-[21.82px] mt-0 relative row-1 size-[19.716px]" data-node-id="7814:30135" data-name="Star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <div className="col-1 ml-[43.64px] mt-0 relative row-1 size-[19.716px]" data-node-id="7814:30137" data-name="Star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <div className="col-1 ml-[65.46px] mt-0 relative row-1 size-[19.716px]" data-node-id="7814:30139" data-name="Star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <div className="col-1 ml-[87.28px] mt-0 relative row-1 size-[19.716px]" data-node-id="7814:30141" data-name="Star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[var(--12,12px)] items-start justify-center p-[var(--16,16px)] relative shrink-0 w-[390px]" data-node-id="7814:30161" data-name="Footer">
        <div className="bg-[var(--semantic\/interactive-primary,#006c7a)] content-stretch flex gap-[var(--4,4px)] h-[48px] items-center justify-center overflow-clip px-[var(--16,16px)] py-[var(--0,0px)] relative rounded-[var(--default,16px)] shrink-0 w-full" data-node-id="I7814:30161;7210:1778" data-name="<Button>">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightsemibold,600)] leading-[normal] relative shrink-0 text-[color:var(--semantic\/text-primary-contrast,#f8f8f8)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30161;7210:1778;141:2420" style={{ fontVariationSettings: '"wdth" 100' }}>
            Next
          </p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I7814:30161;7210:1778;141:2519" data-name="End Icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I7814:30161;7210:1778;141:2421" data-name="Style=Round">
              <div className="absolute inset-[18.36%_17.54%]" data-node-id="I7814:30161;7210:1778;141:2421;2402:73679" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
