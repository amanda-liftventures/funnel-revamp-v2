# 06-q-books-per-year — "How many books do you typically read in a year?"

Figma node: `7815:31422` ("Step 69") · File key: `2T3j73CQ4BKfuuXPnb0qFi` · Frame: 390 x 844
Screenshot: `design-specs/screens/06-q-books-per-year.png`

## Exact copy (verbatim)

- Status bar time: `9:41`
- Browser chrome URL: `supersummary.com`
- Question title: `How many books do you typically read in a year?`
- Options (in order): `0 - 5`, `6 - 12`, `13 - 24`, `25 - 49`, `50 - 99`, `100+`
- No footer / Next button on this screen (advance on selection).

## Layout structure

```
Step 69 (390x844, white bg, column flex, gap 0)
├── iOS Header (390w, white, column)
│   ├── System Status Bar (390x38): "9:41" left (x≈33.45, y≈17.17); Mobile Signal / Wifi / Battery right (right 14.67, top 17.33)
│   └── Chrome - Top (390x55): white bg + hairline shadow 0px 0.4px 0px #ccc; URL pill #e8eaed h36 radius 30 (left 11 / right 10 / bottom 10); centered lock(16) + "supersummary.com" gap 7px top 16; share icon 21x21 right 24 top 16
├── ProgressBar (390x36, white, row, gap 4px, pl 8px, pr 16px, items center)
│   ├── <Icon> back arrow 24x24 (radius 8px)
│   └── track: flex 1, #ededed, h 4px → fill #006c7a width 126px (≈37.3% of ≈338px track). Continuous, no segments. Variant step="3".
├── Content (flex 1, column, gap 0, full width)
│   ├── Title (390w, height 96px, column, gap 4px, padding 16px, justify center)
│   │   └── H "How many books do you typically read in a year?" — full width, left-aligned
│   └── Options list (full width, column, gap 16px, padding-x 16px, padding-y 24px)
│       └── 6 x <Radio Button> (style Icon, state Default, unchecked):
│           - full width, height 48px, row, gap 8px, padding-x 24px, padding-y 8px, items center
│           - bg: rgba(255,255,255,0.01) (Semantic/transparent)
│           - border: 1px solid #bfbfbf (Semantic/border-main)
│           - radius: 100px (token --rounded, fully pill)
│           - leading icon: "Book 2" 18x18 (glyph inset 8.33% v / 16.67% h) — same icon on every option
│           - label: option text, #616161
```

## Colors

| Use | Value | Token |
|---|---|---|
| Page background | `#ffffff` | Semantic/background-default |
| Chrome pill | `#e8eaed` / text `#202124` | — |
| Progress track | `#ededed` | Semantic/background-offpaper |
| Progress fill | `#006c7a` | Semantic/support/support-aqua[2] |
| Title text | `#212121` | Semantic/text-primary |
| Option bg | `rgba(255,255,255,0.01)` | Semantic/transparent |
| Option border | `#bfbfbf` | Semantic/border-main |
| Option label | `#616161` | Semantic/text-secondary |

## Radii / borders / shadows

- Option pills: radius 100px, border 1px solid #bfbfbf, no shadow
- Chrome pill: radius 30px; chrome hairline shadow 0px 0.4px 0px 0px #ccc
- No other shadows or gradients on this screen

## Typography

| Node | Family | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| Title (display/h6) | General Sans (fontFamily-display) | Medium (500) | 24px (Font Size/1.5rem) | 1.3 | 0.25px | #212121 |
| Option labels (default/body) | Open Sans (fontFamily-default) | Regular (400) | 16px (Font Size/1rem) | 1.5 | 0.25px | #616161 |
| Chrome URL | SF Pro | Regular (400) | 18px | normal | 0 | #202124 |

## Progress bar state

- Continuous fill bar (not segmented). Fill 126px of ≈338px track ≈ 37.3%. Component variant `step="3"`. Back arrow present.

## Header / footer composition

- Header: iOS status bar (9:41, black glyphs) + Chrome bar with lock + "supersummary.com" + share icon.
- Footer: none — no Next button on this screen; content region occupies remaining height.

## Option list details

