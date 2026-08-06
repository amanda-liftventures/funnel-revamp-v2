# 10-q-what-can-we-help — "What can we help you do?"

Figma node: `7814:31085` ("Step 44"), file `2T3j73CQ4BKfuuXPnb0qFi`. Frame 390x844, bg white.
Screenshot: `design-specs/screens/10-q-what-can-we-help.png`

## Exact copy (verbatim)

- URL pill: `supersummary.com`
- Title: `What can we help you do?`
- Subtitle: `Select all that apply.`
- Options (in visual order, top to bottom):
  1. `Have better discussions about it`
  2. `Understand it more deeply`
  3. `Keep track of characters and details`
  4. `Find my next great read`
  5. `Get context on the author and book`
  6. `Test my knowledge`
  7. `Make time to finish it`
- CTA button: `Next` (with arrow_forward end icon)

## Layout structure

```
Frame "Step 44" 390x844, bg white, column, gap 0
├── iOS Header (bg white, w 390, column)
│   ├── SystemStatusBar — h 38 (same composition as other screens: 9:41 left, signal/wifi/battery right)
│   └── Chrome - Top — h 55: white bg + hairline shadow 0 0.4px 0 #ccc, pill bg #e8eaed left 11/right 10/bottom 10/h 36/radius 30, share icon 21x21 @right 24 top 16, centered lock 16x16 + "supersummary.com" SF Pro 18 #202124
├── ProgressBar (step=4) — bg white (Semantic/background-default), h 36, w 390, row, gap 4, items-center justify-center, pl 8, pr 16
│   ├── <Icon> 24x24 radius 8 — arrow_back
│   └── track: flex-1 column, bg #ededed (Semantic/background-offpaper)
│       └── fill: h 4, w 168px fixed, bg #006c7a (Semantic/support/support-aqua[2])
│       (track width = 390 − 8 − 24 − 4 − 16 = 338px → fill ≈ 168/338 ≈ 49.7% ≈ step 4 of 8)
├── Content (flex-1, column, gap 0, w full)
│   ├── Title block — h 96, w 390, column, gap 4, justify-center, padding 16, tracking 0.25px
│   │   ├── "What can we help you do?" — General Sans Medium (display), 24px (--font-size/1,5rem), lh 1.3, ls 0.25, #212121, full width, left-aligned
│   │   └── "Select all that apply." — Open Sans Regular 400, 14px (--font-size/0,875rem), lh 1.5, ls 0.25, #616161
│   └── Body — column, gap 16, px 16, py 24, w full
│       └── 7x <Radio Button> (Style=Icon, State=Default/unselected):
│           h 48, w full, radius 100px (--rounded, pill), border 1px solid #bfbfbf (Semantic/border-main),
│           bg rgba(255,255,255,0.01) (Semantic/transparent), row, gap 8, px 24, py 8, items-center
│           ├── icon 18x18 (outlined style, gray)
│           └── label — Open Sans Regular 400, 16px, lh 1.5, ls 0.25, #616161 (Semantic/text-secondary), flex-1
└── Footer — bg white, w 390, column, gap 12, padding 16, justify-center
    └── <Button> Primary Default — h 48, w full, bg #006c7a, radius 16 (--default), row gap 4, px 16, centered
        ├── "Next" — Open Sans SemiBold 600, 16px, ls 0.25, lh normal, #f8f8f8
        └── End icon arrow_forward 24x24 (glyph inset 18.36% v / 17.54% h), white
```

## Option → icon mapping (all 18x18, outlined, gray)

| Option label | Material icon (per Figma component descriptions) | Asset file |
|---|---|---|
| Have better discussions about it | question_answer | icon-question-answer.svg |
| Understand it more deeply | auto_stories | icon-auto-stories.svg |
| Keep track of characters and details | track_changes | icon-track-changes.svg |
| Find my next great read | bookmark_add | icon-bookmark-add.svg |
| Get context on the author and book | history_edu | icon-history-edu.svg |
| Test my knowledge | lightbulb | icon-lightbulb.svg |
| Make time to finish it | watch_later | icon-watch-later.svg |

Note: option components are named `<Radio Button>` in the DS (ds/radio-button, style Icon), but the screen copy says "Select all that apply." — behavior is multi-select (checkbox semantics). Selected state per DS tokens: Semantic/interactive-primary → checked fill; unchecked fill Semantic/surface-default. Only the Default (unselected) state appears in this frame.

## Colors

| Token | Hex |
|---|---|
| Semantic/text-primary | #212121 |
| Semantic/text-secondary | #616161 |
| Semantic/text-primary-contrast | #f8f8f8 |
| Semantic/background-default | #ffffff (white) |
| Semantic/background-offpaper (progress track) | #ededed |
| Semantic/support/support-aqua[2] (progress fill) | #006c7a |
| Semantic/border-main (option pill border) | #bfbfbf |
| Semantic/transparent (option pill bg) | rgba(255,255,255,0.01) |
| Semantic/interactive-primary (button) | #006c7a |
| Chrome bar input | #e8eaed |
| Chrome URL text | #202124 |

