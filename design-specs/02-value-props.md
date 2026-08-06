# 02-value-props — "See what makes us different"

Figma node: `7814:30746` (iPhone 13 & 14 - 243) · File: `2T3j73CQ4BKfuuXPnb0qFi` · Frame: 390 x 844
Screenshot: `design-specs/screens/02-value-props.png`

## Copy (verbatim)

| Node | Text |
|---|---|
| Chrome URL pill | `supersummary.com` |
| Headline line 1 | `See what makes ` (trailing space in design) |
| Headline line 2 | `us different` |
| Callout 1 | `8X more resources than SparkNotes and CliffsNotes.` |
| Callout 2 | `A library that keeps up with you — 100+ new titles monthly.` |
| Callout 3 | `Audio Study Guides, PDFs, and our app for reading on the go.` |
| Footer button | `Next` (with arrow_forward end icon) |

## Background

Root frame, two layered fills:
1. Radial gradient at 70% opacity centered around (211.5, 284): `rgba(207,235,238,1)` @ 0.15 → `rgba(248,248,248,1)` @ 0.9
2. Under it, solid `linear-gradient(90deg, #F8F8F8 0%, #F8F8F8 100%)` (flat off-white `#F8F8F8`)

## Layout structure

```
Root frame 390x844 — flex column, gap 12 (--12), items-start, off-white bg
├─ Header "chrome" (7814:30749) — in-flow (NOT absolute), bg white, flex column, w 390
│  ├─ SystemStatusBar — h 38, w 390 (black glyphs: 9:41 / signal / wifi / battery SVGs)
│  ├─ Chrome - Top (7814:30751) — h 55, w 390
│  │  ├─ bg white, inset 0 0 1.82% 0, shadow 0px 0.4px 0px 0px #CCC
│  │  ├─ URL pill: bg #E8EAED, h 36, left 11, right 10, bottom 10, rounded 30
│  │  ├─ share icon 21x21 at right 24 / top 16
│  │  └─ lock (16x16) + "supersummary.com" (SF Pro 18, #202124), centered, gap 7
│  └─ ProgressBar (7210:1731 component, step="4") — bg white, h 36, w 390, flex row, gap 4 (--4), items-center, justify-center, padding-left 8 (--8), padding-right 16 (--16)
│     ├─ <Icon> back arrow — 24x24 box, rounded 8; arrow_back glyph 14.4 wide, inset 16.67%
│     └─ Track — flex 1 (≈338px wide), bg #EDEDED (--semantic/background-offpaper)
│        └─ Fill — h 4, w 168, bg #006C7A (var named --semantic/support/support-aqua[2]) → fill fraction 168/338 ≈ 50%
├─ Main content (7814:30753) — flex column, flex 1, gap 0, items-center, justify-center, py 24, w-full
│  ├─ Headline block (7814:30754) — flex column, gap 24 (--24), items-start, px 24 (--24), py 12 (--12), w 390, overflow-clip
│  │  ├─ Text Highlight Small decoration (7814:30755) — ABSOLUTE, left 137, top 73, outer 169.026 x 40.699; inner 168.252 x 37.884, rotate 0.96deg, skew-x -0.24deg; 3 vectors (highlight under "us different")
│  │  └─ Headline (7814:30756) — display/h4, text-center, two <p> lines with 16px margin-bottom after line 1
│  └─ Callout list wrapper (7814:30757) — flex column, gap 16 (--16), items-start, padding 32 (--32), w 390, overflow-clip
│     └─ Inner list (7814:30758) — flex column, gap 8 (--8), items-start, padding 0, rounded 16 (--default), w-full
│        ├─ <Callout-Card> 1 (7814:30759) — flex row, gap 16, items-start, px 0, py 12 (--12), rounded 8 (--smaller), w-full
│        │  └─ Container — flex row, gap 12 (--12), items-center, flex 1
│        │     ├─ <Icon> chip 32x32, rounded 8 (--8), bg #D1EBC4 (support-olive[5]); rocket_launch glyph 19.2 wide, box inset top/bottom 20%, glyph inset 8.33%
│        │     └─ Content — flex column, gap 4, justify-center, flex 1 → body text
│        ├─ <Callout-Card> 2 (7814:30760) — same, items-center; icon chip bg #D6E3F2 (support-indigo[6]); auto_stories glyph inset 9.38% v / 4.17% h
│        └─ <Callout-Card> 3 (7814:30761) — same, items-center; icon chip bg #EDCBD0 (support-magenta[5]); phone_iphone glyph inset 4.17% v / 22.92% h
└─ Footer (7814:30747) — bg WHITE, flex column, gap 12, items-start, justify-center, w 390, padding: top 16 (--16), bottom 24 (--24), left/right 16
   └─ <Button> Next (7814:30748) — Primary/Default: bg #006C7A (--semantic/interactive-primary), h 48, full width, rounded 16 (--default), flex row gap 4, centered, px 16
      ├─ Label "Next" — #F8F8F8
      └─ End Icon arrow_forward — 24x24 box, glyph inset 18.36% v / 17.54% h
```

