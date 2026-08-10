import { useState } from 'react'
import { DeviceChrome } from './components/DeviceChrome'
import { ProgressBar } from './components/ProgressBar'
import { WelcomeScreen } from './screens/WelcomeScreen'
import { ValuePropsScreen } from './screens/ValuePropsScreen'
import { QuestionScreen } from './screens/QuestionScreen'
import { BookSliderScreen } from './screens/BookSliderScreen'
import { TrustScreen } from './screens/TrustScreen'
import { BelongingScreen } from './screens/BelongingScreen'
import { SparkChecklistScreen } from './screens/SparkChecklistScreen'
import { InsideGuideScreen } from './screens/InsideGuideScreen'
import { SubscribeScreen } from './screens/SubscribeScreen'
import { CreateAccountScreen } from './screens/CreateAccountScreen'
import funnelJson from './data/funnel.json'
import type { FunnelData, FunnelStep } from './data/types'
import { getVariant, stepsForVariant } from './variant'

const funnel = funnelJson as FunnelData

// Usability-test variants, chosen by `?variant=` on the URL:
//   ?variant=complete → the full flow (default)
//   ?variant=compact  → same behaviour, minus the reading-habit questions
// Read once at module load so the flow can't change mid-session.
const variant = getVariant()
const steps = stepsForVariant(funnel.steps, variant)

export default function App() {
  const [stepIndex, setStepIndex] = useState(0)
  // Answers live for the session only (retained when navigating back/forward);
  // every fresh load starts with all options in their default state.
  const [answers, setAnswers] = useState<Record<string, string[]>>({})

  const step: FunnelStep = steps[stepIndex]

  function next() {
    setStepIndex((i) => Math.min(i + 1, steps.length - 1))
  }

  function back() {
    setStepIndex((i) => Math.max(i - 1, 0))
  }

  // Real progress: equal increments per step, reaching 100% on the Subscribe
  // screen. The Create Account end screen is checkout, not funnel — it shows
  // no chrome or progress and is excluded from the denominator.
  const isEndScreen = step.type === 'create-account'
  const showProgress = !isEndScreen && stepIndex > 0
  const progress = stepIndex / (steps.length - 2)

  return (
    <div className="phone" data-variant={variant}>
      {!isEndScreen && <DeviceChrome />}
      {showProgress && <ProgressBar progress={progress} onBack={stepIndex > 0 ? back : undefined} />}
      {renderStep(step)}
    </div>
  )

  function renderStep(s: FunnelStep) {
    switch (s.type) {
      case 'welcome':
        return <WelcomeScreen onGetStarted={next} />
      case 'value-props':
        return <ValuePropsScreen onNext={next} />
      case 'question':
        return (
          <QuestionScreen
            step={s}
            answers={answers[s.id] ?? []}
            onAnswer={(values) => setAnswers((a) => ({ ...a, [s.id]: values }))}
            onNext={next}
          />
        )
      case 'slider':
        return (
          <BookSliderScreen
            step={s}
            answer={answers[s.id] ?? []}
            onAnswer={(values) => setAnswers((a) => ({ ...a, [s.id]: values }))}
            onNext={next}
          />
        )
      case 'trust':
        return <TrustScreen onNext={next} />
      case 'belonging':
        return (
          <BelongingScreen
            step={s}
            personalizeBy={answers[s.personalizedBy] ?? []}
            onNext={next}
          />
        )
      case 'spark-checklist':
        return (
          <SparkChecklistScreen
            step={s}
            personalizeBy={answers[s.personalizedBy] ?? []}
            onNext={next}
          />
        )
      case 'inside-guide':
        return <InsideGuideScreen onNext={next} />
      case 'subscribe':
        return <SubscribeScreen onSubscribe={next} />
      case 'create-account':
        return <CreateAccountScreen step={s} />
    }
  }
}
