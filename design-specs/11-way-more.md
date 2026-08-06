# 11-way-more — "Way more than a summary"

Figma node: `7814:30162` (iPhone 13 & 14 - 251), file `2T3j73CQ4BKfuuXPnb0qFi`. Frame 390x844.
Screenshot: `design-specs/screens/11-way-more.png`

## Exact copy (verbatim)

- URL pill: `supersummary.com`
- Heading (2 lines, explicit break): `Way more than ` + `<br>` + `a summary`
- Subheading: `Your all-in-one reading companion`
- Feature card 1 title: `Refresh your memory ` (note trailing space in design)
- Feature card 1 body: `Quizzes on every Study Guide help you check what stuck, in minutes.`
- Feature card 2 title: `Spark strong discussions`
- Feature card 2 body: `Ready-to-use questions for every theme, ready to share with your group.`
- Feature card 3 title: `Listen on the go`
- Feature card 3 body: `Audio Study Guides keep you up to speed between meetings.`
- CTA button: `Next` (with arrow_forward end icon)

Micro-copy inside card illustrations (tiny mock UI, verbatim):
- Card 1 (chatbot mock): `How does Nick’s narration affect views on the American Dream?` / answer A: `A` + `He's both insider and outsider, ` + `adding moral ambiguity.` / answer B: `B` + `His Midwest values contrast ` + `East Coast excess.`
- Card 2 (DQG mock) badges: `Post-reading Questions`, `Intermediate Level`, `For Book Club Members`, ` About themes` (leading space in design); button: `Generate Discussion Questions`
- Card 3 (audio mock): badge `Audio Study Guide`; `Normal People` / `Sally Rooney`; play_circle icon + progress bar

## Layout structure

```
Frame 390x844, column, gap 12, items-start
├── chrome (bg white, w 390, column)
│   ├── SystemStatusBar h 38 (9:41 / signal / wifi / battery)
│   ├── Chrome - Top h 55 (white + hairline 0 0.4px #ccc; pill #e8eaed L11/R10/B10 h36 r30; lock+"supersummary.com" SF Pro 18 #202124; share icon right 24 top 16)
│   └── ProgressBar (step=4) h 36: pl 8, pr 16, gap 4; arrow_back <Icon> 24x24; track flex-1 bg #ededed; fill h 4 w 168px bg #006c7a (≈49.7% of 338px track)
├── main (flex-1, column, gap 24, items-center justify-center, pb 88, w full)
│   ├── heading block — column, gap 16, px 24, w full
│   │   ├── Supporting element/Text Highlight Medium — absolute left 53, top 6.5, 185x35, rotate 180deg, 5 vector strokes (decorative, sits behind/around "Way more")
│   │   ├── H1 "Way more than \n a summary" — General Sans Medium (display/h4), 36px, lh 1.2, ls 0, #212121, centered
│   │   └── Sub "Your all-in-one reading companion" — Open Sans Regular 400 (default/body-large), 20px, lh 1.5, ls 0.5, #616161, centered
│   └── Features — column, gap 16, padding 24, w 390, items-center, overflow-clip
│       └── card stack — column, gap 8, w full
│           └── 3x <Card>: bg white (Semantic/background-default), border 1px #d9d9d9 (Semantic/border-light), radius 8 (--8), padding 12, column gap 4, overflow-clip, w full
│               └── content row — row, gap 12, h 96, items-start
│                   ├── illustration tile — w 112, h full (96), radius 8 (--smaller), overflow-clip (per-card bg below)
│                   └── text col — flex-1, column, gap 2 (card 3: gap 4), Open Sans
│                       ├── title 16px 400 lh 1.5 ls 0.25 #212121
│                       └── body 14px 400 lh 1.5 ls 0.25 #616161
└── footer — absolute bottom 0, centered, bg white, w 390, column, gap 12, pt 16, pb 24, px 16
    └── <Button> Primary — h 48, w full, bg #006c7a, radius 16, gap 4, px 16
        ├── "Next" Open Sans SemiBold 600 16px ls 0.25 #f8f8f8
        └── arrow_forward 24x24 white
```

## Background

Frame bg: radial gradient overlay (opacity 0.7) over flat #f8f8f8.
- Radial: center ~(211.5, 284), stops `rgba(246,229,231,1)` (soft pink) at 0.15 → `rgba(248,248,248,1)` at 0.9, gradientTransform matrix(0.050001 42.5 -26.512 0.031192 211.5 284)
- Base: flat #f8f8f8

## Card illustration tiles (112x96, radius 8)

### Card 1 — Content-feature-chatbot ("Refresh your memory")
- Tile bg: #90d0d7 (support/acqua/support-acqua-500)
- Inner art group 129x80.447 at left -11 / top 7.5 (bleeds left):
  - White quiz card (bg white, radius 4.178, padding 4.178, column gap 4.178), centered at calc(50%+3.13px)/calc(50%+0.21px):
    - Question text: Open Sans SemiBold 600, 5.223px, color rgba(17,17,17,0.65)
    - Answer A row (rotated -2.83deg): pill bg #e8f5e2 (support-olive-600) border 0.261px #71a758 (support-olive-200), h 16.19, w 82.518, radius 2.089; avatar square 9.923 radius 2.611 bg #8bcd6c (support-olive-300); letter "A" Open Sans Bold 5.223px white ls -0.2611px; answer text Open Sans 500 4.178px rgba(17,17,17,0.65)
    - Answer B row: pill bg #f8f8f8 (background-paper) h 16.19 w 82.518 radius 2.089; avatar 9.923 radius 2.611 bg #cfebee (support-acqua-600); letter "B" Open Sans Bold 5.223px #1a7b87 (brand-main); answer text 4.178px rgba(17,17,17,0.65)
  - 18 hand-drawn doodle SVG groups scattered around the card (chatbot-doodle-01..18.svg), several with rotations (-0.37deg, 12.27deg, -41.8deg, -2deg, -22.57deg)
