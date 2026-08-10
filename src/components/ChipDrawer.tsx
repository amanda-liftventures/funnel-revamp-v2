import { useEffect } from 'react'
import { asset } from '../assets-map'
import type { ChipDrawerContent } from '../data/types'
import './ChipDrawer.css'

const A = '/assets/12-chip-drawers'

interface ChipDrawerProps {
  drawer: ChipDrawerContent
  /** Drives the slide direction: true = up/open, false = down/closing */
  open: boolean
  onClose: () => void
}

/**
 * Bottom sheet shown when a Study Guide chip is tapped (Figma: 390x365,
 * top corners 16, shadow 0 -6 16). Slides up on open and down on close;
 * dismissed by the X, the scrim, or Escape.
 */
export function ChipDrawer({ drawer, open, onClose }: ChipDrawerProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className={`chip-drawer-layer${open ? ' chip-drawer-layer--open' : ''}`}>
      <div className="chip-drawer-scrim" onClick={onClose} aria-hidden="true" />
      <div
        className="chip-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={drawer.title}
      >
        <img
          className="chip-drawer-illo"
          src={asset(`${A}/${drawer.image}`)}
          alt=""
          aria-hidden="true"
        />
        <button className="chip-drawer-close" onClick={onClose} aria-label="Close">
          <img src={asset(`${A}/icon-close.svg`)} alt="" />
        </button>
        <div className="chip-drawer-text">
          <h2 className="chip-drawer-title">{drawer.title}</h2>
          <p className="chip-drawer-body">{drawer.body}</p>
        </div>
      </div>
    </div>
  )
}
