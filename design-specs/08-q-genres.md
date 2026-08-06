# 08-q-genres — "Pick your top genres."

Figma node: `7814:30016` ("iPhone 13 & 14 - 240") · File key: `2T3j73CQ4BKfuuXPnb0qFi` · Frame: 390 x 844
Screenshot: `design-specs/screens/08-q-genres.png`

## Exact copy (verbatim)

- Status bar time: `9:41`
- Browser chrome URL: `supersummary.com`
- Question title: `Pick your top genres.`
- Subtitle: `Select up to 3 options.`
- Options (in order):
  1. `Literary Fiction`
  2. `Contemporary Fiction`
  3. `Historical Fiction`
  4. `Mystery & Thriller`
  5. `Science Fiction & Fantasy`
  6. `Romance`
  7. `Classic Literature`
  8. `Memoir & Biography`
  9. `Self-Help & Personal Growth`
  10. `Business & Finance`
  11. `I read a mix of everything`
- Footer button label: `Next`

## Layout structure

```
iPhone 13 & 14 - 240 (390x844, white bg, column flex, gap 0)
├── Header wrapper (390w, white, column)
│   ├── System Status Bar (390x38): "9:41" left; Mobile Signal / Wifi / Battery right
│   └── Chrome - Top (390x55): white bg + hairline shadow 0px 0.4px 0px #ccc; URL pill #e8eaed h36 radius 30 (left 11 / right 10 / bottom 10); centered lock(16) + "supersummary.com" gap 7px; share icon 21x21 right 24 top 16
├── Progress row (h 36, full width, row, gap 4px, pl 8px, pr 16px, items center)
│   ├── <Icon> back arrow 24x24 (radius 8px)
│   └── overlaid track (flex 1, inline-grid stacking):
│       ├── track: full width, h 4px, #ededed (Semantic/support/support-gray[6])
│       └── fill: width 20%, h 4px, #006c7a (Semantic/support/support-aqua[2])
│       NOTE: this frame uses a raw 20%-width fill (not the ProgressBar component instance used on the other frames).
├── content (flex 1, column, gap 0, full width)
│   ├── Title block (390w, height 96px, column, gap 4px, padding 16px, justify center, tracking 0.25px)
│   │   ├── H "Pick your top genres." (display/h6)
│   │   └── Sub "Select up to 3 options." (default/body-small)
│   └── Options list (flex 1, column, gap 16px, items center, padding-x 16px, padding-y 24px — 11 pills overflow the frame → vertical scroll)
│       └── 11 x <Radio Button> (style Icon, state Default, unchecked):
│           - full width, height 48px, row, gap 8px, padding-x 24px, padding-y 8px, items center
│           - bg rgba(255,255,255,0.01) (Semantic/transparent); border 1px solid #bfbfbf (Semantic/border-main); radius 100px (pill)
│           - leading icon: "Book 2" 18x18 (glyph inset 8.33% v / 16.67% h) — SAME icon on all 11 options
│           - label #616161
└── Footer "Frame" (390w, white bg, column, gap 12px, justify center, padding: top 16px, bottom 24px, left/right 16px)
    └── <Button> Primary Default: full width, h 48px, bg #006c7a, radius 16px, row gap 4px, centered, padding-x 16px, overflow clip
        ├── Label "Next"
        └── End Icon 24x24 arrow_forward (glyph inset 18.36% v / 17.54% h)
```

## Colors

| Use | Value | Token |
|---|---|---|
| Page background | `#ffffff` | Semantic/background-default |
| Chrome pill | `#e8eaed` / text `#202124` | — |
| Progress track | `#ededed` | Semantic/support/support-gray[6] |
| Progress fill | `#006c7a` | Semantic/support/support-aqua[2] |
| Title text | `#212121` | Semantic/text-primary |
| Subtitle text | `#616161` | Semantic/text-secondary |
| Option bg | `rgba(255,255,255,0.01)` | Semantic/transparent |
| Option border | `#bfbfbf` | Semantic/border-main |
| Option label | `#616161` | Semantic/text-secondary |
| Button bg | `#006c7a` | Semantic/interactive-primary |
| Button label | `#f8f8f8` | Semantic/text-primary-contrast |

## Radii / borders / shadows

- Option pills: radius 100px, border 1px solid #bfbfbf, no shadow
- Next button: radius 16px (token `--default`), no border/shadow
- Chrome pill: radius 30px; chrome hairline shadow 0px 0.4px 0px 0px #ccc
- No gradients

## Typography