- Bottom fade inside tile: h 24, w 378 (centered), gradient to bottom from rgba(102,193,203,0) to #90d0d7 at 54.984%

### Card 2 — Content-feature-dqg ("Spark strong discussions")
- Tile bg: #b1c8e3 (Semantic/support/support-indigo[5]), content centered
- White mini-card: 101.998x39.587, radius 2.853, drop-shadow 0px 3.566px 5.706px #2e6ab0 (support-indigo[3])
  - Badge chips wrap row (gap 2.853, w 94.866): 4x <Badge> Default — bg #ededed (badge/badge-default-background), radius 35.664, px 2.853 py 1.427; label Open Sans 400, 3.566px, ls 0.1783px, #616161
  - Mini button: bg rgba(0,108,122,0.9) (button/primary/primary-body-default), h 11.412, w full, radius 4.28, px 4.28; label "Generate Discussion Questions" Open Sans 500, 3.566px, ls 0.1783px, white
  - Sparkle png (image 130): 6.102x6.102 rotated -27.36deg, positioned at left 85.95 / top 26.75 (8.224 box)

### Card 3 — Content-feature-audio ("Listen on the go")
- Tile bg: #f9d4ba (Semantic/support/support-orange[5]), content centered
- White mini-card: radius 4.347, padding 4.347, column gap 4.347, drop-shadow 0px 5.434px 8.694px #f2a975 (support-orange[4])
  - <Badge> "Audio Study Guide": bg #ededed (support-gray[6]), radius 54.335, px 4.347 py 2.173; label Open Sans SemiBold (weight 500 var), 2.36px, ls 0.1358px, #616161 (support-gray[2])
  - Book row (gap 4.347): cover img 20.104x19.343 radius 2.173 (cover-normal-people.png); text col gap 0.543 — "Normal People" Open Sans SemiBold 7.607px #616161, "Sally Rooney" Open Sans Regular 6.52px #616161
  - Player row (gap 2.173): play_circle icon 10.324x10.324 (glyph inset 8.33%); progress track h 2.717 w 71.723 radius 54.335 bg #fceadd (support-orange[6]) offset ml 1.09; fill h 2.717 w 36.405 radius 54.335 bg #ef9453 (support-orange[3]) → ~50% played
