import { FooterCTA } from '../components/FooterCTA'
import { asset } from '../assets-map'
import type { PayoffCopy, SparkChecklistStep } from '../data/types'
import './SparkChecklistScreen.css'

const A = '/assets/11-spark-checklist'

/* Screen 11.4 (Figma 7868:22376) — payoff variant with a benefit checklist.
   Headline and subhead are personalized by the Q2 answer; the checklist is
   the same for everyone. */
const benefits = [
  { icon: `${A}/icon-rocket-launch.svg`, text: 'Articulate and analyze with clarity' },
  { icon: `${A}/icon-auto-stories.svg`, text: 'Navigate complex texts with ease' },
  { icon: `${A}/icon-travel-explore.svg`, text: 'Discover new perspectives' },
  { icon: `${A}/icon-auto-mode.svg`, text: 'Refresh your memory in minutes' },
  { icon: `${A}/icon-question-answer.svg`, text: 'Feel prepared for every discussion' },
]

interface SparkChecklistScreenProps {
  step: SparkChecklistStep
  /** Answer to the driving question (Q2); empty falls back to `default` copy */
  personalizeBy: string[]
  onNext: () => void
}

/** Headline split around the phrase carrying the brush highlight. */
function Headline({ copy }: { copy: PayoffCopy }) {
  const at = copy.highlight ? copy.headline.indexOf(copy.highlight) : -1
  if (at < 0) return <>{copy.headline}</>
  return (
    <>
      {copy.headline.slice(0, at)}
      <span className="sparkck-hl-word">
        {copy.highlight}
        <img src={asset(`${A}/text-highlight-magenta.svg`)} alt="" aria-hidden="true" />
      </span>
      {copy.headline.slice(at + copy.highlight!.length)}
    </>
  )
}

export function SparkChecklistScreen({ step, personalizeBy, onNext }: SparkChecklistScreenProps) {
  const copy = step.copy[personalizeBy[0]] ?? step.copy.default

  return (
    <>
      <div className="sparkck-content">
        <div className="sparkck-heading-block">
          <h1 className="sparkck-headline">
            <Headline copy={copy} />
          </h1>
          <p className="sparkck-subhead">{copy.subhead}</p>
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
