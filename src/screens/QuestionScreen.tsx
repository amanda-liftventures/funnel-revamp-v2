import { OptionPill } from '../components/OptionPill'
import { asset } from '../assets-map'
import { FooterCTA } from '../components/FooterCTA'
import { RichText } from '../components/RichText'
import type { QuestionStep } from '../data/types'
import './QuestionScreen.css'

interface QuestionScreenProps {
  step: QuestionStep
  answers: string[]
  onAnswer: (values: string[]) => void
  onNext: () => void
}

/**
 * Generic survey question screen.
 * Single-select: tapping an option selects it and auto-advances (no footer,
 * per Figma). Multi-select: options toggle and a pinned Next button advances.
 */
export function QuestionScreen({ step, answers, onAnswer, onNext }: QuestionScreenProps) {
  const isMulti = step.select === 'multi'
  const limit = step.maxSelections ?? Infinity

  function toggle(value: string) {
    if (!isMulti) {
      onAnswer([value])
      // Let the selected state paint before advancing.
      setTimeout(onNext, 250)
      return
    }
    if (answers.includes(value)) {
      onAnswer(answers.filter((v) => v !== value))
    } else if (answers.length < limit) {
      onAnswer([...answers, value])
    }
  }

  return (
    <>
      <div className="question-content" role="radiogroup" aria-label={step.title}>
        {step.coverImage ? (
          <div className="question-title-row">
            <span className="question-cover">
              <img src={asset(step.coverImage)} alt="" />
            </span>
            <h1 className="question-title">
              <RichText text={step.title} />
            </h1>
          </div>
        ) : (
          <div className="question-title-block">
            <h1 className="question-title">
              <RichText text={step.title} />
            </h1>
            {step.subtitle && <p className="question-subtitle">{step.subtitle}</p>}
          </div>
        )}
        <div className="question-options">
          {step.options.map((opt) => (
            <OptionPill
              key={opt.value}
              label={opt.label}
              icon={opt.icon}
              selected={answers.includes(opt.value)}
              onClick={() => toggle(opt.value)}
            />
          ))}
        </div>
      </div>
      {isMulti && <FooterCTA label="Next" onClick={onNext} disabled={answers.length === 0} />}
    </>
  )
}