```

## Colors

| Token | Hex |
|---|---|
| Semantic/text-primary | #212121 |
| Semantic/text-secondary | #616161 |
| Semantic/text-primary-contrast | #f8f8f8 |
| Semantic/background-default | #ffffff |
| Semantic/border-light | #d9d9d9 |
| Semantic/interactive-primary | #006c7a |
| Semantic/background-offpaper (progress track) | #ededed |
| Semantic/support/support-aqua[2] (progress fill) | #006c7a |
| support/acqua/support-acqua-500 (card 1 tile) | #90d0d7 |
| support/acqua/support-acqua-600 | #cfebee |
| support/olive/support-olive-600 | #e8f5e2 |
| support/olive/support-olive-300 | #8bcd6c |
| support/olive/support-olive-200 (border) | #71a758 |
| brand/brand-main | #1a7b87 |
| Semantic/support/support-indigo[5] (card 2 tile) | #b1c8e3 |
| Semantic/support/support-indigo[3] (card 2 shadow) | #2e6ab0 |
| badge/badge-default-background | #ededed |
| button/primary/primary-body-default | rgba(0,108,122,0.9) |
| Semantic/support/support-orange[5] (card 3 tile) | #f9d4ba |
| Semantic/support/support-orange[4] (card 3 shadow) | #f2a975 |
| Semantic/support/support-orange[6] (audio track) | #fceadd |
| Semantic/support/support-orange[3] (audio fill) | #ef9453 |
| Semantic/support/support-gray[6] | #ededed |
| Semantic/support/support-gray[2] | #616161 |
| text/text-secondary (mock UI) | rgba(17,17,17,0.65) |
| background/background-paper | #f8f8f8 |
| Radial bg tint (pink) | rgb(246,229,231) |
| Chrome pill | #e8eaed; URL text #202124; hairline #ccc |

## Typography

| Node | Family | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| H1 (7814:30176) | General Sans (display/h4) | Medium 500 | 36px | 1.2 | 0 | #212121 |
| Subheading (7814:30177) | Open Sans (default/body-large) | Regular 400 | 20px | 1.5 | 0.5px | #616161 |
| Card title | Open Sans (default/body) | Regular 400 | 16px | 1.5 | 0.25px | #212121 |
| Card body | Open Sans (default/body-small) | Regular 400 | 14px | 1.5 | 0.25px | #616161 |
| Button label | Open Sans (Button/label-default) | SemiBold 600 | 16px | 100% | 0.25px | #f8f8f8 |
| Chrome URL | SF Pro | Regular 400 | 18px | normal | — | #202124 |
(mock-UI micro type sizes documented in the tile sections above)

## Progress bar state

Same ProgressBar component as screen 10 (`step="4"`): single continuous bar, track #ededed flex width (~338px), fill 168px (~49.7%) #006c7a, h 4. On white background bar row h 36 (pl 8 / pr 16 / gap 4 with 24px back-arrow icon).

## Header / footer composition

- iOS status bar 38px + browser chrome 55px with "supersummary.com" pill + lock + share (identical composition to other screens).
- Back arrow + progress row 36px inside the white chrome block.
- Footer: absolute bottom, white bg, pt 16 / pb 24 / px 16, full-width Primary "Next" button h 48, radius 16, #006c7a, label + arrow_forward. Main content has pb 88 to clear it.

## Downloaded assets (design-specs/assets/11-way-more/)

| File | Used for |
|---|---|
| statusbar-battery-outline/-cap/-fill.svg, statusbar-wifi.svg, statusbar-mobile-signal.svg, statusbar-time-941.svg | iOS status bar |
| chrome-share.svg / chrome-lock.svg | Browser chrome |
| arrow-back.svg | Progress row back arrow |
| highlight-medium-vector-1..5.svg | "Text Highlight Medium" decorative strokes behind heading (185x35, rotate 180) |
| chatbot-doodle-01..18.svg | Card 1 scattered doodles (imgGroup..imgGroup17 in order) |
| sparkle-image-130.png | Card 2 sparkle on mini button (6.102px, rotate -27.36deg) |
| cover-normal-people.png | Card 3 book cover (20.104x19.343) |
| play-circle.svg | Card 3 play_circle icon glyph |
| arrow-forward.svg | Next button end icon |

## Raw reference code (get_design_context)

```tsx
const imgVector = "https://www.figma.com/api/mcp/asset/0efc5ac7-1618-4603-a4de-0eaa8308f092.svg";
const imgRectangle = "https://www.figma.com/api/mcp/asset/2a929e46-110c-4b5e-8e1a-ec0c457295e7.svg";
const imgCombinedShape = "https://www.figma.com/api/mcp/asset/dd81eb19-6a79-4572-afc1-3a3d9f17cdf0.svg";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/178b9663-8a24-4089-b227-6a6df749d33e.svg";
const imgWifi = "https://www.figma.com/api/mcp/asset/f90af4a8-ed27-4864-9fee-cf0c0df7e353.svg";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/316a837b-16d1-4ea1-9f5c-909acc5ca830.svg";
const img941 = "https://www.figma.com/api/mcp/asset/ad711f29-1d26-4dd3-8482-e755c5851c50.svg";
const imgImage130 = "https://www.figma.com/api/mcp/asset/c998cb52-67fd-4055-8ecd-366268183d20.png";
const imgScreenshot20250626At1804211 = "https://www.figma.com/api/mcp/asset/c9b3d294-1823-4d9b-afb9-4b1bf9955d98.png";
const imgVector1 = "https://www.figma.com/api/mcp/asset/ded4ad1b-c046-466d-a4ae-c18eabf4f9d9.svg";
const imgShare = "https://www.figma.com/api/mcp/asset/54e7c46d-1fae-49cc-a15c-ff90dc13c39f.svg";
const imgLock = "https://www.figma.com/api/mcp/asset/dc43a1b8-8b03-4d78-a4bd-390465b2f555.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/06ba2e01-d182-4aa2-84c9-9bbd12263eb1.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/84c6bb23-edb3-4309-aa38-e8eda3139883.svg";
const imgVector4 = "https://www.figma.com/api/mcp/asset/29059396-5571-4559-9fc6-cb4b5fd1ec77.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/05fb7595-e11d-4382-8007-9adc3cc8b8a7.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/381c2d02-b3f8-40e8-9c50-dcb982f1e636.svg";
const imgGroup = "https://www.figma.com/api/mcp/asset/05fa30be-271a-494a-b92c-83317cb85533.svg";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/0df4cdd7-f61d-465b-be32-5e142105296f.svg";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/54e8ac86-76dd-426d-83c9-ea906a36718d.svg";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/e5961ba8-82c1-4bea-9062-86c2971a5802.svg";
const imgGroup4 = "https://www.figma.com/api/mcp/asset/7649cdb9-87a7-435a-be7f-5b7cad824dbc.svg";
const imgGroup5 = "https://www.figma.com/api/mcp/asset/2631ceda-9e16-47b3-9293-a97b559ebd5f.svg";
const imgGroup6 = "https://www.figma.com/api/mcp/asset/a875f37e-4cdd-4720-b1a2-c3a796aef113.svg";
const imgGroup7 = "https://www.figma.com/api/mcp/asset/e72d9030-a362-4085-a244-f2063ab016fe.svg";
const imgGroup8 = "https://www.figma.com/api/mcp/asset/9b996b37-ca85-47e2-8849-ed664a799798.svg";
const imgGroup9 = "https://www.figma.com/api/mcp/asset/e838b753-7d06-4d2e-acff-fdf4e8c09a42.svg";
const imgGroup10 = "https://www.figma.com/api/mcp/asset/faa7afd6-b98b-4f8d-8a0f-7b638fe740cb.svg";
const imgGroup11 = "https://www.figma.com/api/mcp/asset/71517c4d-d27f-49c2-9f5a-364e6f06fe55.svg";
const imgGroup12 = "https://www.figma.com/api/mcp/asset/b5cfbae2-b604-452d-b078-06ab765d147d.svg";
const imgGroup13 = "https://www.figma.com/api/mcp/asset/8d066acf-15e8-4b01-ada2-26275d44403c.svg";
const imgGroup14 = "https://www.figma.com/api/mcp/asset/e5a2d019-0039-4e93-843e-32f84ddae326.svg";
const imgGroup15 = "https://www.figma.com/api/mcp/asset/34a6afd3-02bf-4956-ba73-89933388297d.svg";
const imgGroup16 = "https://www.figma.com/api/mcp/asset/e1445f00-fd3c-4cc1-aaee-9be11e3f6cfb.svg";
const imgGroup17 = "https://www.figma.com/api/mcp/asset/36dad746-11dc-4b9d-84de-5da16c8101a1.svg";
const imgVector7 = "https://www.figma.com/api/mcp/asset/14491c6b-14e3-49cb-9974-222dab38c5c1.svg";

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

