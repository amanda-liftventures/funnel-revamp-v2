import arrowBackSvg from '../assets/chrome/icon-arrow-back.svg'
import './ProgressBar.css'

interface ProgressBarProps {
  /** 0..1 fraction of the track that is filled */
  progress: number
  onBack?: () => void
}

export function ProgressBar({ progress, onBack }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      <button
        className="progress-back"
        onClick={onBack}
        disabled={!onBack}
        aria-label="Go back"
        style={{ visibility: onBack ? 'visible' : 'hidden' }}
      >
        <img src={arrowBackSvg} alt="" />
      </button>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${Math.round(progress * 1000) / 10}%` }}
        />
      </div>
    </div>
  )
}