| Node | Family | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| Title "Pick your top genres." (display/h6) | General Sans (fontFamily-display) | Medium (500) | 24px (1.5rem) | 1.3 | 0.25px | #212121 |
| Subtitle "Select up to 3 options." (default/body-small) | Open Sans (fontFamily-default) | Regular (400) | 14px (0.875rem) | 1.5 | 0.25px | #616161 |
| Option labels (default/body) | Open Sans | Regular (400) | 16px (1rem) | 1.5 | 0.25px | #616161 |
| Button "Next" (Button/label-default) | Open Sans | SemiBold (600) | 16px (1rem) | normal (100%) | 0.25px | #f8f8f8 |
| Chrome URL | SF Pro | Regular (400) | 18px | normal | 0 | #202124 |

## Progress bar state

- Continuous fill bar, not segmented. Fill is an explicit **20% width** overlay on the full-width #ededed track (raw frame construction, not the shared ProgressBar component). Back arrow at left.

## Header / footer composition

- Header: iOS status bar (9:41, black glyphs) + Chrome bar with lock + "supersummary.com" + share icon. Identical composition to the other frames.
- Footer: white, padding 16px top / 24px bottom / 16px sides, full-width Primary teal `Next` button (48px) with trailing arrow_forward icon. State: Default (enabled) as drawn — even though this is a multi-select "up to 3" step, the frame shows the button in Default state with nothing selected.

## Option list details

