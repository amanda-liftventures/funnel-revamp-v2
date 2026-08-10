import { FooterCTA } from '../components/FooterCTA'
import { asset } from '../assets-map'
import type { BelongingStep, HeadlineCopy } from '../data/types'
import './BelongingScreen.css'

const A = '/assets/09-belonging-book-club'

const cards = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: `${A}/cover-great-gatsby.png`, crop: true },
  { title: 'The Seven Year Slip', author: 'Ashley Poston', cover: `${A}/cover-seven-year-slip.png` },
  { title: 'West with Giraffes', author: 'Lynda Rutledge', cover: `${A}/cover-west-with-giraffes.png` },
  { title: 'Proof of Heaven: A Neurosurgeo…', author: 'Eben Alexander', cover: `${A}/cover-proof-of-heaven.png` },
  { title: 'The Seven Year Slip', author: 'Ashley Poston', cover: `${A}/cover-seven-year-slip.png` },
  { title: 'West with Giraffes', author: 'Lynda Rutledge', cover: `${A}/cover-west-with-giraffes.png` },
]

interface BelongingScreenProps {
  step: BelongingStep
  /** Answer to the driving question (Q2); empty falls back to `default` copy */
  personalizeBy: string[]
  onNext: () => void
}

/** Headline split around the phrase carrying the brush highlight. */
function Headline({ copy }: { copy: HeadlineCopy }) {
  const at = copy.highlight ? copy.headline.indexOf(copy.highlight) : -1
  if (at < 0) return <>{copy.headline}</>
  return (
    <>
      {copy.headline.slice(0, at)}
      <span className="belonging-hl-word">{copy.highlight}</span>
      {copy.headline.slice(at + copy.highlight!.length)}
    </>
  )
}

export function BelongingScreen({ step, personalizeBy, onNext }: BelongingScreenProps) {
  const copy = step.copy[personalizeBy[0]] ?? step.copy.default

  return (
    <>
      <div className="belonging-content">
        <div className="belonging-copy">
          <h1 className="belonging-headline">
            <Headline copy={copy} />
          </h1>
          <p className="belonging-subhead">
            With <strong>10,000+ </strong>expert-developed Study Guides
          </p>
        </div>
        {/* Cards flow below the copy so a taller personalized headline pushes
            them down instead of overlapping; the badge rides with the cards. */}
        <div className="belonging-cards-wrap">
          <img className="belonging-badge" src={asset(`${A}/badge.svg`)} alt="" aria-hidden="true" />
          <div className="belonging-cards">
            {cards.map((c, i) => (
              <div className="belonging-card" key={i}>
                <img
                  className={`belonging-card-cover${c.crop ? ' belonging-card-cover--crop' : ' belonging-card-cover--border'}`}
                  src={asset(c.cover)}
                  alt=""
                />
                <div className="belonging-card-text">
                  <p className="belonging-card-title">{c.title}</p>
                  <p className="belonging-card-author">{c.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="belonging-fade" aria-hidden="true" />
      </div>
      <div className="belonging-footer">
        <FooterCTA label="Next" onClick={onNext} delayed />
      </div>
    </>
  )
}
