# 03-q-where-are-you — "Where are you in The Great Gatsby?"

Figma node: `7814:31117` ("Step 42") · File: `2T3j73CQ4BKfuuXPnb0qFi` · Frame: 390 x 844
Screenshot: `design-specs/screens/03-q-where-are-you.png`

## Copy (verbatim)

| Node | Text |
|---|---|
| Chrome URL pill | `supersummary.com` |
| Question | `Where are you in ` + *`The Great Gatsby`* (italic) + `?` |
| Option 1 | `Haven't started it yet` |
| Option 2 | `Reading it right now` |
| Option 3 | `Stopped partway through` |
| Option 4 | `Just finished it` |
| Option 5 | `Read it a while back` |

No Next button and no footer on this frame — options advance the flow. (The frame ends after the option list.)

## Background

Root frame: solid white (`bg-white`). No gradient.

## Layout structure

```
Root frame "Step 42" 390x844 — bg white, flex column, gap 0, items-start
├─ iOS Header (7210:1668 component) — bg white, flex column, w 390
│  ├─ SystemStatusBar — h 38, w 390 (9:41 / signal / wifi / battery, black)
│  └─ Chrome - Top (7210:1643) — h 55, w 390
│     ├─ bg white + hairline shadow 0px 0.4px 0px 0px #CCC
│     ├─ URL pill bg #E8EAED, h 36, left 11 / right 10 / bottom 10, rounded 30
│     ├─ share icon 21x21 at right 24 / top 16
│     └─ lock 16x16 + "supersummary.com" (SF Pro 18, #202124) centered, gap 7
├─ ProgressBar (7210:1713 component, step="2") — bg white, h 36, w 390, flex row, gap 4, items-center, pl 8, pr 16
│  ├─ <Icon> arrow_back — 24x24 box, rounded 8, glyph 14.4 wide (inset 16.67%)
│  └─ Track — flex 1 (≈338px), bg #EDEDED
│     └─ Fill — h 4, w 84, bg #006C7A → fill fraction 84/338 ≈ 25%
└─ Content (7814:31120) — flex column, flex 1, gap 0, items-start, w-full
   ├─ Title row (7814:31121) — flex row, gap 16 (--16), items-start, padding 16 (--16), w 390
   │  ├─ Cover (7814:31122) — 100 x 139, layered vector illustration of The Great Gatsby cover:
   │  │  ├─ Vector shadow layer (7814:31123) — inset 0.21% 0.3%, oversized bleed (Elevation/2-style soft shadow: DROP_SHADOW rgba(0,0,0,0.12) offset (0,6) radius 16)
   │  │  ├─ Vector cover outline/fill (7814:31124) — inset 0.21% 0.3%
   │  │  ├─ Clip path group: "THE GREAT GATSBY" title lettering — inset 5.13% 40.48% 88.03% 7.14%, mask 52.381 x 9.504
   │  │  ├─ Vector text line (7814:31146) — inset 17.78% 16.05% 75.81% 7.27%
   │  │  ├─ Vector text line (7814:31147) — inset 25.69% 27.62% 68.75% 7.9%
   │  │  └─ Cover art PNG (7814:31148) — inset 39.74% 7.14% 5.13% 7.14%, rendered 85.714 x 76.628
   │  └─ Text col (7814:31149) — flex column, gap 4, flex 1
   │     └─ Question (7814:31150) — display/h6: 24px, line-height 1.3, tracking 0.25px, #212121; "The Great Gatsby" span in General Sans Medium Italic
   └─ Body (7814:31152) — flex column, gap 16 (--16), items-start, px 16 (--16), py 24 (--24), w-full
      └─ 5 x <Radio Button> (7814:31153…31157) — each: h 48, w-full, flex row, gap 8 (--8), items-center, px 24 (--24), py 8 (--8), rounded 100 (--rounded, pill), border 1px solid #BFBFBF (--semantic/border-main), bg rgba(255,255,255,0.01) (--semantic/transparent)
         ├─ Icon 18x18 (Style=Outlined), glyph insets per option (below)
         └─ Label — default/body, #616161 (--semantic/text-secondary)
```