- Component: `<Radio Button>` (ds/radio-button), variant State=Default, Type=Default, Style=Icon — visually pill with leading icon + label, no visible radio circle or checkbox glyph.
- Behavior per copy: multi-select, "Select up to 3 options." (despite the component being named Radio Button; footer Next confirms the selection).
- All 11 options use the identical "Book 2" icon (18x18) and are drawn unselected (transparent fill, #bfbfbf border, #616161 label).
- Selected state not shown on this frame; component docs: Checked fill = Semantic/interactive-primary (#006c7a).
- List (11 x 48px + 10 x 16px gap + 48px padding = 736px) exceeds available height → list region scrolls; footer is pinned.

## Downloaded assets (design-specs/assets/08-q-genres/)

| File | Used for |
|---|---|
| arrow-back-vector.svg | Progress row back-arrow glyph |
| statusbar-battery-outline.svg / statusbar-battery-cap.svg / statusbar-battery-fill.svg | iOS battery |
| statusbar-wifi.svg / statusbar-mobile-signal.svg | iOS wifi + signal |
| statusbar-time-941.svg | "9:41" glyph |
| chrome-share.svg / chrome-lock.svg | Browser chrome icons |
| icon-book2.svg | Leading "Book 2" icon on all 11 option pills |
| next-button-arrow-forward.svg | Next button end icon |

## Raw reference code (get_design_context output)

```tsx
const imgRectangle = "https://www.figma.com/api/mcp/asset/be4d9aa5-5d52-422a-92de-5a1bd56d7751.svg";
const imgCombinedShape = "https://www.figma.com/api/mcp/asset/49c3fb5b-43ca-48a3-adec-9e99bec1ba42.svg";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/c9aefe27-df87-419f-99eb-0155ffad4f9f.svg";
const imgWifi = "https://www.figma.com/api/mcp/asset/55cae7bb-f52b-4229-a803-eb5649bfba9d.svg";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/a41a9e00-4ae6-4245-a983-a3fae99700ab.svg";
const img941 = "https://www.figma.com/api/mcp/asset/cca47668-f3fb-45dc-b004-a67541112e2f.svg";
const imgShare = "https://www.figma.com/api/mcp/asset/b609f2b6-f98c-4923-b670-cb95461b7eee.svg";
const imgLock = "https://www.figma.com/api/mcp/asset/89dcd0d1-f22b-48ba-a53e-ad6ead88363f.svg";
const imgVector = "https://www.figma.com/api/mcp/asset/d55e669d-ce96-4351-948f-7231bdd68243.svg";
const imgVector1 = "https://www.figma.com/api/mcp/asset/9b5ee444-6b28-4516-8f1e-cdb7602aae6a.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/c3fa8704-bb78-4045-b27c-4b355721268a.svg";

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

export default function IPhone1314240() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[var(--0,0px)] items-start relative size-full" data-node-id="7814:30016" data-name="iPhone 13 & 14 - 240">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="7814:30017">
        <SystemStatusBar className="h-[38px] overflow-clip relative shrink-0 w-[390px]" />
        <div className="h-[55px] relative shrink-0 w-[390px]" data-node-id="7814:30019" data-name="Chrome - Top">
          <div className="absolute bg-white inset-[0_0_1.82%_0] shadow-[0px_0.4px_0px_0px_#ccc]" data-node-id="I7814:30019;726:1322" data-name="bg" />
          <div className="absolute bg-[#e8eaed] bottom-[10px] h-[36px] left-[11px] right-[10px] rounded-[30px]" data-node-id="I7814:30019;726:1323" data-name="chrome-bar-input" />
          <div className="absolute overflow-clip right-[24px] size-[21px] top-[16px]" data-node-id="I7814:30019;732:2974" data-name=".icons/chrome/share">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.385px] left-1/2 top-1/2 w-[14.538px]" data-node-id="I7814:30019;732:2974;732:2858" data-name="Share">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex gap-[7px] items-center justify-center left-[calc(50%+0.41px)] top-[16px]" data-node-id="I7814:30019;726:1325">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I7814:30019;732:2892" data-name=".icons/chrome/lock">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.508px] left-1/2 top-[calc(50%+0.64px)] w-[7.672px]" data-node-id="I7814:30019;732:2892;732:2890" data-name="Lock">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular'] font-normal leading-[normal] relative shrink-0 text-[#202124] text-[18px] whitespace-nowrap" data-node-id="I7814:30019;726:1327" style={{ fontVariationSettings: '"wdth" 100' }}>
              supersummary.com
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] relative shrink-0 w-full" data-node-id="7814:30020">
        <div className="relative rounded-[var(--8,8px)] shrink-0 size-[24px]" data-node-id="7814:30021" data-name="<Icon>">
          <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 overflow-clip top-[20%] w-[14.4px]" data-node-id="I7814:30021;2766:616" data-name="arrow_back">
            <div className="absolute inset-[16.67%]" data-node-id="I7814:30021;2766:616;2402:73543" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-w-px place-items-start relative" data-node-id="7814:30022">
          <div className="bg-[var(--semantic\/support\/support-gray\[6\],#ededed)] col-1 h-[4px] ml-0 mt-0 relative row-1 w-full" data-node-id="7814:30023" />
          <div className="bg-[var(--semantic\/support\/support-aqua\[2\],#006c7a)] col-1 h-[4px] ml-0 mt-0 relative row-1 w-[20%]" data-node-id="7814:30024" />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-h-px pt-[var(--0,0px)] relative w-full" data-node-id="7814:30026" data-name="content">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--4,4px)] h-[96px] items-start justify-center p-[var(--16,16px)] relative shrink-0 tracking-[0.25px] w-[390px]" data-node-id="7814:30027">
          <p className="font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[1.3] not-italic relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1\,5rem,24px)] w-full" data-node-id="7814:30028">
            Pick your top genres.
          </p>
          <p className="font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] w-full" data-node-id="7814:30029" style={{ fontVariationSettings: '"wdth" 100' }}>
            Select up to 3 options.
          </p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--16,16px)] items-center min-h-px px-[var(--16,16px)] py-[var(--24,24px)] relative w-full" data-node-id="7814:30030">
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:30031" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30031;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:30031;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7814:30031;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30031;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Literary Fiction
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:30032" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30032;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:30032;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7814:30032;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30032;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Contemporary Fiction
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:30033" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30033;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:30033;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7814:30033;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30033;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Historical Fiction
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:30034" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30034;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:30034;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7814:30034;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30034;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`Mystery & Thriller`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:30035" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30035;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:30035;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7814:30035;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30035;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`Science Fiction & Fantasy`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:30036" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30036;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:30036;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7814:30036;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30036;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Romance
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:30037" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30037;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:30037;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7814:30037;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30037;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Classic Literature
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:30038" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30038;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:30038;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7814:30038;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30038;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`Memoir & Biography`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:30039" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30039;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:30039;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7814:30039;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30039;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`Self-Help & Personal Growth`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:30040" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30040;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:30040;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7814:30040;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30040;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>{`Business & Finance`}</p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:30041" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30041;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:30041;1543:2385" data-name="Book 2">
                <div className="absolute inset-[8.33%_16.67%]" data-node-id="I7814:30041;1543:2385;2200:3" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30041;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              I read a mix of everything
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[var(--12,12px)] items-start justify-center pb-[var(--24,24px)] pt-[var(--16,16px)] px-[16px] relative shrink-0 w-[390px]" data-node-id="7814:30042" data-name="Frame">
        <div className="bg-[var(--semantic\/interactive-primary,#006c7a)] content-stretch flex gap-[var(--4,4px)] h-[48px] items-center justify-center overflow-clip px-[var(--16,16px)] py-[var(--0,0px)] relative rounded-[var(--default,16px)] shrink-0 w-full" data-node-id="7814:30043" data-name="<Button>">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightsemibold,600)] leading-[normal] relative shrink-0 text-[color:var(--semantic\/text-primary-contrast,#f8f8f8)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30043;141:2420" style={{ fontVariationSettings: '"wdth" 100' }}>
            Next
          </p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I7814:30043;141:2519" data-name="End Icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I7814:30043;141:2421" data-name="Style=Round">
              <div className="absolute inset-[18.36%_17.54%]" data-node-id="I7814:30043;141:2421;2402:73679" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
