# 11b-spark-discussions-detail — "Spark strong discussions" (detail)

Figma node: `7825:32650` (iPhone 13 & 14 - 256, second row below screen 11), file `2T3j73CQ4BKfuuXPnb0qFi`. Frame 390x844.
Screenshot: `design-specs/screens/11b-spark-discussions-detail.png`

## Exact copy (verbatim)

- URL pill: `supersummary.com`
- Heading: `Spark strong discussions`
- Subheading: `Ready-to-use questions for every theme, ready to share with your group.`
- Illustration card badges: `Post-reading Questions`, `Intermediate Level`, `For Book Club Members`, ` About themes` (leading space in design)
- Illustration card button: `Create  Questions` (two spaces between words in design, `whitespace-pre`)
- CTA button: `Next` (with arrow_forward end icon)

## Layout structure

```
Frame 390x844, column, gap 12, items-start
├── chrome (bg white, w 390, column)
│   ├── SystemStatusBar h 38 (9:41 / signal / wifi / battery SVGs)
│   ├── Chrome - Top h 55 (white + hairline 0 0.4px #ccc; pill #e8eaed L11/R10/B10 h36 r30; lock + "supersummary.com" SF Pro 18 #202124; share right 24 top 16)
│   └── ProgressBar (step=4) h 36: arrow_back 24x24, track flex-1 #ededed, fill h4 w168px #006c7a (≈49.7%)
├── main (flex-1, column, gap 24, items-center justify-center, pb 88, w full)
│   ├── heading block — column, gap 16, px 24, py 16, w full
│   │   ├── Supporting element/Text Highlight Medium — absolute left 80, top 67, 230x35, rotate 180 (5 vector strokes under/around "discussions")
│   │   ├── H1 "Spark strong discussions" — General Sans Medium (display/h4), 36px, lh 1.2, ls 0, #212121, centered (wraps 2 lines)
│   │   └── Sub — Open Sans Regular 400 (default/body-large), 20px, lh 1.5, ls 0.5, #616161, centered
│   └── Features — column, gap 16, padding 24, w 390, items-center, overflow-clip
│       └── illustration composition (stacked grid, two overlapping elements):
│           ├── LEFT: hand-drawn open book illustration group — 145.365x183.92 at ml 0/mt 0; whole group rotated ~-10.27 to -10.72deg; built from 2 large book-outline vectors (116.915x165.298 and 116.286x164.669), small title-line vectors, a mask-composited group (mask book-mask-group.svg over book-masked-content.svg), and a PNG texture (book-hand-illustration.png 103.293x73.266, rotate -10.27deg skew -0.06deg) at bottom
│           └── RIGHT: white "Generate questions" card — 190.303x210.03 at ml 117.18/mt 6.97, bg white, radius 18.566, px 13.925 py 9.283, column gap 11.604, content centered
│               ├── badges wrap row (gap 9.283, justify-center): 4x <Badge> — bg #f8f8f8 (Semantic/background-paper), radius 116.039, px 9.283 py 4.642; label Open Sans 400, 11.604px, lh 1.5, ls 0.5802px, rgba(17,17,17,0.65)
│               ├── button: bg rgba(0,108,122,0.9) (button/primary/primary-body-default), h 37.132, w full, radius 13.925, px 13.925, gap 4.642; label "Create  Questions" Open Sans 500, 11.604px, lh 1.5, ls 0.5802px, white
│               ├── sparkle png — 26.906x26.906 rotate -27.36deg at left 146.28/top 161.43 (36.261 box), shadow 0px 20px 20px rgba(0,0,0,0.12) (Elevation/3)
│               └── Supporting element/Arrow Thin — 57.163x55.698 (73.644x74.418 box) at left -80.64/top 149.1, -scale-y-100 + rotate -156.93deg (hand-drawn arrow pointing from card toward book)
└── footer — absolute bottom 0, centered, bg white, w 390, column, gap 12, pt 16, pb 24, px 16
    └── <Button> Primary — h 48, w full, bg #006c7a, radius 16, gap 4, px 16
        ├── "Next" Open Sans SemiBold 600 16px ls 0.25 #f8f8f8
        └── arrow_forward 24x24 white
```

## Background

