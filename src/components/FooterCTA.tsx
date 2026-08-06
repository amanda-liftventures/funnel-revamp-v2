import arrowForwardSvg from '../assets/chrome/button-icon-arrow-forward.svg'
import './FooterCTA.css'

interface FooterCTAProps {
  label: string
  onClick: () => void
  disabled?: boolean
  /** Hide the trailing arrow (e.g. final subscribe CTA) */
  showArrow?: boolean
}

export function FooterCTA({ label, onClick, disabled = false, showArrow = true }: FooterCTAProps) {
  return (
    <div className="footer-cta">
      <button className="ds-button ds-button--primary" onClick={onClick} disabled={disabled}>
        <span>{label}</span>
        {showArrow && (
          <span className="ds-button-icon">
            <img src={arrowForwardSvg} alt="" />
          </span>
        )}
      </button>
    </div>
  )
}