## Colors

| Token | Hex | Use |
|---|---|---|
| — (radial gradient) | rgba(207,235,238) → rgba(248,248,248), 70% opacity | Background glow (aqua tint top) |
| — | `#F8F8F8` | Background base fill |
| Semantic/background-default | `#FFFFFF` | Chrome bg, progress bar bg, footer bg |
| Semantic/background-offpaper | `#EDEDED` | Progress bar track |
| Semantic/support/support-aqua[2] | `#006C7A` | Progress bar fill (same hex as interactive-primary) |
| Semantic/interactive-primary | `#006C7A` | Next button fill |
| Semantic/text-primary | `#212121` | Headline, callout text |
| Semantic/text-primary-contrast | `#F8F8F8` | Next button label |
| Semantic/support/support-olive[5] | `#D1EBC4` | Callout 1 icon chip |
| Semantic/support/support-indigo[6] | `#D6E3F2` | Callout 2 icon chip |
| Semantic/support/support-magenta[5] | `#EDCBD0` | Callout 3 icon chip |
| — | `#E8EAED` | Chrome URL pill |
| — | `#202124` | Chrome URL text |
| — | `#CCCCCC` | Chrome hairline shadow |

## Radii / Borders / Shadows

- Icon chips: 32x32, radius 8px (--8)
- Callout cards: radius 8px (--smaller); no border, no fill (transparent on page bg)
- Callout list wrapper inner: radius 16px (--default)
- Next button radius: 16px (--default)
- Chrome pill radius: 30px; chrome bottom hairline: shadow 0px 0.4px 0px 0px #CCC
- No drop shadows elsewhere on this screen

## Typography

| Node | Style | Family | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|---|
| Headline | display/h4 | General Sans Medium | 500 (Medium) | 36px (2.25rem) | 1.2 | 0 | #212121, centered |
| Callout text | default/body | Open Sans | 400 | 16px (1rem) | 1.5 | 0.25px | #212121 |
| Next label | Button/label-default | Open Sans SemiBold | 600 | 16px | normal (100%) | 0.25px | #F8F8F8 |
| Chrome URL | — | SF Pro Regular | 400 | 18px | normal | — | #202124 |

## Progress bar / header / footer state

