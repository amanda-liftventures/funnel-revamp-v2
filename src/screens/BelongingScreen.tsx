import { FooterCTA } from '../components/FooterCTA'
import { asset } from '../assets-map'
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

export function BelongingScreen({ onNext }: { onNext: () => void }) {
  return (
    <>
      <div className="belonging-content">
        <div className="belonging-copy">
          <h1 className="belonging-headline">
            Get more out of{' '}
            <span className="belonging-hl-word">
              your book club
              <img src={asset(`${A}/text-highlight-indigo.svg`)} alt="" aria-hidden="true" />
            </span>
          </h1>
          <p className="belonging-subhead">
            With <strong>10,000+ </strong>expert-developed Study Guides
          </p>
        </div>
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
        <img className="belonging-badge" src={asset(`${A}/badge.svg`)} alt="" aria-hidden="true" />
        <div className="belonging-fade" aria-hidden="true" />
      </div>
      <div className="belonging-footer">
        <FooterCTA label="Next" onClick={onNext} delayed />
      </div>
    </>
  )
}
