# 01-welcome — "Your next great read starts on SuperSummary"

Figma node: `7814:29856` (iPhone 13 & 14 - 254) · File: `2T3j73CQ4BKfuuXPnb0qFi` · Frame: 390 x 844
Screenshot: `design-specs/screens/01-welcome.png`

## Copy (verbatim)

| Node | Text |
|---|---|
| Chrome URL pill | `supersummary.com` |
| Status bar time | `9:41` (SVG asset, not live text) |
| Guide card 1 title | `Proof of Heaven: A Neurosurgeo…` |
| Guide card 1 author | `Eben Alexander` |
| Guide card 2 title | `The Great Gatsby` |
| Guide card 2 author | `F. Scott Fitzgerals` (sic — typo in design) |
| Guide card 3 title | `West with Giraffes` |
| Guide card 3 author | `Lynda Rutledge` |
| Guide card 4 title | `The Seven Year Slip` |
| Guide card 4 author | `Ashley Poston` |
| Headline | `Your next great read starts on SuperSummary` |
| Subhead | `Answer a few quick questions, and we'll show you around based on what you're reading.` |
| Primary button | `Get Started` (with arrow_forward end icon) |
| Sign-in line | `Already have an account?` |
| Sign-in link | `Sign In` (underlined) |

## Background

Root frame background is two layered fills:
1. Radial gradient at 70% opacity, centered around (212, 278.5), stops: `rgba(39,146,158,1)` @ 0.15 → `rgba(20,107,117,1)` @ 0.34565 → `rgba(11,87,96,1)` @ 0.44348 → `rgba(1,67,75,1)` @ 0.5413
2. Under it, solid `linear-gradient(90deg, #01434B 0%, #01434B 100%)` (i.e. flat `#01434B` dark teal)

## Layout structure

```
Root frame 390x844 — flex column, gap 12 (--12), items-start, dark teal bg
├─ Main content wrapper (7814:29857) — flex column, flex 1, gap 16 (--16), items-center, justify-end, w-full
│  ├─ Card collage area (7814:29858) — flex column, flex 1, items-center, justify-center, padding-top 144, w-full
│  │  └─ Inline grid (1 col x 1 row, overlapping layers, place-items-start)
│  │     ├─ Row "guides" (7814:29860) — flex row, gap 16, items-center, offset ml 184.5 / mt 104 (second, lower row; bleeds off right edge)
│  │     │  ├─ Guide Card: Proof of Heaven — bg #CFEBEE, shadow, hug width (text col fixed w 157)
│  │     │  ├─ Guide Card: The Great Gatsby — bg #CFEBEE, shadow, w 294
│  │     │  └─ Guide Card: West with Giraffes — bg WHITE, NO shadow, w 294
│  │     └─ Row "guides" (7814:29877) — flex row, gap 16, items-center, ml 0 / mt 0 (first, upper row; bleeds off right edge)
│  │        ├─ Guide Card: Proof of Heaven — bg WHITE, shadow, w 294
│  │        ├─ Guide Card: The Seven Year Slip — bg #CFEBEE, shadow, hug width (cover has 1px #D9D9D9 border)
│  │        └─ Guide Card: West with Giraffes — bg #CFEBEE, shadow, w 294 (cover has 1px #D9D9D9 border)
│  └─ Text block (7814:29893) — flex column, gap 12, items-start, w 390, padding: top 0, bottom 12 (--12), left/right 16
│     ├─ Text Highlight Small decoration (7814:29894) — ABSOLUTE, left 77, top 3, 243.767 x 36.926 outer box; inner 243.11 x 32.853, rotated 0.96deg, skew-x -0.24deg; 3 vector strokes (hand-drawn highlight under "next great read")
│     ├─ Headline (7814:29896) — display/h5
│     └─ Subhead (7814:29897) — default/body
├─ Footer (7814:29898) — flex column, gap 12, items-start, justify-center, w 390, padding: top 16 (--16), bottom 24 (--24), left/right 16
│  ├─ <Button> Get Started (7814:29899) — Primary/Contrast: bg white (--semantic/background-default), h 48, full width, rounded 16 (--default), flex row gap 4, centered, px 16
│  │  ├─ Label "Get Started"
│  │  └─ End Icon: arrow_forward, 24x24 box, glyph inset 18.36% v / 17.54% h
│  └─ Sign In row (7814:29900) — flex row, gap 4, items-center, justify-center, hug
│     ├─ "Already have an account?" (body-small)
│     └─ <Link> "Sign In" — Small/Default/Underline variant, gap 4
└─ Browser chrome (7814:29903) — ABSOLUTE, top 0, centered (left 50% translate -50%), w 390, bg white, flex column
   ├─ SystemStatusBar (7087:241 component) — h 38, w 390 (battery/wifi/signal SVGs right, 9:41 SVG left at 33.45/17.17)
   └─ Chrome - Top (7814:29905) — h 55, w 390
      ├─ bg: white, inset 0 0 1.82% 0, shadow 0px 0.4px 0px 0px #CCC (hairline bottom border)
      ├─ chrome-bar-input pill: bg #E8EAED, h 36, left 11, right 10, bottom 10, rounded 30
      ├─ share icon: 21x21 box at right 24 / top 16 (glyph 14.538 x 19.385 centered)
      └─ centered lock+URL group at left calc(50% + 0.41px), top 16, gap 7
         ├─ lock icon 16x16 box (glyph 7.672 x 11.508)
         └─ "supersummary.com" — SF Pro Regular 18, #202124
```

