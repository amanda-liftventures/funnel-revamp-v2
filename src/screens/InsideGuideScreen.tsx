import { useState } from 'react'
import { FooterCTA } from '../components/FooterCTA'
import { ChipDrawer } from '../components/ChipDrawer'
import { asset } from '../assets-map'
import type { ChipDrawerContent } from '../data/types'
import './InsideGuideScreen.css'

const A = '/assets/12-inside-study-guide'

/** Each chip opens its own bottom sheet (Figma: nine drawer frames). */
const chips: { icon: string; label: string; drawer: ChipDrawerContent }[] = [
  {
    icon: `${A}/chip-icon-interests.svg`,
    label: 'Symbols & Motifs',
    drawer: {
      title: 'Uncover the hidden layers',
      body: 'Get instant, personalized insights and inspiration from our Study Guides.',
      image: 'symbols-motifs.png',
    },
  },
  {
    icon: `${A}/chip-icon-question-answer.svg`,
    label: 'Discussion Questions',
    drawer: {
      title: 'Spark great conversations',
      body: 'Customize insightful questions for more meaningful book discussions.',
      image: 'discussion-questions.png',
    },
  },
  {
    icon: `${A}/chip-icon-menu-book.svg`,
    label: 'Chapter Summaries',
    drawer: {
      title: 'Revisit any chapter',
      body: 'Refresh your memory on key plot points without rereading the whole book.',
      image: 'chapter-summaries.png',
    },
  },
  {
    icon: `${A}/chip-icon-live-help.svg`,
    label: 'Quizzes',
    drawer: {
      title: 'Check your understanding',
      body: 'Test your knowledge and confirm comprehension with interactive quizzes.',
      image: 'quizzes.png',
    },
  },
  {
    icon: `${A}/chip-icon-face.svg`,
    label: 'Character Lists & Analyses',
    drawer: {
      title: "Know who's who",
      body: "Follow each character's role, relationships, and motivations as the story unfolds.",
      image: 'characters.png',
    },
  },
  {
    icon: `${A}/chip-icon-theater-comedy.svg`,
    label: 'Themes',
    drawer: {
      title: 'Grasp the big ideas',
      body: 'Understand what the book is really about—and why it still resonates.',
      image: 'themes.png',
    },
  },
  {
    icon: `${A}/chip-icon-restaurant.svg`,
    label: 'Recipes',
    drawer: {
      title: 'Bring books to life',
      body: 'Create shareworthy snacks or clever cocktails inspired by your current read.',
      image: 'recipes.png',
    },
  },
  {
    icon: `${A}/chip-icon-format-quote.svg`,
    label: 'Important Quotes',
    drawer: {
      title: 'Find the perfect line',
      body: 'Revisit key passages with analysis that explains why each one matters.',
      image: 'quotes.png',
    },
  },
  {
    icon: `${A}/chip-icon-chatbot.svg`,
    label: 'Ask SuperSummary',
    drawer: {
      title: 'Answer any book question',
      body: 'Get instant, personalized insights and inspiration from our Study Guides.',
      image: 'ask-supersummary.png',
    },
  },
]

export function InsideGuideScreen({ onNext }: { onNext: () => void }) {
  // `active` holds the sheet being shown; `open` drives the slide direction so
  // the close animation can finish before unmounting.
  const [active, setActive] = useState<ChipDrawerContent | null>(null)
  const [open, setOpen] = useState(false)

  function openDrawer(drawer: ChipDrawerContent) {
    setActive(drawer)
    requestAnimationFrame(() => setOpen(true))
  }

  function closeDrawer() {
    setOpen(false)
    setTimeout(() => setActive(null), 300)
  }

  return (
    <>
      <div className="inside-content">
        <div className="inside-body">
          <span className="inside-cover">
            <img src={asset(`${A}/study-guide-cover.png`)} alt="" />
          </span>
          <h1 className="inside-headline">
            Inside of your Study Guide for <em>The Great Gatsby</em>:
          </h1>
        </div>
        <div className="inside-claims">
          <div className="inside-chips">
            {chips.map((c) => (
              <button
                className="inside-chip"
                key={c.label}
                onClick={() => openDrawer(c.drawer)}
                aria-haspopup="dialog"
              >
                <img src={asset(c.icon)} alt="" />
                <span>{c.label}</span>
              </button>
            ))}
          </div>
          <p className="inside-much-more">+ much more</p>
        </div>
      </div>
      <FooterCTA label="Next" onClick={onNext} delayed />
      {active && <ChipDrawer drawer={active} open={open} onClose={closeDrawer} />}
    </>
  )
}
