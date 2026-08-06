import { FooterCTA } from '../components/FooterCTA'
import { asset } from '../assets-map'
import './SparkDetailScreen.css'

const A = '/assets/11b-spark-discussions-detail'

export function SparkDetailScreen({ onNext }: { onNext: () => void }) {
  return (
    <>
      <div className="spark-content">
        <div className="spark-heading-block">
          <div className="spark-highlight" aria-hidden="true">
            <img src={asset(`${A}/highlight-medium-vector-1.svg`)} alt="" />
            <img src={asset(`${A}/highlight-medium-vector-2.svg`)} alt="" />
            <img src={asset(`${A}/highlight-medium-vector-3.svg`)} alt="" />
            <img src={asset(`${A}/highlight-medium-vector-4.svg`)} alt="" />
            <img src={asset(`${A}/highlight-medium-vector-5.svg`)} alt="" />
          </div>
          <h1 className="spark-headline">Spark strong discussions</h1>
          <p className="spark-subhead">
            Ready-to-use questions for every theme, ready to share with your group.
          </p>
        </div>
        <div className="spark-features">
          <img className="spark-illustration" src={asset(`${A}/features.png`)} alt="" />
        </div>
      </div>
      <FooterCTA label="Next" onClick={onNext} />
    </>
  )
}