export default function IPhone1314251() {
  return (
    <div className="content-stretch flex flex-col gap-[var(--12,12px)] items-start relative size-full" data-node-id="7814:30162" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.699999988079071'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0.050001 42.5 -26.512 0.031192 211.5 284)'><stop stop-color='rgba(246,229,231,1)' offset='0.15'/><stop stop-color='rgba(248,248,248,1)' offset='0.9'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(248, 248, 248) 0%, rgb(248, 248, 248) 100%)" }} data-name="iPhone 13 & 14 - 251">
      <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col gap-[var(--12,12px)] items-start justify-center left-1/2 pb-[var(--24,24px)] pt-[var(--16,16px)] px-[16px] w-[390px]" data-node-id="7814:30163" data-name="Frame">
        <div className="bg-[var(--semantic\/interactive-primary,#006c7a)] content-stretch flex gap-[var(--4,4px)] h-[48px] items-center justify-center overflow-clip px-[var(--16,16px)] py-[var(--0,0px)] relative rounded-[var(--default,16px)] shrink-0 w-full" data-node-id="7814:30164" data-name="<Button>">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightsemibold,600)] leading-[normal] relative shrink-0 text-[color:var(--semantic\/text-primary-contrast,#f8f8f8)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7814:30164;141:2420" style={{ fontVariationSettings: '"wdth" 100' }}>
            Next
          </p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I7814:30164;141:2519" data-name="End Icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I7814:30164;141:2421" data-name="Style=Round">
              <div className="absolute inset-[18.36%_17.54%]" data-node-id="I7814:30164;141:2421;2402:73679" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="7814:30165" data-name="chrome">
        <SystemStatusBar className="h-[38px] overflow-clip relative shrink-0 w-[390px]" />
        <div className="h-[55px] relative shrink-0 w-[390px]" data-node-id="7814:30167" data-name="Chrome - Top">
          <div className="absolute bg-white inset-[0_0_1.82%_0] shadow-[0px_0.4px_0px_0px_#ccc]" data-node-id="I7814:30167;726:1322" data-name="bg" />
          <div className="absolute bg-[#e8eaed] bottom-[10px] h-[36px] left-[11px] right-[10px] rounded-[30px]" data-node-id="I7814:30167;726:1323" data-name="chrome-bar-input" />
          <div className="absolute overflow-clip right-[24px] size-[21px] top-[16px]" data-node-id="I7814:30167;732:2974" data-name=".icons/chrome/share">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.385px] left-1/2 top-1/2 w-[14.538px]" data-node-id="I7814:30167;732:2974;732:2858" data-name="Share">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex gap-[7px] items-center justify-center left-[calc(50%+0.41px)] top-[16px]" data-node-id="I7814:30167;726:1325">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I7814:30167;732:2892" data-name=".icons/chrome/lock">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.508px] left-1/2 top-[calc(50%+0.64px)] w-[7.672px]" data-node-id="I7814:30167;732:2892;732:2890" data-name="Lock">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular'] font-normal leading-[normal] relative shrink-0 text-[#202124] text-[18px] whitespace-nowrap" data-node-id="I7814:30167;726:1327" style={{ fontVariationSettings: '"wdth" 100' }}>
              supersummary.com
            </p>
          </div>
        </div>
        <ProgressBar className="bg-[var(--semantic\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative shrink-0 w-[390px]" />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px pb-[88px] pt-[var(--0,0px)] relative w-full" data-node-id="7814:30169">
        <div className="content-stretch flex flex-col gap-[var(--16,16px)] items-start px-[var(--24,24px)] relative shrink-0 w-full" data-node-id="7814:30174">
          <div className="absolute flex h-[35px] items-center justify-center left-[53px] top-[6.5px] w-[185px]" data-node-id="7814:30175">
            <div className="flex-none rotate-180">
              <div className="h-[35px] relative w-[185px]" data-name="Supporting element/Text Highlight Medium">
                <div className="absolute inset-[0_7.5%_64.68%_2.52%]" data-node-id="I7814:30175;1587:1229" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[21.68%_0_50.05%_4.39%]" data-node-id="I7814:30175;1587:1230" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
                <div className="absolute inset-[41.18%_1.53%_28.12%_3.16%]" data-node-id="I7814:30175;1587:1231" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                </div>
                <div className="absolute inset-[57.47%_6.24%_14.9%_0.1%]" data-node-id="I7814:30175;1587:1232" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                </div>
                <div className="absolute inset-[73.91%_7.11%_0_0]" data-node-id="I7814:30175;1587:1233" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[1.2] min-w-full not-italic relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/2\,25rem,36px)] text-center w-[min-content] whitespace-pre-wrap" data-node-id="7814:30176">
            {`Way more than `}
            <br aria-hidden />a summary
          </p>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-full relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1\,25rem,20px)] text-center tracking-[0.5px] w-[min-content]" data-node-id="7814:30177" style={{ fontVariationSettings: '"wdth" 100' }}>
            Your all-in-one reading companion
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--16,16px)] items-center justify-center overflow-clip p-[var(--24,24px)] relative shrink-0 w-[390px]" data-node-id="7814:30179" data-name="Features">
          <div className="content-stretch flex flex-col gap-[var(--8,8px)] items-start relative shrink-0 w-full" data-node-id="7814:30180">
            <div className="bg-[var(--semantic\/background-default,white)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch flex flex-col gap-[var(--4,4px)] items-start overflow-clip p-[var(--12,12px)] relative rounded-[var(--8,8px)] shrink-0 w-full" data-node-id="7814:30181" data-name="<Card>">
              <div className="content-stretch flex gap-[var(--12,12px)] h-[96px] items-start relative shrink-0 w-full" data-node-id="7814:30182" data-name="Content-feature-chatbot">
                <div className="bg-[var(--support\/acqua\/support-acqua-500,#90d0d7)] h-full overflow-clip relative rounded-[var(--smaller,8px)] shrink-0 w-[112px]" data-node-id="7814:30183">
                  <div className="absolute contents left-[-11px] top-[7.5px]" data-node-id="7814:30184">
                    <div className="absolute h-[80.447px] left-[-11px] top-[7.5px] w-[129px]" data-node-id="7814:30185">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[var(--background\/background-default,white)] content-stretch flex flex-col gap-[4.178px] items-start left-[calc(50%+3.13px)] p-[4.178px] rounded-[4.178px] top-[calc(50%+0.21px)]" data-node-id="7814:30186">
                        <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightsemibold,600)] leading-[normal] min-w-full relative shrink-0 text-[5.223px] text-[color:var(--text\/text-secondary,rgba(17,17,17,0.65))] w-[min-content]" data-node-id="7814:30187" style={{ fontVariationSettings: '"wdth" 100' }}>
                          How does Nick’s narration affect views on the American Dream?
                        </p>
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="7814:30188">
                          <div className="col-1 content-stretch flex flex-col gap-[2.089px] items-end ml-0 mt-0 relative row-1 w-[83.563px]" data-node-id="7814:30189">
                            <div className="flex h-[20.25px] items-center justify-center relative shrink-0 w-[83.218px]" data-node-id="7814:30190">
                              <div className="flex-none rotate-[-2.83deg]">
                                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative">
                                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-node-id="7814:30191">
                                    <div className="bg-[var(--support\/olive\/support-olive-600,#e8f5e2)] border-[0.261px] border-[var(--support\/olive\/support-olive-200,#71a758)] border-solid col-1 h-[16.19px] ml-0 mt-0 relative rounded-[2.089px] row-1 w-[82.518px]" data-node-id="7814:30192" />
                                    <div className="bg-[var(--support\/olive\/support-olive-300,#8bcd6c)] col-1 ml-[3.31px] mt-[3.13px] relative rounded-[2.611px] row-1 size-[9.923px]" data-node-id="7814:30193" />
                                    <p className="[word-break:break-word] col-1 font-['Open_Sans:Bold'] font-bold leading-[1.2] ml-[6.44px] mt-[4.7px] relative row-1 text-[5.223px] text-[color:var(--background\/background-default,white)] tracking-[-0.2611px] whitespace-nowrap" data-node-id="7814:30194" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      A
                                    </p>
                                  </div>
                                  <div className="[word-break:break-word] col-1 font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightmedium,500)] ml-[15.75px] mt-[2.28px] relative row-1 text-[4.178px] text-[color:var(--text\/text-secondary,rgba(17,17,17,0.65))] w-[65.283px] whitespace-pre-wrap" data-node-id="7814:30195" style={{ fontVariationSettings: '"wdth" 100' }}>
                                    <p className="leading-[normal] mb-0">{`He's both insider and outsider, `}</p>
                                    <p className="leading-[normal]">adding moral ambiguity.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="7814:30196">
                              <div className="bg-[var(--background\/background-paper,#f8f8f8)] col-1 h-[16.19px] ml-0 mt-0 relative rounded-[2.089px] row-1 w-[82.518px]" data-node-id="7814:30197" />
                              <div className="bg-[var(--support\/acqua\/support-acqua-600,#cfebee)] col-1 ml-[3.31px] mt-[2.96px] relative rounded-[2.611px] row-1 size-[9.923px]" data-node-id="7814:30198" />
                              <p className="[word-break:break-word] col-1 font-['Open_Sans:Bold'] font-bold leading-[1.2] ml-[6.44px] mt-[4.52px] relative row-1 text-[5.223px] text-[color:var(--brand\/brand-main,#1a7b87)] tracking-[-0.2611px] whitespace-nowrap" data-node-id="7814:30199" style={{ fontVariationSettings: '"wdth" 100' }}>
                                B
                              </p>
                              <div className="[word-break:break-word] col-1 font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightmedium,500)] ml-[16.19px] mt-[1.95px] relative row-1 text-[4.178px] text-[color:var(--text\/text-secondary,rgba(17,17,17,0.65))] w-[57.972px] whitespace-pre-wrap" data-node-id="7814:30200" style={{ fontVariationSettings: '"wdth" 100' }}>
                                <p className="leading-[normal] mb-0">{`His Midwest values contrast `}</p>
                                <p className="leading-[normal]">East Coast excess.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute contents inset-[0_-1.62%_-0.01%_1.62%]" data-node-id="7814:30201" data-name="Group">
                        <div className="absolute contents inset-[30.09%_-1.62%_-0.01%_7.93%]" data-node-id="7814:30204" data-name="Group">
                          <div className="absolute inset-[34.41%_86.29%_59.12%_9.92%]" data-node-id="7814:30205" data-name="Group">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                          </div>
                          <div className="absolute flex inset-[30.09%_43.83%_63.4%_52.36%] items-center justify-center" data-node-id="7814:30207" style={{ containerType: "size" }}>
                            <div className="flex-none h-[hypot(0.681639cqw,99.3983cqh)] rotate-[-0.37deg] w-[hypot(99.3184cqw,-0.601721cqh)]">
                              <div className="relative size-full" data-name="Group">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-[91.93%_-1.62%_-0.01%_97.48%]" data-node-id="7814:30209" data-name="Group">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
                          </div>
                          <div className="absolute flex inset-[63.72%_-1.06%_28.42%_95.11%] items-center justify-center" data-node-id="7814:30211" style={{ containerType: "size" }}>
                            <div className="flex-none h-[hypot(-13.8466cqw,77.2638cqh)] rotate-[12.27deg] w-[hypot(86.1534cqw,22.7362cqh)]">
                              <div className="relative size-full" data-name="Group">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-[31.1%_29.61%_64.09%_66.34%]" data-node-id="7814:30213" data-name="Group">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
                          </div>
                          <div className="absolute inset-[32.63%_52.6%_62.79%_45.01%]" data-node-id="7814:30215" data-name="Group">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5} />
                          </div>
                          <div className="absolute flex inset-[79.3%_-0.62%_14.46%_96.66%] items-center justify-center" data-node-id="7814:30217" style={{ containerType: "size" }}>
                            <div className="flex-none h-[hypot(39.7871cqw,45.2524cqh)] rotate-[-41.8deg] w-[hypot(60.2129cqw,-54.7476cqh)]">
                              <div className="relative size-full" data-name="Group">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup6} />
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex inset-[39.45%_29.83%_55.78%_67.66%] items-center justify-center" data-node-id="7814:30219" style={{ containerType: "size" }}>
                            <div className="-rotate-2 flex-none h-[hypot(4.00377cqw,97.1669cqh)] w-[hypot(95.9962cqw,-2.83306cqh)]">
                              <div className="relative size-full" data-name="Group">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-[45.24%_68.93%_50.97%_27.88%]" data-node-id="7814:30221" data-name="Group">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup8} />
                          </div>
                          <div className="absolute flex inset-[91.84%_88.42%_1.62%_7.93%] items-center justify-center" data-node-id="7814:30223" style={{ containerType: "size" }}>
                            <div className="flex-none h-[hypot(35.2582cqw,75.9153cqh)] rotate-[-22.57deg] w-[hypot(64.7418cqw,-24.0847cqh)]">
                              <div className="relative size-full" data-name="Group">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup9} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents inset-[34.83%_92.89%_65.17%_7.07%]" data-node-id="7814:30225" data-name="Group">
                          <div className="absolute inset-[34.83%_92.89%_65.17%_7.07%]" data-node-id="7814:30226" data-name="Group">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup10} />
                          </div>
                        </div>
                        <div className="absolute contents inset-[0_32.92%_98.79%_65.34%]" data-node-id="7814:30228" data-name="Group">
                          <div className="absolute inset-[0_32.92%_98.79%_65.34%]" data-node-id="7814:30229" data-name="Group">
                            <div className="absolute inset-[-50.64%_-10.81%_-47.48%_-7.65%]">
                              <img alt="" className="block max-w-none size-full" src={imgGroup11} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents inset-[71.18%_90.12%_21.78%_1.62%]" data-node-id="7814:30231" data-name="Group">
                          <div className="absolute inset-[71.18%_90.12%_21.78%_1.62%]" data-node-id="7814:30232" data-name="Group">
                            <div className="absolute inset-[-4.74%_-4.2%_-8.51%_-1.9%]">
                              <img alt="" className="block max-w-none size-full" src={imgGroup12} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents inset-[13.25%_82.7%_79.48%_13.56%]" data-node-id="7814:30234" data-name="Group">
                          <div className="absolute inset-[13.25%_82.7%_79.48%_13.56%]" data-node-id="7814:30235" data-name="Group">
                            <div className="absolute inset-[-2.47%_-9.29%_-4.59%_-10.4%]">
                              <img alt="" className="block max-w-none size-full" src={imgGroup13} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents inset-[25.59%_87.63%_58.46%_3.03%]" data-node-id="7814:30237" data-name="Group">
                          <div className="absolute inset-[25.59%_87.63%_58.46%_3.03%]" data-node-id="7814:30238" data-name="Group">
                            <div className="absolute inset-[-2.43%_-0.81%_-4.07%_-4.34%]">
                              <img alt="" className="block max-w-none size-full" src={imgGroup14} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents inset-[13.25%_9.95%_70.38%_84.82%]" data-node-id="7814:30240" data-name="Group">
                          <div className="absolute inset-[13.25%_9.95%_70.38%_84.82%]" data-node-id="7814:30241" data-name="Group">
                            <div className="absolute inset-[-3.97%_-7.74%_-2.74%_-7.75%]">
                              <img alt="" className="block max-w-none size-full" src={imgGroup15} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents inset-[40.8%_5.27%_45.46%_87.6%]" data-node-id="7814:30243" data-name="Group">
                          <div className="absolute inset-[40.8%_5.27%_45.46%_87.6%]" data-node-id="7814:30244" data-name="Group">
                            <div className="absolute inset-[-3.15%_-4.23%_-3.39%_-3.95%]">
                              <img alt="" className="block max-w-none size-full" src={imgGroup16} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents inset-[6.7%_41.22%_88.44%_46.36%]" data-node-id="7814:30246" data-name="Group">
                          <div className="absolute inset-[6.7%_41.22%_88.44%_46.36%]" data-node-id="7814:30247" data-name="Group">
                            <div className="absolute inset-[0_-0.58%_0_-1.03%]">
                              <img alt="" className="block max-w-none size-full" src={imgGroup17} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-0 from-[rgba(102,193,203,0)] h-[24px] left-1/2 to-[54.984%] to-[var(--support\/acqua\/support-acqua-500,#90d0d7)] w-[378px]" data-node-id="7814:30249" />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] gap-[var(--2,2px)] items-start leading-[1.5] min-w-px relative tracking-[0.25px]" data-node-id="7814:30250" data-name="Content-feature-text">
                  <p className="relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] w-full" data-node-id="7814:30251" style={{ fontVariationSettings: '"wdth" 100' }}>{`Refresh your memory `}</p>
                  <p className="relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] w-full" data-node-id="7814:30252" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Quizzes on every Study Guide help you check what stuck, in minutes.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--semantic\/background-default,white)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch flex flex-col gap-[var(--4,4px)] items-start overflow-clip p-[var(--12,12px)] relative rounded-[var(--8,8px)] shrink-0 w-full" data-node-id="7814:30253" data-name="<Card>">
              <div className="content-stretch flex gap-[var(--12,12px)] h-[96px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7814:30254" data-name="Content-feature-dqg">
                <div className="bg-[var(--semantic\/support\/support-indigo\[5\],#b1c8e3)] content-stretch flex flex-col h-full items-center justify-center overflow-clip relative rounded-[var(--smaller,8px)] shrink-0 w-[112px]" data-node-id="7814:30255">
                  <div className="bg-[var(--semantic\/background-default,white)] drop-shadow-[0px_3.566px_5.706px_var(--semantic\/support\/support-indigo\[3\],#2e6ab0)] h-[39.587px] relative rounded-[2.853px] shrink-0 w-[101.998px]" data-node-id="7814:30256">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[2.853px] items-start left-1/2 top-[calc(50%+0.18px)] w-[94.866px]" data-node-id="7814:30257">
                      <div className="content-center flex flex-wrap gap-[2.8531031608581543px_2.853px] items-center relative shrink-0 w-[94.866px]" data-node-id="7814:30258">
                        <div className="bg-[var(--badge\/badge-default-background,#ededed)] content-stretch flex gap-[0.713px] items-center px-[2.853px] py-[1.427px] relative rounded-[35.664px] shrink-0" data-node-id="7814:30259" data-name="<Badge>">
                          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[3.566px] text-[color:var(--semantic\/text-secondary,#616161)] tracking-[0.1783px] whitespace-nowrap" data-node-id="7814:30262" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Post-reading Questions
                          </p>
                        </div>
                        <div className="bg-[var(--badge\/badge-default-background,#ededed)] content-stretch flex gap-[0.713px] items-center px-[2.853px] py-[1.427px] relative rounded-[35.664px] shrink-0" data-node-id="7814:30263" data-name="<Badge>">
                          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[3.566px] text-[color:var(--semantic\/text-secondary,#616161)] tracking-[0.1783px] whitespace-nowrap" data-node-id="7814:30266" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Intermediate Level
                          </p>
                        </div>
                        <div className="bg-[var(--badge\/badge-default-background,#ededed)] content-stretch flex gap-[0.713px] items-center px-[2.853px] py-[1.427px] relative rounded-[35.664px] shrink-0" data-node-id="7814:30267" data-name="<Badge>">
                          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[3.566px] text-[color:var(--semantic\/text-secondary,#616161)] tracking-[0.1783px] whitespace-nowrap" data-node-id="7814:30270" style={{ fontVariationSettings: '"wdth" 100' }}>
                            For Book Club Members
                          </p>
                        </div>
                        <div className="bg-[var(--badge\/badge-default-background,#ededed)] content-stretch flex gap-[0.713px] items-center px-[2.853px] py-[1.427px] relative rounded-[35.664px] shrink-0" data-node-id="7814:30271" data-name="<Badge>">
                          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[3.566px] text-[color:var(--semantic\/text-secondary,#616161)] tracking-[0.1783px] whitespace-nowrap" data-node-id="7814:30274" style={{ fontVariationSettings: '"wdth" 100' }}>{` About themes`}</p>
                        </div>
                      </div>
                      <div className="bg-[var(--button\/primary\/primary-body-default,rgba(0,108,122,0.9))] content-stretch flex gap-[1.427px] h-[11.412px] items-center justify-center overflow-clip px-[4.28px] py-[var(--0,0px)] relative rounded-[4.28px] shrink-0 w-full" data-node-id="7814:30275" data-name="<Button>">
                        <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightmedium,500)] leading-[1.5] relative shrink-0 text-[3.566px] text-[color:var(--button\/primary\/primary-label,white)] tracking-[0.1783px] whitespace-nowrap" data-node-id="7814:30278" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Generate Discussion Questions
                        </p>
                      </div>
                    </div>
                    <div className="absolute flex items-center justify-center left-[85.95px] size-[8.224px] top-[26.75px]" data-node-id="7814:30281">
                      <div className="flex-none rotate-[-27.36deg]">
                        <div className="relative size-[6.102px]" data-name="image 130">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage130} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] gap-[var(--2,2px)] items-start leading-[1.5] min-w-px relative tracking-[0.25px]" data-node-id="7814:30282" data-name="Content-feature-text">
                  <p className="relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] w-full" data-node-id="7814:30283" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Spark strong discussions
                  </p>
                  <p className="relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] w-full" data-node-id="7814:30284" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Ready-to-use questions for every theme, ready to share with your group.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--semantic\/background-default,white)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch flex flex-col gap-[var(--4,4px)] items-start overflow-clip p-[var(--12,12px)] relative rounded-[var(--8,8px)] shrink-0 w-full" data-node-id="7814:30285" data-name="<Card>">
              <div className="content-stretch flex gap-[var(--12,12px)] h-[96px] items-start overflow-clip relative shrink-0 w-full" data-node-id="7814:30286" data-name="Content-feature-audio">
                <div className="bg-[var(--semantic\/support\/support-orange\[5\],#f9d4ba)] content-stretch flex flex-col h-full items-center justify-center overflow-clip relative rounded-[var(--smaller,8px)] shrink-0 w-[112px]" data-node-id="7814:30287">
                  <div className="bg-[var(--semantic\/background-default,white)] content-stretch drop-shadow-[0px_5.434px_8.694px_var(--semantic\/support\/support-orange\[4\],#f2a975)] flex flex-col gap-[4.347px] items-start p-[4.347px] relative rounded-[4.347px] shrink-0" data-node-id="7814:30288">
                    <div className="bg-[var(--semantic\/support\/support-gray\[6\],#ededed)] content-stretch flex gap-[var(--2,1.087px)] items-center px-[var(--8,4.347px)] py-[var(--4,2.173px)] relative rounded-[var(--rounded,54.335px)] shrink-0" data-node-id="7814:30289" data-name="<Badge>">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightmedium,500)] leading-[normal] relative shrink-0 text-[2.36px] text-[color:var(--semantic\/support\/support-gray\[2\],#616161)] tracking-[0.1358px] whitespace-nowrap" data-node-id="I7814:30289;1419:514" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Audio Study Guide
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[4.347px] items-center relative shrink-0 w-full" data-node-id="7814:30290">
                      <div className="h-[19.343px] relative rounded-[2.173px] shrink-0 w-[20.104px]" data-node-id="7814:30291" data-name="Screenshot 2025-06-26 at 18.04.21 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.173px] size-full" src={imgScreenshot20250626At1804211} />
                      </div>
                      <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[0.543px] items-start leading-[normal] min-w-px relative text-[color:var(--semantic\/text-secondary,#616161)]" data-node-id="7814:30292">
                        <p className="font-['Open_Sans:SemiBold'] font-semibold relative shrink-0 text-[7.607px] w-full" data-node-id="7814:30293" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Normal People
                        </p>
                        <p className="font-['Open_Sans:Regular'] font-normal relative shrink-0 text-[6.52px] w-full" data-node-id="7814:30294" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Sally Rooney
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[2.173px] items-center relative shrink-0 w-full" data-node-id="7814:30295">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="7814:30296">
                        <div className="overflow-clip relative shrink-0 size-[10.324px]" data-node-id="7814:30297" data-name="play_circle">
                          <div className="absolute inset-[8.33%]" data-node-id="I7814:30297;2402:42059" data-name="Vector">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                          </div>
                        </div>
                      </div>
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="7814:30298">
                        <div className="bg-[var(--semantic\/support\/support-orange\[6\],#fceadd)] col-1 h-[2.717px] ml-[1.09px] mt-[0.06px] relative rounded-[54.335px] row-1 w-[71.723px]" data-node-id="7814:30299" />
                        <div className="bg-[var(--semantic\/support\/support-orange\[3\],#ef9453)] col-1 h-[2.717px] ml-0 mt-0 relative rounded-[54.335px] row-1 w-[36.405px]" data-node-id="7814:30300" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] gap-[var(--4,4px)] items-start leading-[1.5] min-w-px relative tracking-[0.25px]" data-node-id="7814:30301" data-name="Content-feature-text">
                  <p className="relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] w-full" data-node-id="7814:30302" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Listen on the go
                  </p>
                  <p className="relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] w-full" data-node-id="7814:30303" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Audio Study Guides keep you up to speed between meetings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
