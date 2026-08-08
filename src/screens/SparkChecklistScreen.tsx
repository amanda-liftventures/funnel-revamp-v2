import { FooterCTA } from '../components/FooterCTA'
import { asset } from '../assets-map'
import './SparkChecklistScreen.css'

const A = '/assets/11-spark-checklist'

/* Screen 11.4 (Figma 7868:22376) — payoff variant with a benefit checklist */
const benefits = [
  { icon: `${A}/icon-rocket-launch.svg`, text: 'Articulate and analyze with clarity' },
  { icon: `${A}/icon-auto-stories.svg`, text: 'Navigate complex texts with ease' },
  { icon: `${A}/icon-travel-explore.svg`, text: 'Discover new perspectives' },
  { icon: `${A}/icon-auto-mode.svg`, text: 'Refresh your memory in minutes' },
  { icon: `${A}/icon-question-answer.svg`, text: 'Feel prepared for every discussion' },
]

export function SparkChecklistScreen({ onNext }: { onNext: () => void }) {
  return (
    <>
      <div className="sparkck-content">
        <div className="sparkck-heading-block">
          <h1 className="sparkck-headline">
            Spark strong{' '}
            <span className="sparkck-hl-word">
              discussions
              <img src={asset(`${A}/text-highlight-magenta.svg`)} alt="" aria-hidden="true" />
            </span>
          </h1>
          <p className="sparkck-subhead">
            Ready-to-use questions, plus everything else in the Study Guide
          </p>
        </div>
        <div className="sparkck-list">
          {benefits.map((b) => (
            <div className="sparkck-row" key={b.text}>
              <img className="sparkck-row-icon" src={asset(b.icon)} alt="" />
              <p className="sparkck-row-text">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
      <FooterCTA label="Next" onClick={onNext} delayed />
    </>
  )
}
