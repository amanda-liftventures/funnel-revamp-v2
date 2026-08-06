import './OptionPill.css'
import { asset } from '../assets-map'

interface OptionPillProps {
  label: string
  icon?: string
  selected: boolean
  onClick: () => void
}

/**
 * DS <Radio Button> (Style=Icon) — pill-shaped selectable option.
 * Unchecked: transparent fill, #bfbfbf border, #616161 label.
 * Checked: interactive-primary fill per DS component docs.
 */
export function OptionPill({ label, icon, selected, onClick }: OptionPillProps) {
  return (
    <button
      className={`option-pill${selected ? ' option-pill--selected' : ''}`}
      onClick={onClick}
      role="radio"
      aria-checked={selected}
    >
      {icon && (
        <span className="option-pill-icon">
          <img src={asset(icon)} alt="" />
        </span>
      )}
      <span className="option-pill-label">{label}</span>
    </button>
  )
}
