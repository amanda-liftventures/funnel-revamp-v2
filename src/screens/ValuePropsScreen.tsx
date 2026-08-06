import { FooterCTA } from '../components/FooterCTA'
import { asset } from '../assets-map'
import './ValuePropsScreen.css'

const A = '/assets/02-value-props'

const callouts = [
  { icon: `${A}/chip-olive-rocket.svg`, text: '8X more resources than SparkNotes and CliffsNotes.' },
  { icon: `${A}/chip-indigo-book.svg`, text: 'A library that keeps up with you — 100+ new titles monthly.' },
  { icon: `${A}/chip-magenta-phone.svg`, text: 'Audio Study Guides, PDFs, and our app for reading on the go.' },
]

export function ValuePropsScreen({ onNext }: { onNext: () => void }) {
  return (
    <>
      <div className="vp-content">
        <div className="vp-headline-block">
          <h1 className="vp-headline">
            See what makes <br />
            us{' '}
            <span className="vp-hl-word">
              different
              <img
                src={asset(`${A}/text-highlight-light-acqua.svg`)}
                alt=""
                aria-hidden="true"
              />
            </span>
          </h1>
        </div>
        <div className="vp-callouts">
          {callouts.map((c, i) => (
            <div className="vp-callout" key={i}>
              <img className="vp-callout-chip" src={asset(c.icon)} alt="" />
              <p className="vp-callout-text">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
      <FooterCTA label="Next" onClick={onNext} delayed />
    </>
  )
}
