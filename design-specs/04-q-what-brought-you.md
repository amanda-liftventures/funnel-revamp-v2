# 04-q-what-brought-you — "What brought you here today?"

Figma node: `7814:31101` ("Step 43") · File: `2T3j73CQ4BKfuuXPnb0qFi` · Frame: 390 x 844
Screenshot: `design-specs/screens/04-q-what-brought-you.png`

## Copy (verbatim)

| Node | Text |
|---|---|
| Chrome URL pill | `supersummary.com` |
| Question | `What brought you here today?` |
| Option 1 | `I'm going deeper on a book` |
| Option 2 | `I'm preparing for a book club` |
| Option 3 | `I'm studying for a class` |
| Option 4 | `I'm teaching a class` |
| Option 5 | `I'm exploring what to read next` |
| Option 6 | `I'm helping someone with a book` |
| Option 7 | `Other` |

No Next button and no footer on this frame — options advance the flow.

## Background

Root frame: solid white (`bg-white`). No gradient.

## Layout structure

```
Root frame "Step 43" 390x844 — bg white, flex column, gap 0, items-start
├─ iOS Header (7210:1668 component) — bg white, flex column, w 390
│  ├─ SystemStatusBar — h 38, w 390 (9:41 / signal / wifi / battery, black)
│  └─ Chrome - Top (7210:1643) — h 55, w 390 (identical to other frames: white bg + 0.4px #CCC hairline, #E8EAED pill h 36 rounded 30 at left 11/right 10/bottom 10, share 21x21 at right 24/top 16, centered lock 16x16 + "supersummary.com" SF Pro 18 #202124, gap 7)
├─ ProgressBar (7210:1722 component, step="3") — bg white, h 36, w 390, flex row, gap 4, items-center, pl 8, pr 16
│  ├─ <Icon> arrow_back — 24x24 box, rounded 8, glyph 14.4 wide (inset 16.67%)
│  └─ Track — flex 1 (≈338px), bg #EDEDED
│     └─ Fill — h 4, w 126, bg #006C7A → fill fraction 126/338 ≈ 37%
└─ Content (7814:31104) — flex column, flex 1, gap 0, items-start, w-full
   ├─ Title (7814:31105) — flex column, gap 4 (--4), h 96, items-start, justify-center, padding 16 (--16), w 390
   │  └─ Question (7814:31106) — display/h6: General Sans Medium 24px, lh 1.3, tracking 0.25px, #212121 (no italic span, no cover image on this screen)
   └─ Body (7814:31108) — flex column, gap 16 (--16), items-start, px 16 (--16), py 24 (--24), w-full
      └─ 7 x <Radio Button> (7814:31109…31115) — each: h 48, w-full, flex row, gap 8 (--8), items-center, px 24 (--24), py 8 (--8), rounded 100 (--rounded, pill), border 1px solid #BFBFBF (--semantic/border-main), bg rgba(255,255,255,0.01) (--semantic/transparent)
         ├─ Icon 18x18 (Style=Outlined)
         └─ Label — default/body, #616161
```

### Option icons (each in an 18x18 box)

| Option | Icon (Figma name) | Glyph inset in box |
|---|---|---|
| I'm going deeper on a book | `auto_stories` | 9.38% v, 4.17% h |
| I'm preparing for a book club | `groups_2` | 25% top/bottom, 0 left/right |
| I'm studying for a class | `local_library` | 5.1% v, 12.5% h |
| I'm teaching a class | `school` | 12.5% v, 4.17% h |
| I'm exploring what to read next | `search` | 13.56% all |
| I'm helping someone with a book | `supervisor_account` | 20.83% v, 8.33% h |
| Other | `pending` | 8.33% all |

## Colors

| Token | Hex | Use |
|---|---|---|
| — | `#FFFFFF` | Page background, header, progress bar bg |
| Semantic/background-offpaper | `#EDEDED` | Progress bar track |
| Semantic/support/support-aqua[2] | `#006C7A` | Progress bar fill |
| Semantic/text-primary | `#212121` | Question text |
| Semantic/text-secondary | `#616161` | Option labels |
| Semantic/border-main | `#BFBFBF` | Radio button pill borders |
| Semantic/transparent | `rgba(255,255,255,0.01)` | Radio button fills |
| — | `#E8EAED` | Chrome URL pill |
| — | `#202124` | Chrome URL text |
| — | `#CCCCCC` | Chrome hairline |

## Radii / Borders / Shadows