Same as screen 11: radial gradient overlay (opacity 0.7) over flat #f8f8f8.
- Radial: center ~(211.5, 284), stops `rgba(246,229,231,1)` (pink) at 0.15 → `rgba(248,248,248,1)` at 0.9, gradientTransform matrix(0.050001 42.5 -26.512 0.031192 211.5 284)

## Colors

| Token | Value |
|---|---|
| Semantic/text-primary | #212121 |
| Semantic/text-secondary | #616161 |
| Semantic/text-primary-contrast | #f8f8f8 |
| Semantic/interactive-primary (Next button) | #006c7a |
| button/primary/primary-body-default (mock button) | rgba(0,108,122,0.9) |
| button/primary/primary-label | #ffffff |
| Semantic/background-paper (badge bg) | #f8f8f8 |
| background/background-default (card bg) | #ffffff |
| text/text-secondary (badge label) | rgba(17,17,17,0.65) |
| Semantic/background-offpaper (progress track) | #ededed |
| Semantic/support/support-aqua[2] (progress fill) | #006c7a |
| Semantic/shadow | rgba(0,0,0,0.12) |
| Radial bg tint | rgb(246,229,231) |
| Chrome pill #e8eaed; URL #202124; hairline #ccc | — |

Shadows (token styles present): Elevation/2 = 0 6px 16px Semantic/shadow; Elevation/3 = 0 20px 20px Semantic/shadow (used on sparkle: shadow 0px 20px 20px 0px rgba(0,0,0,0.12)).

## Typography

| Node | Family | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| H1 (7825:32664) | General Sans (display/h4) | Medium 500 | 36px | 1.2 | 0 | #212121 |
| Subheading (7825:32665) | Open Sans (default/body-large) | Regular 400 | 20px | 1.5 | 0.5px | #616161 |
| Badge labels | Open Sans | Regular 400 | 11.604px | 1.5 | 0.5802px | rgba(17,17,17,0.65) |
| Mock button label | Open Sans | Medium 500 | 11.604px | 1.5 | 0.5802px | #ffffff |
| Next button label | Open Sans (Button/label-default) | SemiBold 600 | 16px | 100% | 0.25px | #f8f8f8 |
| Chrome URL | SF Pro | Regular 400 | 18px | normal | — | #202124 |

## Progress bar state

Identical to screens 10/11 — ProgressBar `step="4"`: single continuous bar, h 4, track #ededed (flex ~338px), fill 168px fixed (~49.7%) #006c7a.

## Header / footer composition

- iOS status bar 38px + browser chrome 55px "supersummary.com" pill + lock + share (same as other screens).
- Back arrow + progress row 36px on white.
- Footer: absolute bottom, white, pt 16 / pb 24 / px 16, full-width Primary "Next" h 48, radius 16, #006c7a, label + arrow_forward. Main content pb 88 clears it.

## Illustration composition notes

- This screen is the enlarged version of the "Spark strong discussions" tile from screen 11: same 4 badges + button + sparkle, scaled up (~3.25x), plus a hand-drawn open-book illustration on the left and a thin hand-drawn arrow connecting card to book.
- The book group uses one raster asset (book-hand-illustration.png, 207x147 source) plus vector strokes; one sub-group is a CSS mask composite (mask-image: book-mask-group.svg applied to book-masked-content.svg, mask position -0.168px 0.884px, mask size 69.141x24.351).
- No "+ Add more" affordance and no carousel on this screen.

## Downloaded assets (design-specs/assets/11b-spark-discussions-detail/)

| File | Used for |
|---|---|
| statusbar-battery-outline/-cap/-fill.svg, statusbar-wifi.svg, statusbar-mobile-signal.svg, statusbar-time-941.svg | iOS status bar |
| chrome-share.svg / chrome-lock.svg | Browser chrome |
| arrow-back.svg | Progress row back arrow |
| highlight-medium-vector-1..5.svg | Text Highlight Medium strokes (230x35 box, rotate 180) |
| arrow-thin-path294.svg | Supporting element/Arrow Thin (hand-drawn arrow) |
| book-cover-shape.svg (imgVector7) | Book illustration large fill shape (116.915x165.298, rotate -10.27) |
| book-cover-outline.svg (imgVector8) | Book illustration outline (116.286x164.669, rotate -10.72) |
| book-title-line-1.svg (imgVector9) | Book cover title stroke (33.346x9.437) |
| book-title-line-2.svg (imgVector10) | Book cover title stroke (27.798x3.474) |
| book-mask-group.svg (imgGroup) | CSS mask for masked text group |
| book-masked-content.svg (imgGroup1) | Content inside mask (67.556x11.609) |
| book-text-line-3.svg (imgVector11) | Book text line (84.099x10.025) |
| book-text-line-4.svg (imgVector12) | Book text line (71.536x8.992) |
| book-hand-illustration.png (imgVector13) | Bottom raster part of book illustration (103.293x73.266 render, 207x147 source) |
| sparkle-image-130.png | Sparkle on mock button corner (26.906px, rotate -27.36deg, Elevation/3 shadow) |
| arrow-forward.svg | Next button end icon |