### Guide Card anatomy (shared)

- Container: flex row, gap 12 (--12), items-center, padding 12 (--12), rounded 12 (--small), border 1px solid `#D9D9D9` (--semantic/border-light)
- Background: `#CFEBEE` (--semantic/support/support-aqua[6]) or `#FFFFFF` (--semantic/background-default) per card above
- Shadow (all except the white "West with Giraffes" card in the lower row): drop-shadow `0px 2px 4px rgba(0,0,0,0.12)` as rendered in code; the attached style Elevation/1 is `DROP_SHADOW, Semantic/shadow rgba(0,0,0,0.12), offset (0,2), radius 8, spread 0`
- Cover image: 64x64, rounded 8 (--smaller); Seven Year Slip and lower-row West with Giraffes covers also have 1px solid #D9D9D9 border
- Text column: flex column, gap 4 (--4), vertically centered
  - Title: Open Sans Medium 500, 16px, line-height 1.2, letter-spacing 0.25px, color `#212121` (--semantic/text-primary)
  - Author: Open Sans Regular 400, 14px, line-height 1.5, letter-spacing 0.5px, color `#616161` (--semantic/text-secondary)

## Colors

| Token | Hex | Use |
|---|---|---|
| — (radial gradient) | rgba(39,146,158) → rgba(1,67,75), 70% opacity | Background glow |
| — | `#01434B` | Background base fill |
| Semantic/support/support-aqua[6] | `#CFEBEE` | Aqua guide cards; also Sign In link color (interactive-hover-background) |
| Semantic/background-default | `#FFFFFF` | White guide cards, Get Started button bg, chrome bg |
| Semantic/border-light | `#D9D9D9` | Card + cover borders |
| Semantic/shadow | `rgba(0,0,0,0.12)` | Card drop shadows |
| Semantic/text-primary | `#212121` | Card titles |
| Semantic/text-secondary | `#616161` | Card authors |
| Semantic/text-primary-contrast | `#F8F8F8` | Headline |
| Semantic/text-secondary-contrast | `#CFCFCF` | Subhead, "Already have an account?" |
| Semantic/interactive-primary | `#006C7A` | Get Started button label (+ arrow icon) |
| Semantic/interactive-hover-background | `#CFEBEE` | "Sign In" link text |
| — | `#E8EAED` | Chrome URL pill |
| — | `#202124` | Chrome URL text |
| — | `#CCCCCC` (`#ccc`) | Chrome bottom hairline shadow |

## Radii / Borders / Shadows

