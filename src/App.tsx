import { useState } from 'react'
import { DeviceChrome } from './components/DeviceChrome'
import { ProgressBar } from './components/ProgressBar'
import { WelcomeScreen } from './screens/WelcomeScreen'
import { ValuePropsScreen } from './screens/ValuePropsScreen'
import { QuestionScreen } from './screens/QuestionScreen'
import { TrustScreen } from './screens/TrustScreen'
import { BelongingScreen } from './screens/BelongingScreen'
import { WayMoreScreen } from './screens/WayMoreScreen'
import { InsideGuideScreen } from './screens/InsideGuideScreen'
import { SubscribeScreen } from './screens/SubscribeScreen'
import { CreateAccountScreen } from './screens/CreateAccountScreen'
import funnelJson from './data/funnel.json'
import type { FunnelData, FunnelStep } from './data/types'

const funnel = funnelJson as FunnelData

// This build is Variant A: the "Way more than a summary" screen only.
// Variant B (the "Spark strong discussions" detail as its own screen,
// src/screens/SparkDetailScreen.tsx) will be wired up as an alternative later.
export default function App() {
  const [stepIndex, setStepIndex] = useState(0)
  // Answers live for the session only (retained when navigating back/forward);
  // every fresh load starts with all options in their default state.
  const [answers, setAnswers] = useState<Record<string, string[]>>({})

  const step: FunnelStep = funnel.steps[stepIndex]

  function next() {
    setStepIndex((i) => Math.min(i + 1, funnel.steps.length - 1))
  }

  function back() {
    setStepIndex((i) => Math.max(i - 1, 0))
  }

  // Real progress: equal increments per step, reaching 100% on the Subscribe
  // screen. The Create Account end screen is checkout, not funnel — it shows
  // no chrome or progress and is excluded from the denominator.
  const isEndScreen = step.type === 'create-account'
  const showProgress = !isEndScreen && stepIndex > 0
  const progress = stepIndex / (funnel.steps.length - 2)

  return (
    <div className="phone">
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
      case 'trust':
        return <TrustScreen onNext={next} />
      case 'belonging':
        return <BelongingScreen onNext={next} />
      case 'way-more':
        return <WayMoreScreen onNext={next} />
      case 'inside-guide':
        return <InsideGuideScreen onNext={next} />
      case 'subscribe':
        return <SubscribeScreen onSubscribe={next} />
      case 'create-account':
        return <CreateAccountScreen step={s} />
    }
  }
}