## Raw reference code (get_design_context)

```tsx
const imgVector = "https://www.figma.com/api/mcp/asset/e8708fa6-3e23-4954-9ec7-dbb251ff8e8d.svg";
const imgRectangle = "https://www.figma.com/api/mcp/asset/b100737f-94bf-4173-b5f3-dee0b2ac12c4.svg";
const imgCombinedShape = "https://www.figma.com/api/mcp/asset/99e9402e-db3c-46d0-90d7-d77a8fbce113.svg";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/9bb0a110-0611-4ab6-9a4b-9e17a7caf7db.svg";
const imgWifi = "https://www.figma.com/api/mcp/asset/871af186-3168-4b0d-a448-38f749de173b.svg";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/7311b9d7-3638-4347-8055-5fd8225fcfe8.svg";
const img941 = "https://www.figma.com/api/mcp/asset/5004c338-f9ab-4ec9-b7aa-00c7c5c5dd72.svg";
const imgImage130 = "https://www.figma.com/api/mcp/asset/f8fbd535-f709-4ca6-8673-3000166988d8.png";
const imgVector13 = "https://www.figma.com/api/mcp/asset/8940ce86-508b-450b-ac87-20df8a753d7d.png";
const imgVector1 = "https://www.figma.com/api/mcp/asset/c2f015a7-fc6f-4bd6-903a-8395133e3d9d.svg";
const imgShare = "https://www.figma.com/api/mcp/asset/8065ed6c-7f9a-486b-95cd-abe320d0ae58.svg";
const imgLock = "https://www.figma.com/api/mcp/asset/05b97fae-6ff7-4b06-87b6-8b7327c74194.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/6bf14cd8-f06d-4698-a24f-5201fd230546.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/d6b888fb-1147-4de1-a760-2202cc0266ed.svg";
const imgVector4 = "https://www.figma.com/api/mcp/asset/471e3371-39f3-47d3-96b0-7cdbf3e86e64.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/1ba9ffc5-e930-412a-b64e-f0e7edff0aa7.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/6c0ab4b7-54ef-43ca-bad9-44c16634480e.svg";
const imgPath294 = "https://www.figma.com/api/mcp/asset/696f256f-5fe7-42e0-93a2-d340c7c2d58d.svg";
const imgVector7 = "https://www.figma.com/api/mcp/asset/5f363eaf-3648-445a-9083-94af0e5abd34.svg";
const imgVector8 = "https://www.figma.com/api/mcp/asset/f31206a6-b69e-4510-897b-2e548aee3893.svg";
const imgVector9 = "https://www.figma.com/api/mcp/asset/71790996-7ee9-4e00-a69e-2203deee051c.svg";
const imgVector10 = "https://www.figma.com/api/mcp/asset/b94b615a-cf25-4435-9414-686198694875.svg";
const imgGroup = "https://www.figma.com/api/mcp/asset/ddac6b84-c1e8-4dc9-b8aa-67780b93a407.svg";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/62d23652-fab0-4b30-b5d2-d5d48154787f.svg";
const imgVector11 = "https://www.figma.com/api/mcp/asset/f916409e-6ed0-4101-85e0-64c8cbb85d1a.svg";
const imgVector12 = "https://www.figma.com/api/mcp/asset/4a339be0-719f-4452-9644-38f8f8f64b56.svg";

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

export default function IPhone1314256() {
  return (
    <div className="content-stretch flex flex-col gap-[var(--12,12px)] items-start relative size-full" data-node-id="7825:32650" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.699999988079071'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0.050001 42.5 -26.512 0.031192 211.5 284)'><stop stop-color='rgba(246,229,231,1)' offset='0.15'/><stop stop-color='rgba(248,248,248,1)' offset='0.9'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(248, 248, 248) 0%, rgb(248, 248, 248) 100%)" }} data-name="iPhone 13 & 14 - 256">
      <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col gap-[var(--12,12px)] items-start justify-center left-1/2 pb-[var(--24,24px)] pt-[var(--16,16px)] px-[16px] w-[390px]" data-node-id="7825:32651" data-name="Frame">
        <div className="bg-[var(--semantic\/interactive-primary,#006c7a)] content-stretch flex gap-[var(--4,4px)] h-[48px] items-center justify-center overflow-clip px-[var(--16,16px)] py-[var(--0,0px)] relative rounded-[var(--default,16px)] shrink-0 w-full" data-node-id="7825:32652" data-name="<Button>">
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightsemibold,600)] leading-[normal] relative shrink-0 text-[color:var(--semantic\/text-primary-contrast,#f8f8f8)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7825:32652;141:2420" style={{ fontVariationSettings: '"wdth" 100' }}>
            Next
          </p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I7825:32652;141:2519" data-name="End Icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I7825:32652;141:2421" data-name="Style=Round">
              <div className="absolute inset-[18.36%_17.54%]" data-node-id="I7825:32652;141:2421;2402:73679" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="7825:32653" data-name="chrome">
        <SystemStatusBar className="h-[38px] overflow-clip relative shrink-0 w-[390px]" />
        <div className="h-[55px] relative shrink-0 w-[390px]" data-node-id="7825:32655" data-name="Chrome - Top">
          <div className="absolute bg-white inset-[0_0_1.82%_0] shadow-[0px_0.4px_0px_0px_#ccc]" data-node-id="I7825:32655;726:1322" data-name="bg" />
          <div className="absolute bg-[#e8eaed] bottom-[10px] h-[36px] left-[11px] right-[10px] rounded-[30px]" data-node-id="I7825:32655;726:1323" data-name="chrome-bar-input" />
          <div className="absolute overflow-clip right-[24px] size-[21px] top-[16px]" data-node-id="I7825:32655;732:2974" data-name=".icons/chrome/share">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.385px] left-1/2 top-1/2 w-[14.538px]" data-node-id="I7825:32655;732:2974;732:2858" data-name="Share">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex gap-[7px] items-center justify-center left-[calc(50%+0.41px)] top-[16px]" data-node-id="I7825:32655;726:1325">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I7825:32655;732:2892" data-name=".icons/chrome/lock">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.508px] left-1/2 top-[calc(50%+0.64px)] w-[7.672px]" data-node-id="I7825:32655;732:2892;732:2890" data-name="Lock">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular'] font-normal leading-[normal] relative shrink-0 text-[#202124] text-[18px] whitespace-nowrap" data-node-id="I7825:32655;726:1327" style={{ fontVariationSettings: '"wdth" 100' }}>
              supersummary.com
            </p>
          </div>
        </div>
        <ProgressBar className="bg-[var(--semantic\/background-default,white)] content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] pt-[var(--0,0px)] relative shrink-0 w-[390px]" />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px pb-[88px] pt-[var(--0,0px)] relative w-full" data-node-id="7825:32657">
        <div className="content-stretch flex flex-col gap-[var(--16,16px)] items-start px-[var(--24,24px)] py-[var(--16,16px)] relative shrink-0 w-full" data-node-id="7825:32662">
          <div className="absolute flex h-[35px] items-center justify-center left-[80px] top-[67px] w-[230px]" data-node-id="7825:32663">
            <div className="flex-none rotate-180">
              <div className="h-[35px] relative w-[230px]" data-name="Supporting element/Text Highlight Medium">
                <div className="absolute inset-[0_7.5%_64.68%_2.52%]" data-node-id="I7825:32663;1587:1229" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[21.68%_0_50.05%_4.39%]" data-node-id="I7825:32663;1587:1230" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
                <div className="absolute inset-[41.18%_1.53%_28.12%_3.16%]" data-node-id="I7825:32663;1587:1231" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                </div>
                <div className="absolute inset-[57.47%_6.24%_14.9%_0.1%]" data-node-id="I7825:32663;1587:1232" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                </div>
                <div className="absolute inset-[73.91%_7.11%_0_0]" data-node-id="I7825:32663;1587:1233" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[1.2] min-w-full not-italic relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/2\,25rem,36px)] text-center w-[min-content]" data-node-id="7825:32664">
            Spark strong discussions
          </p>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] min-w-full relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/1\,25rem,20px)] text-center tracking-[0.5px] w-[min-content]" data-node-id="7825:32665" style={{ fontVariationSettings: '"wdth" 100' }}>
            Ready-to-use questions for every theme, ready to share with your group.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--16,16px)] items-center overflow-clip p-[var(--24,24px)] relative shrink-0 w-[390px]" data-node-id="7825:32667" data-name="Features">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="7825:32836">
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[117.18px] mt-[6.97px] place-items-start relative row-1" data-node-id="7825:32837">
              <div className="bg-[var(--background\/background-default,white)] col-1 content-stretch flex flex-col gap-[11.604px] h-[210.03px] items-center justify-center ml-0 mt-0 px-[13.925px] py-[9.283px] relative rounded-[18.566px] row-1 w-[190.303px]" data-node-id="7825:32838">
                <div className="content-stretch flex flex-col gap-[9.283px] items-start relative shrink-0 w-full" data-node-id="7825:32839">
                  <div className="content-center flex flex-wrap gap-[9.283082962036133px_9.283px] items-center justify-center relative shrink-0 w-full" data-node-id="7825:32840">
                    <div className="bg-[var(--semantic\/background-paper,#f8f8f8)] content-stretch flex gap-[2.321px] items-center px-[9.283px] py-[4.642px] relative rounded-[116.039px] shrink-0" data-node-id="7825:32841" data-name="<Badge>">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[11.604px] text-[color:var(--text\/text-secondary,rgba(17,17,17,0.65))] tracking-[0.5802px] whitespace-nowrap" data-node-id="7825:32844" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Post-reading Questions
                      </p>
                    </div>
                    <div className="bg-[var(--semantic\/background-paper,#f8f8f8)] content-stretch flex gap-[2.321px] items-center px-[9.283px] py-[4.642px] relative rounded-[116.039px] shrink-0" data-node-id="7825:32845" data-name="<Badge>">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[11.604px] text-[color:var(--text\/text-secondary,rgba(17,17,17,0.65))] tracking-[0.5802px] whitespace-nowrap" data-node-id="7825:32848" style={{ fontVariationSettings: '"wdth" 100' }}>
                        Intermediate Level
                      </p>
                    </div>
                    <div className="bg-[var(--semantic\/background-paper,#f8f8f8)] content-stretch flex gap-[2.321px] items-center px-[9.283px] py-[4.642px] relative rounded-[116.039px] shrink-0" data-node-id="7825:32849" data-name="<Badge>">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[11.604px] text-[color:var(--text\/text-secondary,rgba(17,17,17,0.65))] tracking-[0.5802px] whitespace-nowrap" data-node-id="7825:32852" style={{ fontVariationSettings: '"wdth" 100' }}>
                        For Book Club Members
                      </p>
                    </div>
                    <div className="bg-[var(--semantic\/background-paper,#f8f8f8)] content-stretch flex gap-[2.321px] items-center px-[9.283px] py-[4.642px] relative rounded-[116.039px] shrink-0" data-node-id="7825:32853" data-name="<Badge>">
                      <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightregular,400)] leading-[1.5] relative shrink-0 text-[11.604px] text-[color:var(--text\/text-secondary,rgba(17,17,17,0.65))] tracking-[0.5802px] whitespace-nowrap" data-node-id="7825:32856" style={{ fontVariationSettings: '"wdth" 100' }}>{` About themes`}</p>
                    </div>
                  </div>
                  <div className="bg-[var(--button\/primary\/primary-body-default,rgba(0,108,122,0.9))] content-stretch flex gap-[4.642px] h-[37.132px] items-center justify-center overflow-clip px-[13.925px] py-[var(--0,0px)] relative rounded-[13.925px] shrink-0 w-full" data-node-id="7825:32857" data-name="<Button>">
                    <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-[var(--font-weight\/fontweightmedium,500)] leading-[1.5] relative shrink-0 text-[11.604px] text-[color:var(--button\/primary\/primary-label,white)] tracking-[0.5802px] whitespace-pre" data-node-id="7825:32860" style={{ fontVariationSettings: '"wdth" 100' }}>{`Create  Questions`}</p>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center left-[146.28px] size-[36.261px] top-[161.43px]" data-node-id="7825:32863">
                  <div className="flex-none rotate-[-27.36deg]">
                    <div className="relative shadow-[0px_20px_20px_0px_var(--semantic\/shadow,rgba(0,0,0,0.12))] size-[26.906px]" data-name="image 130">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage130} />
                    </div>
                  </div>
                </div>
                <div className="absolute flex h-[73.644px] items-center justify-center left-[-80.64px] top-[149.1px] w-[74.418px]" data-node-id="7825:32864">
                  <div className="-scale-y-100 flex-none rotate-[-156.93deg]">
                    <div className="h-[55.698px] relative w-[57.163px]" data-name="Supporting element/Arrow Thin">
                      <div className="absolute flex inset-0 items-center justify-center" data-node-id="I7825:32864;1531:9536" style={{ containerType: "size" }}>
                        <div className="flex-none h-[hypot(-73.9832cqw,28.7592cqh)] rotate-[69.35deg] w-[hypot(26.0168cqw,71.2408cqh)]">
                          <div className="relative size-full" data-name="path294">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath294} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[183.92px] inline-grid ml-0 mt-0 place-items-start relative row-1 w-[145.365px]" data-node-id="7825:32865" data-name="Group">
              <div className="col-1 flex h-[183.472px] items-center justify-center ml-[0.33px] mt-[0.14px] relative row-1 w-[144.658px]" data-node-id="7825:32866">
                <div className="flex-none rotate-[-10.27deg] skew-x-[0.05deg]">
                  <div className="h-[165.298px] relative w-[116.915px]" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[183.406px] items-center justify-center ml-0 mt-0 relative row-1 w-[145.038px]" data-node-id="7825:32867">
                <div className="flex-none rotate-[-10.72deg] skew-x-[0.05deg]">
                  <div className="h-[164.669px] relative w-[116.286px]" data-name="Vector">
                    <div className="absolute inset-[-0.35%_-0.5%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[15.477px] items-center justify-center ml-[6.03px] mt-[6.58px] relative row-1 w-[34.528px]" data-node-id="7825:32868">
                <div className="flex-none rotate-[-10.72deg] skew-x-[0.05deg]">
                  <div className="h-[9.437px] relative w-[33.346px]" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[8.376px] items-center justify-center ml-[8.76px] mt-[9.68px] relative row-1 w-[27.972px]" data-node-id="7825:32869">
                <div className="flex-none rotate-[-10.27deg]">
                  <div className="h-[3.474px] relative w-[27.798px]" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector10} />
                  </div>
                </div>
              </div>
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[24.351px] inline-grid ml-[6.18px] mt-[23.3px] place-items-start relative row-1 w-[69.141px]" data-node-id="7825:32870" data-name="Clip path group">
                <div className="col-1 flex h-[23.47px] items-center justify-center ml-[0.34px] mt-[-0.92px] relative row-1 w-[68.544px]" data-node-id="7825:32873">
                  <div className="flex-none rotate-[-10.27deg]">
                    <div className="h-[11.609px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.168px_0.884px] mask-size-[69.141px_24.351px] relative w-[67.556px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[24.861px] items-center justify-center ml-[6.54px] mt-[47.62px] relative row-1 w-[84.538px]" data-node-id="7825:32891">
                <div className="flex-none rotate-[-10.27deg]">
                  <div className="h-[10.025px] relative w-[84.099px]" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector11} />
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[21.605px] items-center justify-center ml-[7.41px] mt-[65.58px] relative row-1 w-[71.993px]" data-node-id="7825:32892">
                <div className="flex-none rotate-[-10.27deg]">
                  <div className="h-[8.992px] relative w-[71.536px]" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector12} />
                  </div>
                </div>
              </div>
              <div className="col-1 flex h-[90.527px] items-center justify-center ml-[7.51px] mt-[82.9px] relative row-1 w-[114.622px]" data-node-id="7825:32893">
                <div className="flex-none rotate-[-10.27deg] skew-x-[-0.06deg]">
                  <div className="h-[73.266px] relative w-[103.293px]" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="73.266" src={imgVector13} width="103.293" />
                  </div>
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