- Guide card radius: 12px (--small); cover radius: 8px (--smaller); button radius: 16px (--default); chrome pill radius: 30px
- Card border: 1px solid #D9D9D9
- Card shadow (Elevation/1): 0 2px 8px 0 rgba(0,0,0,0.12) (reference code renders as drop-shadow 0px 2px 4px)
- Chrome top bar: shadow 0px 0.4px 0px 0px #CCC

## Typography

| Node | Style | Family | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|---|
| Headline | display/h5 | General Sans Medium | 500 (Medium) | 30px (1.875rem) | 1.2 | 0.25px | #F8F8F8 |
| Subhead | default/body | Open Sans | 400 | 16px (1rem) | 1.5 | 0.25px | #CFCFCF |
| Card title | — | Open Sans | 500 (Medium) | 16px | 1.2 | 0.25px | #212121 |
| Card author | default/caption | Open Sans | 400 | 14px (0.875rem) | 1.5 | 0.5px | #616161 |
| Button label | Button/label-default | Open Sans SemiBold | 600 | 16px | normal (100%) | 0.25px | #006C7A |
| "Already have an account?" | default/body-small | Open Sans | 400 | 14px | 1.5 | 0.25px | #CFCFCF |
| "Sign In" link | Link/Default/link-body-small | Open Sans | 400 | 14px | 1.5 | 0.25px | #CFEBEE, underline (decoration thickness 6%) |
| Chrome URL | — | SF Pro Regular | 400 | 18px | normal | — | #202124 |

## Progress bar / header / footer state

- **No progress bar on this screen** (welcome screen — no survey progress, no back arrow, no Next button).
- Header: white browser chrome pinned to top (absolute): iOS status bar (h 38, black glyphs: 9:41, signal, wifi, battery) + Chrome top bar (h 55) with grey `#E8EAED` URL pill, lock icon + "supersummary.com" centered, share icon right.
- Footer: full-width white "Get Started" primary-contrast button (h 48) + "Already have an account? Sign In" row; padding 16px top / 24px bottom / 16px sides.

## Component notes (from Figma component docs)

- `<Button>` variant used: Size=Default, Type=Primary, State=Default, Style=Contrast — "Highest emphasis... Contrast token palette — for dark/brand surfaces". A11y: role=button, Enter/Space.
- `<Link>` variant used: Size=Small, Type=Default, State=Default, Style=Underline — "Brand link colour — use for UI navigation. Resting. Underline visible."
- End icon: `arrow_forward` icon component (Style=Round).

## Downloaded assets (design-specs/assets/01-welcome/)

| File | Used at |
|---|---|
| cover-proof-of-heaven.png | Guide cards "Proof of Heaven" (both rows), 64x64 |
| cover-the-great-gatsby.png | Guide card "The Great Gatsby", 64x64 |
| cover-west-with-giraffes.png | Guide cards "West with Giraffes" (both rows), 64x64 |
| cover-the-seven-year-slip.png | Guide card "The Seven Year Slip", 64x64 |
| text-highlight-vector-1.svg | Highlight decoration, inset 32.45% 0 21.59% 0 of 243.11x32.853 box |
| text-highlight-vector-2.svg | Highlight decoration, inset 59.44% 5% 0 7.64% |
| text-highlight-vector-3.svg | Highlight decoration, inset 0 7.14% 51.33% 4.95% |
| icon-arrow-forward.svg | Get Started button end icon, 24x24 box, glyph inset 18.36%/17.54% |
| chrome-share.svg | Chrome share icon, 14.538x19.385 in 21x21 box |
| chrome-lock.svg | Chrome lock icon, 7.672x11.508 in 16x16 box |
| statusbar-battery-outline.svg | Status bar battery outline, 22x11.333 |
| statusbar-battery-cap.svg | Status bar battery cap, 1.328x4 |
| statusbar-battery-fill.svg | Status bar battery fill, 18x7.333 |
| statusbar-wifi.svg | Status bar wifi, 15.272x10.966 |
| statusbar-mobile-signal.svg | Status bar signal, 17x10.667 |
| statusbar-time-941.svg | Status bar "9:41", 28.426x11.089 |

## Raw reference code (get_design_context)