### Option icons (each in an 18x18 box)

| Option | Icon (Figma name) | Glyph inset in box |
|---|---|---|
| Haven't started it yet | `start` | 25% top/bottom, 8.33% left/right |
| Reading it right now | `local_library` | 5.1% v, 12.5% h |
| Stopped partway through | `stop_circle` | 8.33% all |
| Just finished it | `bookmark_added` | 11.73% v, 12.98% h |
| Read it a while back | `history` | 12.5% v, 6.25% h |

## Colors

| Token | Hex | Use |
|---|---|---|
| — | `#FFFFFF` | Page background, header, progress bar bg |
| Semantic/background-offpaper | `#EDEDED` | Progress bar track |
| Semantic/support/support-aqua[2] | `#006C7A` | Progress bar fill |
| Semantic/text-primary | `#212121` | Question text |
| Semantic/text-secondary | `#616161` | Option labels (and icon strokes render dark gray) |
| Semantic/border-main | `#BFBFBF` | Radio button pill borders |
| Semantic/transparent | `rgba(255,255,255,0.01)` | Radio button fills (effectively transparent) |
| Semantic/shadow | `rgba(0,0,0,0.12)` | Cover drop shadow (Elevation/2) |
| — | `#E8EAED` | Chrome URL pill |
| — | `#202124` | Chrome URL text |
| — | `#CCCCCC` | Chrome hairline |

## Radii / Borders / Shadows

- Radio button pills: radius 100px (--rounded), border 1px solid #BFBFBF, height 48
- Cover: Elevation/2 shadow style present in design — DROP_SHADOW, color Semantic/shadow rgba(0,0,0,0.12), offset (0, 6), radius 16, spread 0 (the reference code bakes it into the oversized shadow vector layer)
- Back-arrow icon container: radius 8
- Chrome pill: radius 30

## Typography

| Node | Style | Family | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|---|
| Question | display/h6 | General Sans Medium | 500 (Medium) | 24px (1.5rem) | 1.3 | 0.25px | #212121 |
| Question book-title span | — | General Sans Medium Italic | 500 italic | 24px | 1.3 | 0.25px | #212121 |
| Option labels | default/body | Open Sans | 400 | 16px (1rem) | 1.5 | 0.25px | #616161 |
| Chrome URL | — | SF Pro Regular | 400 | 18px | normal | — | #202124 |

## Progress bar / header / footer state

