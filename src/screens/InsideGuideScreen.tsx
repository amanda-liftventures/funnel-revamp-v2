import { FooterCTA } from '../components/FooterCTA'
import { asset } from '../assets-map'
import './InsideGuideScreen.css'

const A = '/assets/12-inside-study-guide'

const chips = [
  { icon: `${A}/chip-icon-interests.svg`, label: 'Symbols & Motifs' },
  { icon: `${A}/chip-icon-question-answer.svg`, label: 'Discussion Questions' },
  { icon: `${A}/chip-icon-menu-book.svg`, label: 'Chapter Summaries' },
  { icon: `${A}/chip-icon-format-quote.svg`, label: 'Important Quotes' },
  { icon: `${A}/chip-icon-face.svg`, label: 'Character Lists & Analyses' },
  { icon: `${A}/chip-icon-theater-comedy.svg`, label: 'Themes' },
]

export function InsideGuideScreen({ onNext }: { onNext: () => void }) {
  return (
    <>
      <div className="inside-content">
        <div className="inside-body">
          <span className="inside-cover">
            <img src={asset(`${A}/study-guide-cover.png`)} alt="" />
          </span>
          <h1 className="inside-headline">
            Inside of your Study Guide for <em>The Great Gatsby</em>:
          </h1>
        </div>
        <div className="inside-claims">
          <div className="inside-chips">
            {chips.map((c) => (
              <span className="inside-chip" key={c.label}>
                <img src={asset(c.icon)} alt="" />
                <span>{c.label}</span>
              </span>
            ))}
          </div>
          <p className="inside-much-more">+ much more</p>
        </div>
      </div>
      <FooterCTA label="Next" onClick={onNext} />
    </>
  )
}