- **Progress bar**: continuous bar (not segments). White strip h 36 under chrome; back-arrow icon (24x24) left, then a flexible track (bg `#EDEDED`) whose fill is `#006C7A`, h 4px, w 168px. Track usable width = 390 − 8 (pl) − 24 (icon) − 4 (gap) − 16 (pr) = 338px → fill fraction ≈ 168/338 ≈ 49.7% (~50%). Component instance prop: `step="4"`.
- Header: white, in-flow: iOS status bar (h 38) + Chrome top (h 55, pill "supersummary.com", lock, share) + progress bar row (h 36). Back arrow present (inside progress bar row, left).
- Footer: white bg, full-width "Next" primary button (enabled, filled #006C7A) with arrow_forward end icon; padding 16 top / 24 bottom / 16 sides.

## Component notes (from Figma component docs)

- `<Button>` variant: Size=Default, Type=Primary, State=Default, Style=Default — "Highest emphasis... Default token palette".
- `<Callout-Card>` — ds/callout-card; variant State=Default, Style=With Icon Button, Orientation=Horizontal (used here with icon + text only, no CTA visible).
- `<Icon>` — ds/icon; variants used: Size=Default (24px→32px chip), Color=Olive/Indigo/Magenta, Background=Default ("Chip-style coloured background behind icon"); back arrow uses Size=Small, Color=Gray, Background=Transparent.
- Icons: `rocket_launch`, `auto_stories`, `phone_iphone`, `arrow_back`, `arrow_forward`.

## Downloaded assets (design-specs/assets/02-value-props/)

| File | Used at |
|---|---|
| icon-arrow-back.svg | Progress bar back arrow, glyph inset 16.67% of 14.4px-wide box |
| icon-rocket-launch.svg | Callout 1 icon, inside 32x32 olive chip |
| icon-auto-stories.svg | Callout 2 icon, inside 32x32 indigo chip |
| icon-phone-iphone.svg | Callout 3 icon, inside 32x32 magenta chip |
| icon-arrow-forward.svg | Next button end icon, 24x24 box |
| text-highlight-vector-1.svg | Headline highlight, inset 32.45% 0 21.59% 0 of 168.252x37.884 box |
| text-highlight-vector-2.svg | Headline highlight, inset 59.44% 5% 0 7.64% |
| text-highlight-vector-3.svg | Headline highlight, inset 0 7.14% 51.33% 4.95% |
| chrome-share.svg | Chrome share icon |
| chrome-lock.svg | Chrome lock icon |
| statusbar-battery-outline.svg / statusbar-battery-cap.svg / statusbar-battery-fill.svg | Status bar battery |
| statusbar-wifi.svg | Status bar wifi |
| statusbar-mobile-signal.svg | Status bar signal |
| statusbar-time-941.svg | Status bar "9:41" |

## Raw reference code (get_design_context)

```tsx
const imgVector = "https://www.figma.com/api/mcp/asset/eb836b92-b2e3-4ed7-8da6-3559bc060ff1.svg";
const imgRectangle = "https://www.figma.com/api/mcp/asset/b43442dc-800a-4433-b129-7cb832b599dd.svg";
const imgCombinedShape = "https://www.figma.com/api/mcp/asset/c914cdfa-163e-4a12-afb6-454a40771fd2.svg";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/d5e5dfbd-5d1d-49f4-94f1-6aa3e1188974.svg";
const imgWifi = "https://www.figma.com/api/mcp/asset/0d338596-a744-44b8-968c-8906d64ce976.svg";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/843950e7-4836-4b58-a667-fe3b6afa4719.svg";
const img941 = "https://www.figma.com/api/mcp/asset/8473d947-d44a-42fe-adc8-6c871b0125d5.svg";
const imgShare = "https://www.figma.com/api/mcp/asset/a2821a28-7cd5-43e3-987a-a3cd17d93407.svg";
const imgLock = "https://www.figma.com/api/mcp/asset/aedcaa3c-b058-4e8a-9741-2d8ecfb1d96d.svg";
const imgVector1 = "https://www.figma.com/api/mcp/asset/29c6700a-7c37-4327-8ffe-e8df9f499a84.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/42ab5b50-9080-4d67-8b67-54cd5af92f40.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/3a329562-c25b-440a-9f13-235191ed6d02.svg";
const imgVector4 = "https://www.figma.com/api/mcp/asset/1bb31b7a-d6bd-409c-8adb-50594b8fc6c0.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/71c70496-5d0f-48d8-98e7-c4ab3734b762.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/c1039163-234f-488d-9b2a-3799b3ba7d97.svg";
const imgVector7 = "https://www.figma.com/api/mcp/asset/765accdb-09ef-4ba3-9666-e69a186e5be0.svg";

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

export default function IPhone1314243() {
  return (
    <div className="content-stretch flex flex-col gap-[var(--12,12px)] items-start relative size-full" data-node-id="7814:30746" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.699999988079071'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0.050001 42.5 -26.512 0.031192 211.5 284)'><stop stop-color='rgba(207,235,238,1)' offset='0.15'/><stop stop-color='rgba(248,248,248,1)' offset='0.9'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(248, 248, 248) 0%, rgb(248, 248, 248) 100%)" }} data-name="iPhone 13 & 14 - 243">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="7814:30749" data-name="chrome">
        <SystemStatusBar className="h-[38px] overflow-clip relative shrink-0 w-[390px]" />
        <div className="h-[55px] relative shrink-0 w-[390px]" data-node-id="7814:30751" data-name="Chrome - Top">
          <div className="absolute bg-white inset-[0_0_1.82%_0] shadow-[0px_0.4px_0px_0px_#ccc]" data-node-id="I7814:30751;726:1322" data-name="bg" />
          <div className="absolute bg-[#e8eaed] bottom-[10px] h-[36px] left-[11px] right-[10px] rounded-[30px]" data-node-id="I7814:30751;726:1323" data-name="chrome-bar-input" />
          <div className="absolute overflow-clip right-[24px] size-[21px] top-[16px]" data-node-id="I7814:30751;732:2974" data-name=".icons/chrome/share">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.385px] left-1/2 top-1/2 w-[14.538px]" data-node-id="I7814:30751;732:2974;732:2858" data-name="Share">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex gap-[7px] items-center justify-center left-[calc(50%+0.41px)] top-[16px]" data-node-id="I7814:30751;726:1325">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I7814:30751;732:2892" data-name=".icons/chrome/lock">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.508px] left-1/2 top-[calc(50%+0.64px)] w-[7.672px]" data-node-id="I7814:30751;732:2892;732:2890" data-name="Lock">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular'] font-normal leading-[normal] relative shrink-0 text-[#202124] text-[18px] whitespace-nowrap" data-node-id="I7814:30751;726:1327" style={{ fontVariationSettings: '"wdth" 100' }}>
              supersummary.com
            </p>
          </div>
        </div>
        <ProgressBar className="bg-[var(--semantic\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative shrink-0 w-[390px]" />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--0,0px)] items-center justify-center min-h-px py-[24px] relative w-full" data-node-id="7814:30753">
        <div className="content-stretch flex flex-col gap-[var(--24,24px)] items-start overflow-clip px-[var(--24,24px)] py-[var(--12,12px)] relative shrink-0 w-[390px]" data-node-id="7814:30754">
          <div className="absolute flex h-[40.699px] items-center justify-center left-[137px] top-[73px] w-[169.026px]" data-node-id="7814:30755">
            <div className="flex-none rotate-[0.96deg] skew-x-[-0.24deg]">
              <div className="h-[37.884px] relative w-[168.252px]" data-name="Supporting element/Text Highlight Small">
                <div className="absolute inset-[32.45%_0_21.59%_0]" data-node-id="I7814:30755;1587:1243" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[59.44%_5%_0_7.64%]" data-node-id="I7814:30755;1587:1244" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[0_7.14%_51.33%_4.95%]" data-node-id="I7814:30755;1587:1245" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[0] min-w-full not-italic relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/2\,25rem,36px)] text-center w-[min-content] whitespace-pre-wrap" data-node-id="7814:30756">
            <p className="leading-[1.2] mb-[16px]">{`See what makes `}</p>
            <p className="leading-[1.2]">us different</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--16,16px)] items-start overflow-clip p-[var(--32,32px)] relative shrink-0 w-[390px]" data-node-id="7814:30757">
          <div className="content-stretch flex flex-col gap-[var(--8,8px)] items-start p-[var(--0,0px)] relative rounded-[var(--default,16px)] shrink-0 w-full" data-node-id="7814:30758">
            <div className="content-stretch flex gap-[var(--16,16px)] items-start px-[var(--0,0px)] py-[var(--12,12px)] relative rounded-[var(--smaller,8px)] shrink-0 w-full" data-node-id="7814:30759" data-name="<Callout-Card>">
              <div className="content-stretch flex flex-[1_0_0] gap-[var(--12,12px)] items-center min-w-px relative" data-node-id="I7814:30759;2607:462" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30759;1838:1216" data-name="Icon">
                  <div className="bg-[var(--semantic\/support\/support-olive\[5\],#d1ebc4)] relative rounded-[var(--8,8px)] shrink-0 size-[32px]" data-node-id="I7814:30759;1838:1204" data-name="<Icon>">
                    <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 overflow-clip top-[20%] w-[19.2px]" data-node-id="I7814:30759;1838:1204;2766:438" data-name="rocket_launch">
                      <div className="absolute inset-[8.33%]" data-node-id="I7814:30759;1838:1204;2766:438;2402:36096" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--4,4px)] items-start justify-center min-w-px relative" data-node-id="I7814:30759;1838:1205" data-name="Content">
                  <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="I7814:30759;1838:1206" style={{ fontVariationSettings: '"wdth" 100' }}>
                    8X more resources than SparkNotes and CliffsNotes.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--16,16px)] items-center px-[var(--0,0px)] py-[var(--12,12px)] relative rounded-[var(--smaller,8px)] shrink-0 w-full" data-node-id="7814:30760" data-name="<Callout-Card>">
              <div className="content-stretch flex flex-[1_0_0] gap-[var(--12,12px)] items-center min-w-px relative" data-node-id="I7814:30760;2607:462" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30760;1838:1216" data-name="Icon">
                  <div className="bg-[var(--semantic\/support\/support-indigo\[6\],#d6e3f2)] relative rounded-[var(--8,8px)] shrink-0 size-[32px]" data-node-id="I7814:30760;1838:1204" data-name="<Icon>">
                    <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 overflow-clip top-[20%] w-[19.2px]" data-node-id="I7814:30760;1838:1204;2766:417" data-name="auto_stories">
                      <div className="absolute inset-[9.38%_4.17%]" data-node-id="I7814:30760;1838:1204;2766:417;2402:62197" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--4,4px)] items-start justify-center min-w-px relative" data-node-id="I7814:30760;1838:1205" data-name="Content">
                  <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="I7814:30760;1838:1206" style={{ fontVariationSettings: '"wdth" 100' }}>
                    A library that keeps up with you — 100+ new titles monthly.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--16,16px)] items-center px-[var(--0,0px)] py-[var(--12,12px)] relative rounded-[var(--smaller,8px)] shrink-0 w-full" data-node-id="7814:30761" data-name="<Callout-Card>">
              <div className="content-stretch flex flex-[1_0_0] gap-[var(--12,12px)] items-center min-w-px relative" data-node-id="I7814:30761;2607:462" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-node-id="I7814:30761;1838:1216" data-name="Icon">
                  <div className="bg-[var(--semantic\/support\/support-magenta\[5\],#edcbd0)] relative rounded-[var(--8,8px)] shrink-0 size-[32px]" data-node-id="I7814:30761;1838:1204" data-name="<Icon>">
                    <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 overflow-clip top-[20%] w-[19.2px]" data-node-id="I7814:30761;1838:1204;2766:432" data-name="phone_iphone">
                      <div className="absolute inset-[4.17%_22.92%]" data-node-id="I7814:30761;1838:1204;2766:432;2402:59097" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--4,4px)] items-start justify-center min-w-px relative" data-node-id="I7814:30761;1838:1205" data-name="Content">
                  <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="I7814:30761;1838:1206" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Audio Study Guides, PDFs, and our app for reading on the go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[var(--12,12px)] items-start justify-center pb-[var(--24,24px)] pt-[var(--16,16px)] px-[16px] relative shrink-0 w-[390px]" data-node-id="7814:30747" data-name="Frame">
        <div className="bg-[var(--semantic\/interactive-primary,#006c7a)] content-stretch flex gap-[var(--4,4px)] h-[48px] items-center justify-center overflow-clip px-[var(--16,16px)] py-[var(--0,0px)] relative rounded-[var(--default,16px)] shrink-0 w-full" data-node-id="7814:30748" data-name="<Button>">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightsemibold,600)] leading-[normal] relative shrink-0 text-[color:var(--semantic\/text-primary-contrast,#f8f8f8)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30748;141:2420" style={{ fontVariationSettings: '"wdth" 100' }}>
            Next
          </p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I7814:30748;141:2519" data-name="End Icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I7814:30748;141:2421" data-name="Style=Round">
              <div className="absolute inset-[18.36%_17.54%]" data-node-id="I7814:30748;141:2421;2402:73679" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
