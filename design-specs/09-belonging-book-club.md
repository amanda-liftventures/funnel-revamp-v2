# 09-belonging-book-club — "Get more out of your book club"

Figma node: `7814:29942` (iPhone 13 & 14 - 238), file `2T3j73CQ4BKfuuXPnb0qFi`. Frame 390x844.
Screenshot: `design-specs/screens/09-belonging-book-club.png`

## Exact copy (verbatim)

- URL pill: `supersummary.com`
- Status bar time: `9:41` (rendered as SVG asset)
- Heading: `Get more out of your book club`
- Subheading: `With ` + `10,000+ ` (bold) + `expert-developed Study Guides`
- Guide card 1: `The Great Gatsby` / `F. Scott Fitzgerald`
- Guide card 2: `The Seven Year Slip` / `Ashley Poston`
- Guide card 3: `West with Giraffes` / `Lynda Rutledge`
- Guide card 4: `Proof of Heaven: A Neurosurgeo…` (truncated with ellipsis in design) / `Eben Alexander`
- Guide card 5: `The Seven Year Slip` / `Ashley Poston`
- Guide card 6: `West with Giraffes` / `Lynda Rutledge`
- CTA button: `Next` (with arrow_forward end icon)

## Layout structure

```
Frame 390x844, column flex, gap 12 (--12), items-start
├── chrome (white bg, w-390, column)
│   ├── SystemStatusBar — h 38, w 390 (iOS status bar: time 9:41 left at 33.45px, right group: signal 17x10.667 @right 64.33, wifi 15.272x10.966 @right 44.03, battery @right 14.67-17, all top ~17.33)
│   ├── Chrome - Top — h 55, w 390
│   │   ├── bg: white, inset 0 0 1.82% 0, shadow 0px 0.4px 0px 0px #ccc (hairline bottom)
│   │   ├── chrome-bar-input: bg #e8eaed, bottom 10, h 36, left 11, right 10, radius 30
│   │   ├── share icon: 21x21 box @right 24, top 16 (glyph 14.538x19.385 centered)
│   │   └── centered group (left calc(50%+0.41px), top 16, row gap 7):
│   │       ├── lock icon 16x16 box (glyph 7.672x11.508)
│   │       └── "supersummary.com" — SF Pro Regular 18, #202124, leading normal
│   └── progress row — h 36, w full, row, gap 4 (--4), items-center justify-center, pl 8 (--8), pr 16 (--16)
│       ├── <Icon> 24x24, radius 8 — arrow_back glyph (14.4 wide, inset 20% v)
│       └── progress bar (flex 1, stacked grid):
│           ├── track: h 4, w 100%, bg #ededed (Semantic/support/support-gray[6])
│           └── fill:  h 4, w 20%,  bg #006c7a (Semantic/support/support-aqua[2])
├── content area (flex 1, w full, relative)
│   ├── copy block — absolute left 0, top 13, w 390, column, gap 24 (--24), px 24 (--16 py: 16)
│   │   ├── Text Highlight Small (decorative underline/highlight strokes) — absolute left 57, top 61, 274.293x38.608, rotate 0.96deg, 3 vector strokes
│   │   ├── H1 "Get more out of your book club" — display font (General Sans Medium), 36px (--font-size/2,25rem), line-height 1.2, letter-spacing 0, color #212121 (Semantic/text-primary), centered, full width
│   │   └── Sub "With 10,000+ expert-developed Study Guides" — Open Sans Regular 20px, leading normal, #616161 (Semantic/text-secondary), centered, w 342; "10,000+ " in Open Sans Bold
│   ├── guides list — absolute left 51, top 232, column, gap 16 (--16), items-start justify-center
│   │   └── 6x Guide Card (see Cards below)
│   ├── Badge group — absolute left 291, top 193
│   │   ├── Supporting element/Badge (swirl stroke path52) — 90.318x89.256 at left 291/top 193, mirrored (-scale-x-100), rotated 160.7deg, skew 0.08deg
│   │   └── brands/SuperSummary Icon — 18.064x28.689 glyph in 24.873x32.387 box at left 322.88/top 221.69, rotate -15deg
│   ├── bottom fade — absolute left -2, top 529, w 392, h 174, linear-gradient to bottom from rgba(248,248,248,0) to #f8f8f8 at 87.931%
│   └── footer — absolute bottom 0, centered (left 50% translate), w 390, column, gap 12, pt 16, pb 24, px 16
│       └── <Button> Primary Default — h 48, w full, bg #006c7a (Semantic/interactive-primary), radius 16 (--default), row, gap 4, px 16, centered
│           ├── "Next" — Open Sans SemiBold 600, 16px (--font-size/1rem), tracking 0.25px, color #f8f8f8 (Semantic/text-primary-contrast), line-height normal
│           └── End Icon: arrow_forward, 24x24 box (glyph inset 18.36% v / 17.54% h), white
```