- **Progress bar**: continuous bar (not segments), h 36 white row: back arrow (24x24) + track (flex-1, ≈338px, bg #EDEDED) with #006C7A fill h 4 x w 84 → ≈ 84/338 ≈ 24.9% (~25%). Component instance prop: `step="2"`.
- Header: white, in-flow: iOS status bar (h 38) + Chrome top (h 55: #E8EAED pill, lock + "supersummary.com", share) + progress bar (h 36) with back arrow at left.
- Footer: **none** — no Next button on this screen; all 5 radio options are in Default (unselected) state: transparent fill, #BFBFBF border, gray text/icons.

## Component notes (from Figma component docs)

- `<Radio Button>` — ds/radio-button; variant used: State=Default, Type=Default, Style=Icon ("Resting. Unselected. Icon only — no visible label" per variant name; used here with icon + label). Tokens: Semantic/interactive-primary → Checked fill; Semantic/surface-default → Unchecked fill. A11y: role=radio, aria-checked, inside role=radiogroup, arrow keys to navigate.
- `<Icon>` — back arrow uses Size=Small, Color=Gray, Background=Transparent.
- Icons: `arrow_back`, `start`, `local_library`, `stop_circle`, `bookmark_added`, `history`.

## Downloaded assets (design-specs/assets/03-q-where-are-you/)

| File | Used at |
|---|---|
| icon-arrow-back.svg | Progress bar back arrow |
| icon-start.svg | Option 1 icon (18x18 box) |
| icon-local-library.svg | Option 2 icon |
| icon-stop-circle.svg | Option 3 icon |
| icon-bookmark-added.svg | Option 4 icon |
| icon-history.svg | Option 5 icon |
| gatsby-cover-shadow.svg | Cover layer 1 (soft shadow, oversized bleed) |
| gatsby-cover-outline.svg | Cover layer 2 (cover fill/outline) |
| gatsby-cover-title-mask.svg | Mask for "THE GREAT GATSBY" lettering (52.381 x 9.504) |
| gatsby-cover-title-fill.svg | Fill rendered through title mask |
| gatsby-cover-text-line2.svg | Cover text line, inset 17.78% 16.05% 75.81% 7.27% |
| gatsby-cover-text-line3.svg | Cover text line, inset 25.69% 27.62% 68.75% 7.9% |
| gatsby-cover-art-lower.png | Cover artwork lower block, 85.714 x 76.628, inset 39.74% 7.14% 5.13% 7.14% |
| chrome-share.svg / chrome-lock.svg | Chrome top bar icons |
| statusbar-battery-outline.svg / statusbar-battery-cap.svg / statusbar-battery-fill.svg | Status bar battery |
| statusbar-wifi.svg / statusbar-mobile-signal.svg / statusbar-time-941.svg | Status bar wifi / signal / time |

Note: the Gatsby cover is a multi-layer vector composition, not a single bitmap. For implementation, simplest faithful approach is to export the whole Cover node (7814:31122) as one image, or reassemble the layers per the insets above.

## Raw reference code (get_design_context)

```tsx
const imgVector = "https://www.figma.com/api/mcp/asset/01937359-dde2-4f3e-9b9c-78d6aaaa9fe8.svg";
const imgRectangle = "https://www.figma.com/api/mcp/asset/aef8e0ae-3f49-4b08-8f5c-ab5363583571.svg";
const imgCombinedShape = "https://www.figma.com/api/mcp/asset/7b098996-bdc2-418c-9429-67120044ee8b.svg";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/67571d08-15c3-4537-bc6f-d1d5958b5d9b.svg";
const imgWifi = "https://www.figma.com/api/mcp/asset/b5655a2b-548c-4429-b525-d2707d4eb04f.svg";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/b04a50b6-6f97-4d92-b19e-b710c667db06.svg";
const img941 = "https://www.figma.com/api/mcp/asset/2a18bdf4-1a3a-4948-9d9e-e6cd4c030ec5.svg";
const imgShare = "https://www.figma.com/api/mcp/asset/b3c6fab8-8663-4fa9-990e-36b1be5b9e10.svg";
const imgLock = "https://www.figma.com/api/mcp/asset/bce51664-c567-4bd8-a74d-7edf962d7c57.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/85ded344-c357-4356-9cd5-ccf1d0007930.png";
const imgVector1 = "https://www.figma.com/api/mcp/asset/22ccc9ee-f4c8-43f3-a4ce-bada86b6e973.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/eb495a0d-c910-4b51-ad91-873fba62cc9e.svg";
const imgGroup = "https://www.figma.com/api/mcp/asset/3d8e2a1a-77d7-434f-a3cd-53c219e96907.svg";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/29b30272-4d6b-4353-8b60-8fbe7a493dad.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/c3e345cd-81e0-4431-88d9-8e3c3aafd1dc.svg";
const imgVector4 = "https://www.figma.com/api/mcp/asset/2d60daf3-6301-4dde-a02c-c558cb4be212.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/a83a0afb-8ddf-4068-a78a-d1391228501e.svg";
const imgVector7 = "https://www.figma.com/api/mcp/asset/d781c61f-abd7-4a7d-a438-ca3475b673d9.svg";
const imgVector8 = "https://www.figma.com/api/mcp/asset/adec3c3c-d369-4254-afbb-639208964db3.svg";
const imgVector9 = "https://www.figma.com/api/mcp/asset/3eb8ac0f-b1e5-49d6-abe9-dc2d57d710a5.svg";
const imgVector10 = "https://www.figma.com/api/mcp/asset/b85db6fa-6c5f-46ee-93a8-3a372bf07078.svg";

type ProgressBarProps = {
  className?: string;
  step?: "2";
};

function ProgressBar({ className, step = "2" }: ProgressBarProps) {
  return (
    <div className={className || "bg-[var(--semantic\\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative w-[390px]"} data-node-id="7210:1713">
      <div className="relative rounded-[var(--8,8px)] shrink-0 size-[24px]" data-node-id="7210:1707" data-name="<Icon>">
        <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 overflow-clip top-[20%] w-[14.4px]" data-node-id="I7210:1707;2766:616" data-name="arrow_back">
          <div className="absolute inset-[16.67%]" data-node-id="I7210:1707;2766:616;2402:73543" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--semantic\/background-offpaper,#ededed)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="7210:1708">
        <div className="bg-[var(--semantic\/support\/support-aqua\[2\],#006c7a)] h-[4px] relative shrink-0 w-[84px]" data-node-id="7210:1709" />
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

export default function Step42() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[var(--0,0px)] items-start relative size-full" data-node-id="7814:31117" data-name="Step 42">
      <IOsHeader className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" />
      <ProgressBar className="bg-[var(--semantic\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative shrink-0 w-[390px]" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-h-px relative w-full" data-node-id="7814:31120" data-name="Content">
        <div className="content-stretch flex gap-[var(--16,16px)] items-start p-[var(--16,16px)] relative shrink-0 w-[390px]" data-node-id="7814:31121" data-name="Title">
          <div className="h-[139px] relative shrink-0 w-[100px]" data-node-id="7814:31122" data-name="Cover">
            <div className="absolute inset-[0.21%_0.3%]" data-node-id="7814:31123" data-name="Vector">
              <div className="absolute inset-[-7.23%_-16.1%_-15.9%_-16.1%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div className="absolute inset-[0.21%_0.3%]" data-node-id="7814:31124" data-name="Vector">
              <div className="absolute inset-[-0.36%_-0.5%]">
                <img alt="" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
            <div className="absolute contents inset-[5.13%_40.48%_88.03%_7.14%]" data-node-id="7814:31125" data-name="Clip path group">
              <div className="absolute inset-[5.13%_40.48%_88.03%_7.14%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.002px] mask-size-[52.381px_9.504px]" data-node-id="7814:31128" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
            <div className="absolute inset-[17.78%_16.05%_75.81%_7.27%]" data-node-id="7814:31146" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
            </div>
            <div className="absolute inset-[25.69%_27.62%_68.75%_7.9%]" data-node-id="7814:31147" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
            </div>
            <div className="absolute inset-[39.74%_7.14%_5.13%_7.14%]" data-node-id="7814:31148" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" height="76.628" src={imgVector5} width="85.714" />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--4,4px)] items-start min-w-px p-[var(--0,0px)] relative" data-node-id="7814:31149" data-name="Text">
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[0] not-italic relative shrink-0 text-[0px] text-[color:var(--semantic\/text-primary,#212121)] tracking-[0.25px] w-full" data-node-id="7814:31150">
              <span className="leading-[1.3] text-[24px]">{`Where are you in `}</span>
              <span className="font-['General_Sans:Medium_Italic'] leading-[1.3] text-[24px]">The Great Gatsby</span>
              <span className="leading-[1.3] text-[24px]">?</span>
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--16,16px)] items-start px-[var(--16,16px)] py-[var(--24,24px)] relative shrink-0 w-full" data-node-id="7814:31152" data-name="Body">
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31153" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31153;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31153;1543:2385" data-name="Style=Outlined">
                <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-node-id="I7814:31153;1543:2385;2402:59448" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px]" data-node-id="I7814:31153;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`Haven't started it yet`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31154" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31154;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31154;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[5.1%_12.5%]" data-node-id="I7814:31154;1543:2385;2402:70556" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:31154;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Reading it right now
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31155" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31155;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31155;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[8.33%]" data-node-id="I7814:31155;1543:2385;2402:42894" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px]" data-node-id="I7814:31155;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Stopped partway through
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31156" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31156;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31156;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[11.73%_12.98%]" data-node-id="I7814:31156;1543:2385;2402:30032" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:31156;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Just finished it
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31157" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31157;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31157;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[12.5%_6.25%]" data-node-id="I7814:31157;1543:2385;2402:32725" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector10} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:31157;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Read it a while back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```