```tsx
const imgRectangle = "https://www.figma.com/api/mcp/asset/96c9c087-5151-4ab2-98b1-c7ba032a08eb.svg";
const imgCombinedShape = "https://www.figma.com/api/mcp/asset/7f593f90-ad88-4840-a213-c15e99c63445.svg";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/16d525c6-87bd-4137-9e15-c4b540ed91fd.svg";
const imgWifi = "https://www.figma.com/api/mcp/asset/a4fe5bdf-2fd7-4d35-b50c-2dfa8386826b.svg";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/beb8eeb9-562e-40ef-95ae-ac61d9b985b0.svg";
const img941 = "https://www.figma.com/api/mcp/asset/6dde8085-42de-4389-b613-ac35e0dc59f5.svg";
const imgGuideCoverImage = "https://www.figma.com/api/mcp/asset/f2c1a126-c462-48f1-add0-b339b3744eb8.png";
const imgGuideCoverImage1 = "https://www.figma.com/api/mcp/asset/c97c30ab-ba20-4fe1-992d-d000e0f5571f.png";
const imgGuideCoverImage2 = "https://www.figma.com/api/mcp/asset/e4d85071-0f39-4f0c-93d2-4d21370a261f.png";
const imgGuideCoverImage3 = "https://www.figma.com/api/mcp/asset/710524a6-2128-492e-b383-78c3cd73f782.png";
const imgVector = "https://www.figma.com/api/mcp/asset/812b4765-42db-4859-b25e-28c67d795351.svg";
const imgVector1 = "https://www.figma.com/api/mcp/asset/b760feb3-5bd2-4bd7-bc5e-b4e09c390c36.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/d7503375-e54d-479e-83fa-986efd3056c7.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/1cdb6b0a-5e42-4c4d-88da-de609e1bbb6b.svg";
const imgShare = "https://www.figma.com/api/mcp/asset/34ea7aaf-939d-4811-b0c0-09294907e19c.svg";
const imgLock = "https://www.figma.com/api/mcp/asset/9ab91344-fb7e-4496-98be-6ccca1254f52.svg";

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

export default function IPhone1314254() {
  return (
    <div className="content-stretch flex flex-col gap-[var(--12,12px)] items-start relative size-full" data-node-id="7814:29856" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.699999988079071'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(1.1772e-14 43.05 -61.46 -1.8957e-13 212 278.5)'><stop stop-color='rgba(39,146,158,1)' offset='0.15'/><stop stop-color='rgba(20,107,117,1)' offset='0.34565'/><stop stop-color='rgba(11,87,96,1)' offset='0.44348'/><stop stop-color='rgba(1,67,75,1)' offset='0.5413'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(1, 67, 75) 0%, rgb(1, 67, 75) 100%)" }} data-name="iPhone 13 & 14 - 254">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--16,16px)] items-center justify-end min-h-px relative w-full" data-node-id="7814:29857">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px pt-[144px] relative w-full" data-node-id="7814:29858">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="7814:29859">
            <div className="col-1 content-stretch flex gap-[var(--16,16px)] items-center ml-[184.5px] mt-[104px] relative row-1" data-node-id="7814:29860" data-name="guides">
              <div className="bg-[var(--semantic\/support\/support-aqua\[6\],#cfebee)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch drop-shadow-[0px_2px_4px_var(--semantic\/shadow,rgba(0,0,0,0.12))] flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0" data-node-id="7814:29861" data-name="Guide Card">
                <div className="relative rounded-[var(--smaller,8px)] shrink-0 size-[64px]" data-node-id="7814:29862" data-name="Guide cover image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--smaller,8px)]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGuideCoverImage} />
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch" data-node-id="7814:29863">
                  <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start leading-[0] relative shrink-0 w-[157px]">
                    <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29864" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.2]">Proof of Heaven: A Neurosurgeo…</p>
                    </div>
                    <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29865" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.5]">Eben Alexander</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--semantic\/support\/support-aqua\[6\],#cfebee)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch drop-shadow-[0px_2px_4px_var(--semantic\/shadow,rgba(0,0,0,0.12))] flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0 w-[294px]" data-node-id="7814:29866" data-name="Guide Card">
                <div className="relative shrink-0 size-[64px]" data-node-id="7814:29867" data-name="Guide cover image">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" height="64" src={imgGuideCoverImage1} width="64" />
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="7814:29869">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start justify-center leading-[0] min-w-px relative">
                    <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29870" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.2]">The Great Gatsby</p>
                    </div>
                    <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29871" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.5]">F. Scott Fitzgerals</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--semantic\/background-default,white)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0 w-[294px]" data-node-id="7814:29872" data-name="Guide Card">
                <div className="relative rounded-[var(--smaller,8px)] shrink-0 size-[64px]" data-node-id="7814:29873" data-name="Guide cover image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--smaller,8px)]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGuideCoverImage2} />
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="7814:29874">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start justify-center leading-[0] min-w-px relative">
                    <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29875" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.2]">West with Giraffes</p>
                    </div>
                    <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29876" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.5]">Lynda Rutledge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 content-stretch flex gap-[var(--16,16px)] items-center ml-0 mt-0 relative row-1" data-node-id="7814:29877" data-name="guides">
              <div className="bg-[var(--semantic\/background-default,white)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch drop-shadow-[0px_2px_4px_var(--semantic\/shadow,rgba(0,0,0,0.12))] flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0 w-[294px]" data-node-id="7814:29878" data-name="Guide Card">
                <div className="relative rounded-[var(--smaller,8px)] shrink-0 size-[64px]" data-node-id="7814:29879" data-name="Guide cover image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--smaller,8px)]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGuideCoverImage} />
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="7814:29880">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start leading-[0] min-w-px relative">
                    <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29881" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.2]">Proof of Heaven: A Neurosurgeo…</p>
                    </div>
                    <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29882" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.5]">Eben Alexander</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--semantic\/support\/support-aqua\[6\],#cfebee)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch drop-shadow-[0px_2px_4px_var(--semantic\/shadow,rgba(0,0,0,0.12))] flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0" data-node-id="7814:29883" data-name="Guide Card">
                <div className="border border-[var(--semantic\/border-light,#d9d9d9)] border-solid relative rounded-[var(--smaller,8px)] shrink-0 size-[64px]" data-node-id="7814:29884" data-name="Guide cover image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--smaller,8px)]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGuideCoverImage3} />
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch" data-node-id="7814:29885">
                  <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start justify-center leading-[0] relative shrink-0">
                    <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29886" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.2]">The Seven Year Slip</p>
                    </div>
                    <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29887" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.5]">Ashley Poston</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--semantic\/support\/support-aqua\[6\],#cfebee)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch drop-shadow-[0px_2px_4px_var(--semantic\/shadow,rgba(0,0,0,0.12))] flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0 w-[294px]" data-node-id="7814:29888" data-name="Guide Card">
                <div className="border border-[var(--semantic\/border-light,#d9d9d9)] border-solid relative rounded-[var(--smaller,8px)] shrink-0 size-[64px]" data-node-id="7814:29889" data-name="Guide cover image">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--smaller,8px)]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGuideCoverImage2} />
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="7814:29890">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start justify-center leading-[0] min-w-px relative">
                    <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29891" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.2]">West with Giraffes</p>
                    </div>
                    <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29892" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.5]">Lynda Rutledge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--12,12px)] items-start pb-[var(--12,12px)] pt-[var(--0,0px)] px-[16px] relative shrink-0 w-[390px]" data-node-id="7814:29893">
          <div className="absolute flex h-[36.926px] items-center justify-center left-[77px] top-[3px] w-[243.767px]" data-node-id="7814:29894">
            <div className="flex-none rotate-[0.96deg] skew-x-[-0.24deg]">
              <div className="h-[32.853px] relative w-[243.11px]" data-name="Supporting element/Text Highlight Small">
                <div className="absolute inset-[32.45%_0_21.59%_0]" data-node-id="I7814:29894;1587:1243" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                </div>
                <div className="absolute inset-[59.44%_5%_0_7.64%]" data-node-id="I7814:29894;1587:1244" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[0_7.14%_51.33%_4.95%]" data-node-id="I7814:29894;1587:1245" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[1.2] min-w-full not-italic relative shrink-0 text-[color:var(--semantic\/text-primary-contrast,#f8f8f8)] text-[length:var(--font-size\/1\,875rem,30px)] tracking-[0.25px] w-[min-content]" data-node-id="7814:29896">
            Your next great read starts on SuperSummary
          </p>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-full relative shrink-0 text-[color:var(--semantic\/text-secondary-contrast,#cfcfcf)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-[min-content]" data-node-id="7814:29897" style={{ fontVariationSettings: '"wdth" 100' }}>{`Answer a few quick questions, and we'll show you around based on what you're reading.`}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--12,12px)] items-start justify-center pb-[var(--24,24px)] pt-[var(--16,16px)] px-[16px] relative shrink-0 w-[390px]" data-node-id="7814:29898" data-name="Frame">
        <div className="bg-[var(--semantic\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[48px] items-center justify-center overflow-clip px-[var(--16,16px)] py-[var(--0,0px)] relative rounded-[var(--default,16px)] shrink-0 w-full" data-node-id="7814:29899" data-name="<Button>">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightsemibold,600)] leading-[normal] relative shrink-0 text-[color:var(--semantic\/interactive-primary,#006c7a)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:29899;1515:2848" style={{ fontVariationSettings: '"wdth" 100' }}>
            Get Started
          </p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I7814:29899;1515:2849" data-name="End Icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I7814:29899;1515:2850" data-name="Style=Round">
              <div className="absolute inset-[18.36%_17.54%]" data-node-id="I7814:29899;1515:2850;2402:73679" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative shrink-0" data-node-id="7814:29900" data-name="Sign In">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/text-secondary-contrast,#cfcfcf)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.25px] whitespace-nowrap" data-node-id="7814:29901" style={{ fontVariationSettings: '"wdth" 100' }}>
            Already have an account?
          </p>
          <div className="content-stretch flex gap-[var(--4,4px)] items-center relative shrink-0" data-node-id="7814:29902" data-name="<Link>">
            <p className="[word-break:break-word] decoration-[6%] decoration-solid font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--semantic\/interactive-hover-background,#cfebee)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.25px] underline whitespace-nowrap" data-node-id="I7814:29902;1514:8108" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sign In
            </p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-start left-1/2 top-0 w-[390px]" data-node-id="7814:29903" data-name="chrome">
        <SystemStatusBar className="h-[38px] overflow-clip relative shrink-0 w-[390px]" />
        <div className="h-[55px] relative shrink-0 w-[390px]" data-node-id="7814:29905" data-name="Chrome - Top">
          <div className="absolute bg-white inset-[0_0_1.82%_0] shadow-[0px_0.4px_0px_0px_#ccc]" data-node-id="I7814:29905;726:1322" data-name="bg" />
          <div className="absolute bg-[#e8eaed] bottom-[10px] h-[36px] left-[11px] right-[10px] rounded-[30px]" data-node-id="I7814:29905;726:1323" data-name="chrome-bar-input" />
          <div className="absolute overflow-clip right-[24px] size-[21px] top-[16px]" data-node-id="I7814:29905;732:2974" data-name=".icons/chrome/share">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.385px] left-1/2 top-1/2 w-[14.538px]" data-node-id="I7814:29905;732:2974;732:2858" data-name="Share">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex gap-[7px] items-center justify-center left-[calc(50%+0.41px)] top-[16px]" data-node-id="I7814:29905;726:1325">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I7814:29905;732:2892" data-name=".icons/chrome/lock">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.508px] left-1/2 top-[calc(50%+0.64px)] w-[7.672px]" data-node-id="I7814:29905;732:2892;732:2890" data-name="Lock">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular'] font-normal leading-[normal] relative shrink-0 text-[#202124] text-[18px] whitespace-nowrap" data-node-id="I7814:29905;726:1327" style={{ fontVariationSettings: '"wdth" 100' }}>
              supersummary.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```
