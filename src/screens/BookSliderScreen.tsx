import { useEffect, useRef, useState } from 'react'
import { FooterCTA } from '../components/FooterCTA'
import type { SliderStep } from '../data/types'
import './BookSliderScreen.css'

/* The five support color tokens used by the book rectangles (from the Figma
   frame: orange[5], olive[5], indigo[5], magenta[5], acqua[6]) */
const BOOK_COLORS = ['#f9d4ba', '#d1ebc4', '#b1c8e3', '#edcbd0', '#cfebee']

interface BookSliderScreenProps {
  step: SliderStep
  answer: string[]
  onAnswer: (values: string[]) => void
  onNext: () => void
}

export function BookSliderScreen({ step, answer, onAnswer, onNext }: BookSliderScreenProps) {
  const answeredIndex = step.options.findIndex((o) => o.value === answer[0])
  const [index, setIndex] = useState(answeredIndex >= 0 ? answeredIndex : step.defaultIndex)
  const prevCountRef = useRef(step.options[index].count)
  // Stable random color per book position; extended lazily as the count grows
  const colorsRef = useRef<string[]>([])
  const trackRef = useRef<HTMLDivElement>(null)

  // Books beyond `count` that are still animating out after a decrease
  const [exitingCount, setExitingCount] = useState(0)
  const exitTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  const option = step.options[index]
  const count = option.count
  const renderTotal = count + exitingCount
  const colors = colorsRef.current
  while (colors.length < renderTotal) {
    colors.push(BOOK_COLORS[Math.floor(Math.random() * BOOK_COLORS.length)])
  }
  const prevCount = prevCountRef.current

  useEffect(() => () => clearTimeout(exitTimerRef.current), [])

  function select(i: number) {
    const clamped = Math.max(0, Math.min(step.options.length - 1, i))
    if (clamped === index) return
    const oldTotal = step.options[index].count + exitingCount
    const newCount = step.options[clamped].count
    clearTimeout(exitTimerRef.current)
    if (newCount < oldTotal) {
      // Reverse of the add animation: keep the removed books mounted while
      // they pop out, last book first, then prune.
      setExitingCount(oldTotal - newCount)
      const stagger = Math.min((oldTotal - newCount) * 15, 600)
      exitTimerRef.current = setTimeout(() => setExitingCount(0), stagger + 300)
    } else {
      setExitingCount(0)
    }
    prevCountRef.current = step.options[index].count
    setIndex(clamped)
    onAnswer([step.options[clamped].value])
  }

  function indexFromPointer(clientX: number) {
    const track = trackRef.current
    if (!track) return index
    const r = track.getBoundingClientRect()
    const fraction = (clientX - r.left) / r.width
    return Math.round(fraction * (step.options.length - 1))
  }

  function onPointerDown(e: React.PointerEvent) {
    e.currentTarget.setPointerCapture(e.pointerId)
    select(indexFromPointer(e.clientX))
  }

  function onPointerMove(e: React.PointerEvent) {
    if (e.buttons > 0) select(indexFromPointer(e.clientX))
  }

  return (
    <>
      <div className="slider-content">
        <div className="slider-title-block">
          <h1 className="slider-title">{step.title}</h1>
        </div>
        <div className="slider-body">
          <p className="slider-value">
            {option.label} {step.unit}
          </p>
          <div className="slider-row">
            <button
              className="slider-step-btn"
              onClick={() => select(index - 1)}
              disabled={index === 0}
              aria-label="Fewer books"
            >
              <svg width="19.2" height="19.2" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4.167 10.833h11.666V9.167H4.167v1.666Z" fill="#006c7a" />
              </svg>
            </button>
            <div
              ref={trackRef}
              className="slider-track-area"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={step.options.length - 1}
              aria-valuenow={index}
              aria-valuetext={`${option.label} ${step.unit}`}
              tabIndex={0}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') select(index - 1)
                if (e.key === 'ArrowRight') select(index + 1)
              }}
            >
              <div className="slider-track" />
              {step.options.map((o, i) => (
                <span
                  key={o.value}
                  className={`slider-dot${i === index ? ' slider-dot--active' : ''}`}
                  style={{ left: `${(i / (step.options.length - 1)) * 100}%` }}
                />
              ))}
            </div>
            <button
              className="slider-step-btn"
              onClick={() => select(index + 1)}
              disabled={index === step.options.length - 1}
              aria-label="More books"
            >
              <svg width="19.2" height="19.2" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M15.833 10.833h-5v5H9.167v-5h-5V9.167h5v-5h1.666v5h5v1.666Z" fill="#006c7a" />
              </svg>
            </button>
          </div>
          <div className="slider-books" aria-hidden="true">
            {Array.from({ length: renderTotal }, (_, i) => {
              const isNew = i >= prevCount && i < count
              const isExiting = i >= count
              return (
                <span
                  key={i}
                  className={`slider-book${isNew ? ' slider-book--new' : ''}${isExiting ? ' slider-book--out' : ''}`}
                  style={{
                    background: colors[i],
                    animationDelay: isNew
                      ? `${Math.min((i - prevCount) * 15, 600)}ms`
                      : isExiting
                        ? `${Math.min((renderTotal - 1 - i) * 15, 600)}ms`
                        : undefined,
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
      <FooterCTA label="Next" onClick={onNext} />
    </>
  )
}