- Radio button pills: radius 100px (--rounded), border 1px solid #BFBFBF, height 48
- Back-arrow icon container: radius 8; chrome pill radius 30
- No drop shadows on this screen (chrome hairline 0px 0.4px 0px 0px #CCC only)

## Typography

| Node | Style | Family | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|---|
| Question | display/h6 | General Sans Medium | 500 (Medium) | 24px (1.5rem) | 1.3 | 0.25px | #212121 |
| Option labels | default/body | Open Sans | 400 | 16px (1rem) | 1.5 | 0.25px | #616161 |
| Chrome URL | — | SF Pro Regular | 400 | 18px | normal | — | #202124 |

## Progress bar / header / footer state

- **Progress bar**: continuous bar (not segments), h 36 white row: back arrow (24x24) + track (flex-1, ≈338px, bg #EDEDED) with #006C7A fill h 4 x w 126 → ≈ 126/338 ≈ 37.3%. Component instance prop: `step="3"`.
- Header: white, in-flow: iOS status bar (h 38) + Chrome top (h 55: pill "supersummary.com", lock, share) + progress bar (h 36) with back arrow left.
- Footer: **none** — no Next button; all 7 radio options in Default (unselected) state.

## Component notes (from Figma component docs)

- `<Radio Button>` — ds/radio-button; variant State=Default, Type=Default, Style=Icon. Tokens: Semantic/interactive-primary → Checked fill; Semantic/surface-default → Unchecked fill. A11y: role=radio, aria-checked, inside role=radiogroup, arrow keys.
- `<Icon>` — back arrow: Size=Small, Color=Gray, Background=Transparent.
- Icons: `arrow_back`, `auto_stories`, `groups_2`, `local_library`, `school`, `search`, `supervisor_account`, `pending`.

## Downloaded assets (design-specs/assets/04-q-what-brought-you/)

| File | Used at |
|---|---|
| icon-arrow-back.svg | Progress bar back arrow |
| icon-auto-stories.svg | Option 1 icon (18x18 box) |
| icon-groups-2.svg | Option 2 icon |
| icon-local-library.svg | Option 3 icon |
| icon-school.svg | Option 4 icon |
| icon-search.svg | Option 5 icon |
| icon-supervisor-account.svg | Option 6 icon |
| icon-pending.svg | Option 7 icon |
| chrome-share.svg / chrome-lock.svg | Chrome top bar icons |
| statusbar-battery-outline.svg / statusbar-battery-cap.svg / statusbar-battery-fill.svg | Status bar battery |
| statusbar-wifi.svg / statusbar-mobile-signal.svg / statusbar-time-941.svg | Status bar wifi / signal / time |

## Raw reference code (get_design_context)

```tsx
const imgVector = "https://www.figma.com/api/mcp/asset/cff21e40-a491-408d-9c85-54e5e7629f9d.svg";
const imgRectangle = "https://www.figma.com/api/mcp/asset/a512f1bd-9597-4a6e-8902-aa716fa19a4b.svg";
const imgCombinedShape = "https://www.figma.com/api/mcp/asset/af7d7caf-e4f5-475d-a5a4-e8dd1b3c61be.svg";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/7125b805-8448-4566-aa59-d5b0cf594bad.svg";
const imgWifi = "https://www.figma.com/api/mcp/asset/8db4af12-bd27-4c30-bf50-8ebe3a83c2e4.svg";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/062da029-b123-442b-b871-91a116f2f687.svg";
const img941 = "https://www.figma.com/api/mcp/asset/447474ad-5fc1-4c54-8a71-dda387cf9acb.svg";
const imgShare = "https://www.figma.com/api/mcp/asset/13afd711-79b0-4aa9-b2fa-0dd2dde43549.svg";
const imgLock = "https://www.figma.com/api/mcp/asset/1c2ea9d4-9732-4232-b227-9755c5f5892d.svg";
const imgVector1 = "https://www.figma.com/api/mcp/asset/85ab3b4a-6f45-44b6-bda5-4a66934f1f06.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/be19a512-a3a3-4665-8bcc-5c7c1e432cac.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/005c2cdb-bbe4-4058-b240-e525b0c1ac38.svg";
const imgVector4 = "https://www.figma.com/api/mcp/asset/8b9c8c50-cc3b-455a-a498-22257a89afc9.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/ccd24e30-4821-4577-b444-e3e11408fb6a.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/0986f8b1-7527-40ed-9121-eb32a7a2c001.svg";
const imgVector7 = "https://www.figma.com/api/mcp/asset/c614de03-00d8-40ce-8d1a-f9021a9035d2.svg";

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

export default function Step43() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[var(--0,0px)] items-start relative size-full" data-node-id="7814:31101" data-name="Step 43">
      <IOsHeader className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" />
      <ProgressBar className="bg-[var(--semantic\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative shrink-0 w-[390px]" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-h-px relative w-full" data-node-id="7814:31104" data-name="Content">
        <div className="content-stretch flex flex-col gap-[var(--4,4px)] h-[96px] items-start justify-center p-[var(--16,16px)] relative shrink-0 w-[390px]" data-node-id="7814:31105" data-name="Title">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[1.3] not-italic relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1\,5rem,24px)] tracking-[0.25px] w-full" data-node-id="7814:31106">
            What brought you here today?
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--16,16px)] items-start px-[var(--16,16px)] py-[var(--24,24px)] relative shrink-0 w-full" data-node-id="7814:31108" data-name="Body">
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31109" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31109;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31109;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[9.38%_4.17%]" data-node-id="I7814:31109;1543:2385;2402:62197" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px]" data-node-id="I7814:31109;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`I'm going deeper on a book`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31110" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31110;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31110;1543:2385" data-name="Style=Outlined">
                <div className="absolute bottom-1/4 left-0 right-0 top-1/4" data-node-id="I7814:31110;1543:2385;2402:81148" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:31110;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`I'm preparing for a book club`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31111" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31111;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31111;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[5.1%_12.5%]" data-node-id="I7814:31111;1543:2385;2402:70556" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:31111;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`I'm studying for a class`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31112" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31112;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31112;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[12.5%_4.17%]" data-node-id="I7814:31112;1543:2385;2402:83286" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:31112;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`I'm teaching a class`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31113" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31113;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31113;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[13.56%]" data-node-id="I7814:31113;1543:2385;2402:36363" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:31113;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`I'm exploring what to read next`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31114" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31114;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31114;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[20.83%_8.33%]" data-node-id="I7814:31114;1543:2385;2402:37534" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px]" data-node-id="I7814:31114;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`I'm helping someone with a book`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31115" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31115;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31115;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[8.33%]" data-node-id="I7814:31115;1543:2385;2402:35014" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:31115;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Other
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```
