import { FooterCTA } from '../components/FooterCTA'
import { asset } from '../assets-map'
import './WayMoreScreen.css'

const A = '/assets/11-way-more'

const features = [
  {
    id: 'quiz',
    tile: `${A}/tile-chatbot.png`,
    title: 'Refresh your memory ',
    body: 'Quizzes on every Study Guide help you check what stuck, in minutes.',
  },
  {
    id: 'discussions',
    tile: `${A}/tile-dqg.png`,
    title: 'Spark strong discussions',
    body: 'Ready-to-use questions for every theme, ready to share with your group.',
  },
  {
    id: 'audio',
    tile: `${A}/tile-audio.png`,
    title: 'Listen on the go',
    body: 'Audio Study Guides keep you up to speed between meetings.',
  },
]

interface WayMoreScreenProps {
  onNext: () => void
}

export function WayMoreScreen({ onNext }: WayMoreScreenProps) {
  return (
    <>
      <div className="waymore-content">
        <div className="waymore-heading-block">
          <div className="waymore-highlight" aria-hidden="true">
            <img src={asset(`${A}/highlight-medium-vector-1.svg`)} alt="" />
            <img src={asset(`${A}/highlight-medium-vector-2.svg`)} alt="" />
            <img src={asset(`${A}/highlight-medium-vector-3.svg`)} alt="" />
            <img src={asset(`${A}/highlight-medium-vector-4.svg`)} alt="" />
            <img src={asset(`${A}/highlight-medium-vector-5.svg`)} alt="" />
          </div>
          <h1 className="waymore-headline">
            Way more than <br />a summary
          </h1>
          <p className="waymore-subhead">Your all-in-one reading companion</p>
        </div>
        <div className="waymore-features">
          {features.map((f) => (
            <div className="waymore-card" key={f.id}>
              <img className="waymore-card-tile" src={asset(f.tile)} alt="" />
              <span className="waymore-card-text">
                <span className="waymore-card-title">{f.title}</span>
                <span className="waymore-card-body">{f.body}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <FooterCTA label="Next" onClick={onNext} />
    </>
  )
}