## Background

Frame background: radial gradient overlay (opacity 0.7) over flat #f8f8f8.
- Radial: center ~(211.5, 284), stops `rgba(214,227,242,1)` at 0.15 → `rgba(248,248,248,1)` at 0.9 (gradientTransform matrix(0.050001 42.5 -26.512 0.031192 211.5 284))
- Base layer: linear-gradient(90deg, #f8f8f8 0%, #f8f8f8 100%) i.e. flat #f8f8f8

## Colors

| Token | Hex |
|---|---|
| Semantic/text-primary | #212121 |
| Semantic/text-secondary | #616161 |
| Semantic/text-primary-contrast | #f8f8f8 |
| Semantic/background-paper | #f8f8f8 |
| Semantic/border-light | #d9d9d9 |
| Semantic/interactive-primary | #006c7a |
| Semantic/support/support-aqua[2] (progress fill) | #006c7a |
| Semantic/support/support-gray[6] (progress track) | #ededed |
| Semantic/shadow | rgba(0,0,0,0.12) |
| Chrome bar input | #e8eaed |
| Chrome URL text | #202124 |
| Chrome hairline shadow | #ccc (0px 0.4px 0px 0px) |
| Radial bg tint | rgb(214,227,242) |

## Typography

| Node | Family | Weight | Size | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| H1 (7814:29955) | General Sans (Font Family/fontFamily-display) | Medium (500) | 36px | 1.2 | 0 | #212121 |
| Subheading (7814:29957) | Open Sans | Regular 400 (bold span: Bold 700) | 20px | normal | — | #616161 |
| Card title | Open Sans | 500 (fontWeightMedium) | 16px | 1.2 | 0.25px | #212121 |
| Card author | Open Sans | 400 | 14px | 1.5 | 0.5px | #616161 (style: default/caption) |
| Button label | Open Sans | SemiBold 600 | 16px | normal (100%) | 0.25px | #f8f8f8 |
| Chrome URL | SF Pro | Regular 400 | 18px | normal | — | #202124 |

Design-token typography styles present: `display/h4` (General Sans Medium, 2.25rem, lh 1.2, ls 0), `default/caption` (Open Sans Regular, 0.875rem, lh 1.5, ls 0.5), `Button/label-default` (Open Sans SemiBold, 1rem, lh 100%, ls 0.25). Elevation/1: drop-shadow 0 2px 8px Semantic/shadow.

## Progress bar

- Track: full width of the flex-1 area (after 24px back icon + 4px gap, right padding 16), h 4px, #ededed
- Fill: 20% width, h 4px, #006c7a. State: **1/5 = 20% filled**, single continuous bar (not segmented).

## Header / footer composition

- iOS status bar (38px) with 9:41, signal/wifi/battery — all SVG assets, black.
- Browser chrome (55px): white bg + hairline, gray pill (#e8eaed, radius 30) containing centered lock icon + "supersummary.com", share icon right.
- Back arrow row (36px) with arrow_back icon 24x24 + progress bar.
- Footer: fixed-bottom container (pt 16 / pb 24 / px 16) with full-width Primary "Next" button, h 48, radius 16, bg #006c7a, label + arrow_forward icon.

## Cards (guides list)

- Container: absolute left 51 / top 232 — cards intentionally overflow the right edge of the 390px viewport (staggered "carousel/collage" effect); bottom cards run under the bottom fade gradient.
- Guide Card: bg #f8f8f8 (Semantic/background-paper), border 1px solid #d9d9d9, radius 12 (--small), padding 12, row gap 12, items-center, drop-shadow 0px 2px 4px rgba(0,0,0,0.12). Width 294px (cards 1, 3, 4, 6 explicitly w-294; cards 2 and 5 hug content / w-full of the column).
- Cover image: 64x64, radius 8 (--smaller), overflow hidden; cards 2–6 covers additionally have border 1px #d9d9d9 on the image; card 1 (Gatsby) cover is cropped (img h 111.63%, top -11.43%).
- Text column: gap 4, title 16/500/0.25px #212121, author 14/400/0.5px #616161.
- Card order & covers: 1 Gatsby (cover-great-gatsby.png), 2 Seven Year Slip (cover-seven-year-slip.png), 3 West with Giraffes (cover-west-with-giraffes.png), 4 Proof of Heaven (cover-proof-of-heaven.png), 5 Seven Year Slip (reuses cover-seven-year-slip.png), 6 West with Giraffes (reuses cover-west-with-giraffes.png).
- No "+ Add more" affordance on this screen.
- Decorative badge: hand-drawn swirl (badge-swirl-path52.svg) + SuperSummary brand icon rotated -15deg, overlapping top-right of card list (left 291, top 193). Brand icon color per DS doc: Semantic/brand-main or white only.

## Downloaded assets (design-specs/assets/09-belonging-book-club/)

| File | Used for |
|---|---|
| statusbar-battery-outline.svg | Status bar battery outline (22x11.333) |
| statusbar-battery-cap.svg | Battery cap (1.328x4) |
| statusbar-battery-fill.svg | Battery fill (18x7.333) |
| statusbar-wifi.svg | Wifi icon (15.272x10.966) |
| statusbar-mobile-signal.svg | Cell signal (17x10.667) |
| statusbar-time-941.svg | "9:41" time glyph (28.426x11.089) |
| chrome-share.svg | Chrome share icon (14.538x19.385 in 21x21) |
| chrome-lock.svg | Chrome lock icon (7.672x11.508 in 16x16) |
| arrow-back.svg | Back arrow glyph in 24x24 icon |
| highlight-vector-1.svg / -2.svg / -3.svg | 3 strokes of "Text Highlight Small" under heading (273.616x34.023 total, rotate 0.96deg) |
| badge-swirl-path52.svg | Decorative swirl badge (90.318x89.256) |
| ss-icon-vector-1..4.svg | 4 vector parts of brands/SuperSummary Icon (18.064x28.689) |
| arrow-forward.svg | Next button end icon (24x24 box) |
| cover-great-gatsby.png | Card 1 cover |
| cover-seven-year-slip.png | Cards 2 & 5 cover |
| cover-west-with-giraffes.png | Cards 3 & 6 cover |
| cover-proof-of-heaven.png | Card 4 cover |

## Raw reference code (get_design_context)

```tsx
const imgRectangle = "https://www.figma.com/api/mcp/asset/1bb9fd82-3dc0-45bb-98c2-91492c76d85c.svg";
const imgCombinedShape = "https://www.figma.com/api/mcp/asset/b77964ec-d6ef-43f6-913d-04cce66eb014.svg";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/0dbc8475-1597-4572-bad2-48173a93b2f6.svg";
const imgWifi = "https://www.figma.com/api/mcp/asset/5698bb24-a24a-49e5-affb-2c222e644b9c.svg";
const imgMobileSignal = "https://www.figma.com/api/mcp/asset/11a463cd-f3b5-42ad-86d1-9e4e1ebad841.svg";
const img941 = "https://www.figma.com/api/mcp/asset/6c37db2b-61a5-4c00-a592-2cc58966ef63.svg";
const imgGuideCoverImage = "https://www.figma.com/api/mcp/asset/2db1c93d-9ac9-4978-9076-3b4bd4cd5226.png";
const imgGuideCoverImage1 = "https://www.figma.com/api/mcp/asset/63aef8fc-7c85-4d8a-920b-397da946b3e7.png";
const imgGuideCoverImage2 = "https://www.figma.com/api/mcp/asset/24e40d39-9788-4931-adb0-42e29e7ea297.png";
const imgGuideCoverImage3 = "https://www.figma.com/api/mcp/asset/516d1771-364b-433e-896b-8943969aad13.png";
const imgShare = "https://www.figma.com/api/mcp/asset/12f9d54b-80c5-4233-959b-057ae4cee606.svg";
const imgLock = "https://www.figma.com/api/mcp/asset/c555c9bc-8013-4c95-a1dd-e857bfea5e94.svg";
const imgVector = "https://www.figma.com/api/mcp/asset/2a0e71df-2a5b-4f02-9bdc-1a223ad3a763.svg";
const imgVector1 = "https://www.figma.com/api/mcp/asset/c63ec195-8f38-4357-9183-61701c83894c.svg";
const imgVector2 = "https://www.figma.com/api/mcp/asset/9e991ef8-929b-4d10-9038-880d57cd86e1.svg";
const imgVector3 = "https://www.figma.com/api/mcp/asset/8d0fb874-f911-456a-86ce-3c8674fa28dd.svg";
const imgPath52 = "https://www.figma.com/api/mcp/asset/a7202a05-dace-4198-b25f-bf726f83368c.svg";
const imgVector4 = "https://www.figma.com/api/mcp/asset/97dda7c3-f93a-40df-9774-d0740aa3a5ae.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/37d4e8e0-bab5-4979-915d-475ed843adb5.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/78ba1da0-1fad-4e0e-87dd-9283adf415be.svg";
const imgVector7 = "https://www.figma.com/api/mcp/asset/4f39b739-f46a-4237-b5b6-471116e7df91.svg";
const imgVector8 = "https://www.figma.com/api/mcp/asset/48edf420-f606-4314-80b3-d981fb73559a.svg";

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

export default function IPhone1314238() {
  return (
    <div className="content-stretch flex flex-col gap-[var(--12,12px)] items-start relative size-full" data-node-id="7814:29942" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 390 844' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.699999988079071'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0.050001 42.5 -26.512 0.031192 211.5 284)'><stop stop-color='rgba(214,227,242,1)' offset='0.15'/><stop stop-color='rgba(248,248,248,1)' offset='0.9'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(248, 248, 248) 0%, rgb(248, 248, 248) 100%)" }} data-name="iPhone 13 & 14 - 238">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-node-id="7814:29943" data-name="chrome">
        <SystemStatusBar className="h-[38px] overflow-clip relative shrink-0 w-[390px]" />
        <div className="h-[55px] relative shrink-0 w-[390px]" data-node-id="7814:29945" data-name="Chrome - Top">
          <div className="absolute bg-white inset-[0_0_1.82%_0] shadow-[0px_0.4px_0px_0px_#ccc]" data-node-id="I7814:29945;726:1322" data-name="bg" />
          <div className="absolute bg-[#e8eaed] bottom-[10px] h-[36px] left-[11px] right-[10px] rounded-[30px]" data-node-id="I7814:29945;726:1323" data-name="chrome-bar-input" />
          <div className="absolute overflow-clip right-[24px] size-[21px] top-[16px]" data-node-id="I7814:29945;732:2974" data-name=".icons/chrome/share">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.385px] left-1/2 top-1/2 w-[14.538px]" data-node-id="I7814:29945;732:2974;732:2858" data-name="Share">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShare} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex gap-[7px] items-center justify-center left-[calc(50%+0.41px)] top-[16px]" data-node-id="I7814:29945;726:1325">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I7814:29945;732:2892" data-name=".icons/chrome/lock">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.508px] left-1/2 top-[calc(50%+0.64px)] w-[7.672px]" data-node-id="I7814:29945;732:2892;732:2890" data-name="Lock">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['SF_Pro:Regular'] font-normal leading-[normal] relative shrink-0 text-[#202124] text-[18px] whitespace-nowrap" data-node-id="I7814:29945;726:1327" style={{ fontVariationSettings: '"wdth" 100' }}>
              supersummary.com
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[var(--4,4px)] h-[36px] items-center justify-center pl-[var(--8,8px)] pr-[var(--16,16px)] relative shrink-0 w-full" data-node-id="7815:31585">
          <div className="relative rounded-[var(--8,8px)] shrink-0 size-[24px]" data-node-id="7815:31586" data-name="<Icon>">
            <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 overflow-clip top-[20%] w-[14.4px]" data-node-id="I7815:31586;2766:616" data-name="arrow_back">
              <div className="absolute inset-[16.67%]" data-node-id="I7815:31586;2766:616;2402:73543" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-w-px place-items-start relative" data-node-id="7815:31587">
            <div className="bg-[var(--semantic\/support\/support-gray\[6\],#ededed)] col-1 h-[4px] ml-0 mt-0 relative row-1 w-full" data-node-id="7815:31588" />
            <div className="bg-[var(--semantic\/support\/support-aqua\[2\],#006c7a)] col-1 h-[4px] ml-0 mt-0 relative row-1 w-[20%]" data-node-id="7815:31589" />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="7814:29952">
        <div className="absolute content-stretch flex flex-col gap-[var(--24,24px)] items-start left-0 overflow-clip px-[var(--24,24px)] py-[var(--16,16px)] top-[13px] w-[390px]" data-node-id="7814:29953">
          <div className="absolute flex h-[38.608px] items-center justify-center left-[57px] top-[61px] w-[274.293px]" data-node-id="7814:29954">
            <div className="flex-none rotate-[0.96deg] skew-x-[-0.24deg]">
              <div className="h-[34.023px] relative w-[273.616px]" data-name="Supporting element/Text Highlight Small">
                <div className="absolute inset-[32.45%_0_21.59%_0]" data-node-id="I7814:29954;1587:1243" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[59.44%_5%_0_7.64%]" data-node-id="I7814:29954;1587:1244" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[0_7.14%_51.33%_4.95%]" data-node-id="I7814:29954;1587:1245" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-display,'General_Sans:Medium')] leading-[1.2] min-w-full not-italic relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/2\,25rem,36px)] text-center w-[min-content]" data-node-id="7814:29955">
            Get more out of your book club
          </p>
          <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] font-normal leading-[0] relative shrink-0 text-[20px] text-[color:var(--semantic\/text-secondary,#616161)] text-center w-[342px]" data-node-id="7814:29957" style={{ fontVariationSettings: '"wdth" 100' }}>
            <span className="leading-[normal]">{`With `}</span>
            <span className="font-['Open_Sans:Bold'] font-bold leading-[normal]" style={{ fontVariationSettings: '"wdth" 100' }}>{`10,000+ `}</span>
            <span className="leading-[normal]">expert-developed Study Guides</span>
          </p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[var(--16,16px)] items-start justify-center left-[51px] top-[232px]" data-node-id="7814:29958" data-name="guides">
          <div className="bg-[var(--semantic\/background-paper,#f8f8f8)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch drop-shadow-[0px_2px_4px_var(--semantic\/shadow,rgba(0,0,0,0.12))] flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0 w-[294px]" data-node-id="7814:29959" data-name="Guide Card">
            <div className="relative rounded-[var(--smaller,8px)] shrink-0 size-[64px]" data-node-id="7814:29960" data-name="Guide cover image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--smaller,8px)]">
                <img alt="" className="absolute h-[111.63%] left-0 max-w-none top-[-11.43%] w-full" src={imgGuideCoverImage} />
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="7814:29961">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start justify-center leading-[0] min-w-px relative">
                <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29962" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.2]">The Great Gatsby</p>
                </div>
                <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29963" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.5]">F. Scott Fitzgerald</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--semantic\/background-paper,#f8f8f8)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch drop-shadow-[0px_2px_4px_var(--semantic\/shadow,rgba(0,0,0,0.12))] flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0 w-full" data-node-id="7814:29964" data-name="Guide Card">
            <div className="border border-[var(--semantic\/border-light,#d9d9d9)] border-solid relative rounded-[var(--smaller,8px)] shrink-0 size-[64px]" data-node-id="7814:29965" data-name="Guide cover image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--smaller,8px)]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGuideCoverImage1} />
              </div>
            </div>
            <div className="flex flex-row items-center self-stretch" data-node-id="7814:29966">
              <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start justify-center leading-[0] relative shrink-0">
                <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29967" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.2]">The Seven Year Slip</p>
                </div>
                <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29968" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.5]">Ashley Poston</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--semantic\/background-paper,#f8f8f8)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch drop-shadow-[0px_2px_4px_var(--semantic\/shadow,rgba(0,0,0,0.12))] flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0 w-[294px]" data-node-id="7814:29969" data-name="Guide Card">
            <div className="border border-[var(--semantic\/border-light,#d9d9d9)] border-solid relative rounded-[var(--smaller,8px)] shrink-0 size-[64px]" data-node-id="7814:29970" data-name="Guide cover image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--smaller,8px)]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGuideCoverImage2} />
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="7814:29971">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start justify-center leading-[0] min-w-px relative">
                <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29972" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.2]">West with Giraffes</p>
                </div>
                <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29973" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.5]">Lynda Rutledge</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--semantic\/background-paper,#f8f8f8)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch drop-shadow-[0px_2px_4px_var(--semantic\/shadow,rgba(0,0,0,0.12))] flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0 w-[294px]" data-node-id="7814:29974" data-name="Guide Card">
            <div className="relative rounded-[var(--smaller,8px)] shrink-0 size-[64px]" data-node-id="7814:29975" data-name="Guide cover image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--smaller,8px)]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGuideCoverImage3} />
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="7814:29976">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start leading-[0] min-w-px relative">
                <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29977" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.2]">Proof of Heaven: A Neurosurgeo…</p>
                </div>
                <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29978" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.5]">Eben Alexander</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--semantic\/background-paper,#f8f8f8)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch drop-shadow-[0px_2px_4px_var(--semantic\/shadow,rgba(0,0,0,0.12))] flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0 w-full" data-node-id="7814:29979" data-name="Guide Card">
            <div className="border border-[var(--semantic\/border-light,#d9d9d9)] border-solid relative rounded-[var(--smaller,8px)] shrink-0 size-[64px]" data-node-id="7814:29980" data-name="Guide cover image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--smaller,8px)]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGuideCoverImage1} />
              </div>
            </div>
            <div className="flex flex-row items-center self-stretch" data-node-id="7814:29981">
              <div className="[word-break:break-word] content-stretch flex flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start justify-center leading-[0] relative shrink-0">
                <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29982" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.2]">The Seven Year Slip</p>
                </div>
                <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29983" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.5]">Ashley Poston</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--semantic\/background-paper,#f8f8f8)] border border-[var(--semantic\/border-light,#d9d9d9)] border-solid content-stretch drop-shadow-[0px_2px_4px_var(--semantic\/shadow,rgba(0,0,0,0.12))] flex gap-[var(--12,12px)] items-center p-[var(--12,12px)] relative rounded-[var(--small,12px)] shrink-0 w-[294px]" data-node-id="7814:29984" data-name="Guide Card">
            <div className="border border-[var(--semantic\/border-light,#d9d9d9)] border-solid relative rounded-[var(--smaller,8px)] shrink-0 size-[64px]" data-node-id="7814:29985" data-name="Guide cover image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--smaller,8px)]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGuideCoverImage2} />
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="7814:29986">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:Regular')] gap-[var(--4,4px)] h-full items-start justify-center leading-[0] min-w-px relative">
                <div className="flex flex-col font-[var(--font-weight\/fontweightmedium,500)] justify-center relative shrink-0 text-[color:var(--semantic\/text-primary,#212121)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] w-full" data-node-id="7814:29987" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.2]">West with Giraffes</p>
                </div>
                <div className="flex flex-col font-[var(--font-weight\/fontweightregular,400)] justify-center relative shrink-0 text-[color:var(--semantic\/text-secondary,#616161)] text-[length:var(--font-size\/0\,875rem,14px)] tracking-[0.5px] w-full" data-node-id="7814:29988" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[1.5]">Lynda Rutledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[291px] top-[193px]" data-node-id="7814:29989">
          <div className="absolute h-[89.256px] left-[291px] top-[193px] w-[90.318px]" data-node-id="7814:29990" data-name="Supporting element/Badge">
            <div className="absolute flex inset-0 items-center justify-center" data-node-id="I7814:29990;1531:9565" style={{ containerType: "size" }}>
              <div className="-scale-x-100 flex-none h-[hypot(-25.4289cqw,-73.6386cqh)] rotate-[160.7deg] skew-x-[0.08deg] w-[hypot(74.5711cqw,-26.3614cqh)]">
                <div className="relative size-full" data-name="path52">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPath52} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[32.387px] items-center justify-center left-[322.88px] top-[221.69px] w-[24.873px]" data-node-id="7814:29991">
            <div className="-rotate-15 flex-none">
              <div className="h-[28.689px] overflow-clip relative w-[18.064px]" data-name="brands/SuperSummary Icon">
                <div className="absolute inset-[22.18%_0.13%_55.09%_35.76%]" data-node-id="I7814:29991;816:2330" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                </div>
                <div className="absolute inset-[34.46%_21.43%_31.32%_0]" data-node-id="I7814:29991;816:2331" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                </div>
                <div className="absolute inset-[60.65%_0.1%_0.38%_0]" data-node-id="I7814:29991;816:2332" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                </div>
                <div className="absolute inset-[-0.02%_0.1%_75.05%_0]" data-node-id="I7814:29991;816:2333" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(248,248,248,0)] h-[174px] left-[-2px] to-[87.931%] to-[var(--semantic\/background-paper,#f8f8f8)] top-[529px] w-[392px]" data-node-id="7814:29992" />
        <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[var(--12,12px)] items-start justify-center left-1/2 pb-[var(--24,24px)] pt-[var(--16,16px)] px-[16px] w-[390px]" data-node-id="7815:31594" data-name="Frame">
          <div className="bg-[var(--semantic\/interactive-primary,#006c7a)] content-stretch flex gap-[var(--4,4px)] h-[48px] items-center justify-center overflow-clip px-[var(--16,16px)] py-[var(--0,0px)] relative rounded-[var(--default,16px)] shrink-0 w-full" data-node-id="7815:31595" data-name="<Button>">
            <p className="[word-break:break-word] font-[family-name:var(--font-family\/fontfamily-default,'Open_Sans:SemiBold')] font-[var(--font-weight\/fontweightsemibold,600)] leading-[normal] relative shrink-0 text-[color:var(--semantic\/text-primary-contrast,#f8f8f8)] text-[length:var(--font-size\/1rem,16px)] tracking-[0.25px] whitespace-nowrap" data-node-id="I7815:31595;141:2420" style={{ fontVariationSettings: '"wdth" 100' }}>
              Next
            </p>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I7815:31595;141:2519" data-name="End Icon">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I7815:31595;141:2421" data-name="Style=Round">
                <div className="absolute inset-[18.36%_17.54%]" data-node-id="I7815:31595;141:2421;2402:73679" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} />
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
