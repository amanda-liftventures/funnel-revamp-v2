import './WelcomeScreen.css'
import { asset } from '../assets-map'
import arrowForward from '../assets/chrome/button-icon-arrow-forward.svg'

const A = '/assets/01-welcome'

interface WelcomeScreenProps {
  onGetStarted: () => void
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  const upper = asset(`${A}/guides-strip-upper.svg`)
  const lower = asset(`${A}/guides-strip-lower.svg`)
  return (
    <div className="welcome">
      <div className="welcome-main">
        <div className="welcome-collage" aria-hidden="true">
          {/* Each strip is duplicated so the marquee loops seamlessly */}
          <div className="welcome-strip welcome-strip--upper">
            <img src={upper} alt="" />
            <img src={upper} alt="" />
          </div>
          <div className="welcome-strip welcome-strip--lower">
            <img src={lower} alt="" />
            <img src={lower} alt="" />
          </div>
        </div>
        <div className="welcome-text">
          <img
            className="welcome-highlight"
            src={asset(`${A}/text-highlight-small-acqua.svg`)}
            alt=""
            aria-hidden="true"
          />
          <h1 className="welcome-headline">Your next great read starts on SuperSummary</h1>
          <p className="welcome-subhead">
            Answer a few quick questions, and we'll show you around based on what you're reading.
          </p>
        </div>
      </div>
      <div className="welcome-footer">
        <button className="ds-button ds-button--primary-contrast welcome-cta" onClick={onGetStarted}>
          <span>Get Started</span>
          <span className="ds-button-icon">
            <img src={arrowForward} alt="" />
          </span>
        </button>
        <div className="welcome-signin">
          <span>Already have an account?</span>
          <a
            className="ds-link ds-link--contrast"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  )
}
