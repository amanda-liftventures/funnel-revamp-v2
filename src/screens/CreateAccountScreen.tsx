import { asset } from '../assets-map'
import type { CreateAccountStep } from '../data/types'
import './CreateAccountScreen.css'

/**
 * Static, non-interactive render of the existing checkout's Create Account
 * page — marks the end of the funnel and the start of checkout. The frame
 * image includes its own device chrome, so the app chrome is hidden here.
 */
export function CreateAccountScreen({ step }: { step: CreateAccountStep }) {
  return (
    <div className="create-account">
      <img src={asset(step.image)} alt="Create Your Account — checkout begins" />
    </div>
  )
}