## Typography

| Node | Family | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| Title (7814:31090) | General Sans (display) — style display/h6 | Medium 500 | 24px | 1.3 | 0.25px | #212121 |
| Subtitle (7814:31091) | Open Sans — default/body-small | Regular 400 | 14px | 1.5 | 0.25px | #616161 |
| Option label | Open Sans — default/body | Regular 400 | 16px | 1.5 | 0.25px | #616161 |
| Button label | Open Sans — Button/label-default | SemiBold 600 | 16px | 100% | 0.25px | #f8f8f8 |
| Chrome URL | SF Pro | Regular 400 | 18px | normal | — | #202124 |

## Progress bar state

- Single continuous bar (not segmented). Track: #ededed, full flex width (~338px), fill h 4px.
- Fill: fixed 168px wide, #006c7a → ~49.7% (component instance is `ProgressBar step="4"`, i.e. step 4).

## Header / footer composition

- iOS status bar 38px (9:41 / signal / wifi / battery SVGs, black).
- Browser chrome 55px with "supersummary.com" pill (#e8eaed, radius 30) + lock + share.
- Back arrow + progress row 36px on white.
- Footer: white bar, padding 16, full-width Primary "Next" button (h 48, radius 16, #006c7a, label + arrow_forward). Button enabled/default state.

## Downloaded assets (design-specs/assets/10-q-what-can-we-help/)

| File | Used for |
|---|---|
| statusbar-battery-outline.svg / -cap.svg / -fill.svg | Status bar battery |
| statusbar-wifi.svg / statusbar-mobile-signal.svg / statusbar-time-941.svg | Status bar wifi, signal, time |
| chrome-share.svg / chrome-lock.svg | Browser chrome icons |
| arrow-back.svg | Progress row back arrow (24x24 icon, 14.4 glyph) |
| icon-question-answer.svg | Option 1 icon |
| icon-auto-stories.svg | Option 2 icon |
| icon-track-changes.svg | Option 3 icon |
| icon-bookmark-add.svg | Option 4 icon |
| icon-history-edu.svg | Option 5 icon |
| icon-lightbulb.svg | Option 6 icon |
| icon-watch-later.svg | Option 7 icon |
| arrow-forward.svg | Next button end icon |

## Raw reference code (get_design_context)

```tsx
const imgVector = "https://www.figma.com/api/mcp/asset/a6f673a5-6d16-4895-984e-84e939aec4bc.svg";
const imgRectangle = "https://www.figma.com/api/mcp/asset/e20a3b1b-ccb8-4555-afae-790a4df18d1b.svg";
const imgCombinedShape = "https://www.figma.com/api/mcp/asset/d48d2a72-3f3f-47b4-8a55-5519365432d5.svg";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/2cc3e45f-20f8-4c77-bc1c-86b1bc4c71d3.svg";
const imgWifi = "https://www.figma.com/api/mcp/asset/6d0b99a2-a296-44d1-8d77-0075b3475724.svg";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/29e67be3-dd3d-4235-8991-b9e9996435a9.svg";
const img941 = "https://www.figma.com/api/mcp/asset/88084a87-5cdd-4cb8-aedd-2d5afef2371a.svg";
const imgShare = "https://www.figma.com/api/mcp/asset/b818e4c3-4002-49e4-8141-8a70f359f770.svg";
const imgLock = "https://www.figma.com/api/mcp/asset/9eaf9afa-115f-43a6-8a59-c5dbec52f3b4.svg";
const imgVector1 = "https://www.figma.com/api/mcp/asset/189ef41d-7ab9-463e-acb8-b300e3778c32.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/b477dd83-8b4f-4f09-b40e-402540516c1b.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/06f8628b-1b6f-48d8-a83c-1dd388ab6802.svg";
const imgVector4 = "https://www.figma.com/api/mcp/asset/35f04e48-abc5-4351-b9a6-3259ada53cc0.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/26215988-57d3-406a-bf57-ba0f45e3e10e.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/d462ced5-b66b-46db-9d59-5b93600d10fa.svg";
const imgVector7 = "https://www.figma.com/api/mcp/asset/165a440b-587b-4b93-bd35-b5c41cf54c09.svg";
const imgVector8 = "https://www.figma.com/api/mcp/asset/12b16198-02e1-4bc6-8acb-79368988d51f.svg";

type ProgressBarProps = {
  className?: string;
  step?: "4";
};

function ProgressBar({ className, step = "4" }: ProgressBarProps) {
  return (
    <div className={className || "bg-[var(--semantic\\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative w-[390px]"} data-node-id="7210:1731">
      <div className="relative rounded-[var(--8,8px)] shrink-0 size-[24px]" data-node-id="7210:1724" data-name="<Icon>">
        <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 overflow-clip top-[20%] w-[14.4px]" data-node-id="I7210:1724;2766:616" data-name="arrow_back">
          <div className="absolute inset-[16.67%]" data-node-id="I7210:1724;2766:616;2402:73543" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="bg-[var(--semantic\/background-offpaper,#ededed)] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="7210:1725">
        <div className="bg-[var(--semantic\/support\/support-aqua\[2\],#006c7a)] h-[4px] relative shrink-0 w-[168px]" data-node-id="7210:1726" />
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

export default function Step44() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[var(--0,0px)] items-start relative size-full" data-node-id="7814:31085" data-name="Step 44">
      <IOsHeader className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" />
      <ProgressBar className="bg-[var(--semantic\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative shrink-0 w-[390px]" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-start min-h-px relative w-full" data-node-id="7814:31088" data-name="Content">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--4,4px)] h-[96px] items-start justify-center p-[var(--16,16px)] relative shrink-0 tracking-[0.25px] w-[390px]" data-node-id="7814:31089" data-name="Title">
          <p className="font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[1.3] not-italic relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1\,5rem,24px)] w-full" data-node-id="7814:31090">
            What can we help you do?
          </p>
          <p className="font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] w-full" data-node-id="7814:31091" style={{ fontVariationSettings: '"wdth" 100' }}>
            Select all that apply.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--16,16px)] items-start px-[var(--16,16px)] py-[var(--24,24px)] relative shrink-0 w-full" data-node-id="7814:31092" data-name="Body">
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31096" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31096;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31096;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[8.33%]" data-node-id="I7814:31096;1543:2385;2402:35697" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px]" data-node-id="I7814:31096;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Have better discussions about it
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31095" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31095;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31095;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[9.38%_4.17%]" data-node-id="I7814:31095;1543:2385;2402:62197" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px]" data-node-id="I7814:31095;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Understand it more deeply
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31093" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31093;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31093;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[8.33%]" data-node-id="I7814:31093;1543:2385;2402:38606" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px]" data-node-id="I7814:31093;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Keep track of characters and details
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31097" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31097;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31097;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[12.5%_16.67%]" data-node-id="I7814:31097;1543:2385;2402:30013" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px]" data-node-id="I7814:31097;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Find my next great read
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31099" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31099;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31099;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[16.67%_9.25%]" data-node-id="I7814:31099;1543:2385;2402:81355" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px]" data-node-id="I7814:31099;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Get context on the author and book
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31098" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31098;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31098;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[8.33%_20.83%]" data-node-id="I7814:31098;1543:2385;2402:33585" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px]" data-node-id="I7814:31098;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Test my knowledge
            </p>
          </div>
          <div className="bg-[var(--semantic\/transparent,rgba(255,255,255,0.01))] border border-[var(--semantic\/border-main,#bfbfbf)] border-solid content-stretch flex gap-[var(--8,8px)] h-[48px] items-center px-[var(--24,24px)] py-[var(--8,8px)] relative rounded-[var(--rounded,100px)] shrink-0 w-full" data-node-id="7814:31094" data-name="<Radio Button>">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:31094;1543:2388" data-name="Icon">
              <div className="overflow-clip relative shrink-0 size-[18px]" data-node-id="I7814:31094;1543:2385" data-name="Style=Outlined">
                <div className="absolute inset-[8.33%]" data-node-id="I7814:31094;1543:2385;2402:39674" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px]" data-node-id="I7814:31094;1543:2377" style={{ fontVariationSettings: '"wdth" 100' }}>
              Make time to finish it
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[var(--12,12px)] items-start justify-center p-[var(--16,16px)] relative shrink-0 w-[390px]" data-node-id="7814:31100" data-name="Footer">
        <div className="bg-[var(--semantic\/interactive-primary,#006c7a)] content-stretch flex gap-[var(--4,4px)] h-[48px] items-center justify-center overflow-clip px-[var(--16,16px)] py-[var(--0,0px)] relative rounded-[var(--default,16px)] shrink-0 w-full" data-node-id="I7814:31100;7210:1778" data-name="<Button>">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightsemibold,600)] leading-[normal] relative shrink-0 text-[color:var(--semantic\/text-primary-contrast,#f8f8f8)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:31100;7210:1778;141:2420" style={{ fontVariationSettings: '"wdth" 100' }}>
            Next
          </p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I7814:31100;7210:1778;141:2519" data-name="End Icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I7814:31100;7210:1778;141:2421" data-name="Style=Round">
              <div className="absolute inset-[18.36%_17.54%]" data-node-id="I7814:31100;7210:1778;141:2421;2402:73679" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