- Style: radio-button pills (`<Radio Button>`, ds/radio-button, variant State=Default, Type=Default, Style=Icon) — exclusive single-select, icon-only style (leading icon + label, no visible radio circle or checkbox).
- All 6 options use the identical "Book 2" icon (18x18), all shown in unselected/Default state (transparent fill, #bfbfbf border, #616161 label).
- Selected state not shown on this frame. Per component docs: Checked fill uses Semantic/interactive-primary (#006c7a); unchecked fill Semantic/surface-default.
- A11y (from component docs): role=radio, aria-checked, inside role=radiogroup, arrow-key navigation.

## Downloaded assets (design-specs/assets/06-q-books-per-year/)

| File | Used for |
|---|---|
| arrow-back-vector.svg | Progress bar back-arrow glyph |
| statusbar-battery-outline.svg / statusbar-battery-cap.svg / statusbar-battery-fill.svg | iOS battery |
| statusbar-wifi.svg / statusbar-mobile-signal.svg | iOS wifi + signal |
| statusbar-time-941.svg | "9:41" glyph |
| chrome-share.svg / chrome-lock.svg | Browser chrome icons |
| icon-book2.svg | Leading "Book 2" icon in every option pill |

## Raw reference code (get_design_context output)

```tsx
const imgVector = "https://www.figma.com/api/mcp/asset/e2725f6a-e154-4b3d-bd59-bbd667ac877e.svg";
const imgRectangle = "https://www.figma.com/api/mcp/asset/612f90bf-c009-4d3f-aeba-185186040b09.svg";
const imgCombinedShape = "https://www.figma.com/api/mcp/asset/16e2baa3-d358-4337-8959-bb07c7cd987b.svg";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/63304e13-a3c9-4b8d-bd79-97733d6a0b90.svg";
const imgWifi = "https://www.figma.com/api/mcp/asset/7c3c1053-7477-428b-9084-630e13108a52.svg";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/3bbe9eeb-fe32-408c-ac44-6d429c08e575.svg";
const img941 = "https://www.figma.com/api/mcp/asset/876f7d07-dbd9-446d-98d1-7eb2e20dd861.svg";
const imgShare = "https://www.figma.com/api/mcp/asset/0a24deae-9261-46f8-93bd-2e6e6ce65b7f.svg";
const imgLock = "https://www.figma.com/api/mcp/asset/3ea30e24-6139-4f74-9985-0a9276063380.svg";
const imgVector1 = "https://www.figma.com/api/mcp/asset/654250ca-bc18-404f-93c7-ff86718c4b7e.svg";

type ProgressBarProps = {
  className?: string;
  step?: "3";
};

function ProgressBar({ className, step = "3" }: ProgressBarProps) {
  return (
    <div className={className || "bg-[var(--semantic\\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative w-[390px]"} data-node-id="7210:1722">
      <div className="relative rounded-[var(--8,8px)] shrink-0 size-[24px]" data-node-id="7210:1715" data-name="<Icon>">
        <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 overflow-clip top-[20%] w-[14.4px]" data-node-id="I7210:1715;2766:616" data-name="arrow_back">
          <div className="absolute inset-[16.67%]" data-node-id="I7210:1715;2766:616;2402:73543" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--semantic\/background-offpaper,#ededed)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="7210:1716">
        <div className="bg-[var(--semantic\/support\/support-aqua\[2\],#006c7a)] h-[4px] relative shrink-0 w-[126px]" data-node-id="7210:1717" />
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

export default function Step69() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[var(--0,0px)] items-start relative size-full" data-node-id="7815:31422" data-name="Step 69">
      <IOsHeader className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" />
      <ProgressBar className="bg-[var(--semantic\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative shrink-0 w-[390px]" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-h-px relative w-full" data-node-id="7815:31425" data-name="Content">
        <div className="content-stretch flex flex-col gap-[var(--4,4px)] h-[96px] items-start justify-center p-[var(--16,16px)] relative shrink-0 w-[390px]" data-node-id="7815:31426" data-name="Title">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[1.3] not-italic relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1\,5rem,24px)] tracking-[0.25px] w-full" data-node-id="7815:31427">
            How many books do you typically read in a year?
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--16,16px)] items-start px-[var(--16,16px)] py-[var(--24,24px)] relative shrink-0 w-full" data-node-id="7815:31498">
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7815:31499" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7815:31499;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7815:31499;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7815:31499;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7815:31499;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              0 - 5
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7815:31500" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7815:31500;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7815:31500;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7815:31500;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7815:31500;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              6 - 12
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7815:31501" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7815:31501;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7815:31501;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7815:31501;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7815:31501;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              13 - 24
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7815:31502" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7815:31502;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7815:31502;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7815:31502;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7815:31502;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              25 - 49
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7815:31503" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7815:31503;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7815:31503;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7815:31503;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7815:31503;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              50 - 99
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7815:31504" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7815:31504;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7815:31504;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7815:31504;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7815:31504;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              100+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```
