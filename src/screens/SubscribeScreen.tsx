import { FooterCTA } from '../components/FooterCTA'
import { asset } from '../assets-map'
import './SubscribeScreen.css'

const A = '/assets/13-subscribe-risk-free'

const checklist = [
  'From $3 a month, billed annually',
  '7-day Money-Back Guarantee',
  'Cancel anytime',
]

export function SubscribeScreen({ onSubscribe }: { onSubscribe: () => void }) {
  return (
    <>
      <div className="subscribe-content">
        <div className="subscribe-title-block">
          <div className="subscribe-highlight" aria-hidden="true">
            <img src={asset(`${A}/highlight-stroke-1.svg`)} alt="" />
            <img src={asset(`${A}/highlight-stroke-2.svg`)} alt="" />
            <img src={asset(`${A}/highlight-stroke-3.svg`)} alt="" />
            <img src={asset(`${A}/highlight-stroke-4.svg`)} alt="" />
            <img src={asset(`${A}/highlight-stroke-5.svg`)} alt="" />
          </div>
          <h1 className="subscribe-headline">Subscribe Risk-Free for 7 Days</h1>
        </div>
        <div className="subscribe-benefits">
          {checklist.map((row) => (
            <div className="subscribe-row" key={row}>
              <img src={asset(`${A}/checklist-check-icon.svg`)} alt="" className="subscribe-check" />
              <span>{row}</span>
            </div>
          ))}
          <div className="subscribe-ratings">
            <div className="rating-widget">
              <img className="rw-logo rw-logo--apple" src={asset(`${A}/appstore-apple-logo.png`)} alt="" />
              <img className="rw-score rw-score--apple" src={asset(`${A}/appstore-rating-4-8.svg`)} alt="4.8" />
              <span className="rw-stars">
                <img src={asset(`${A}/appstore-star-1.svg`)} alt="" />
                <img src={asset(`${A}/appstore-star-2.svg`)} alt="" />
                <img src={asset(`${A}/appstore-star-3.svg`)} alt="" />
                <img src={asset(`${A}/appstore-star-4.svg`)} alt="" />
              </span>
              <img className="rw-label rw-label--apple" src={asset(`${A}/appstore-label-in-app-store.svg`)} alt="In App Store" />
            </div>
            <div className="rating-widget">
              <img className="rw-logo rw-logo--play" src={asset(`${A}/googleplay-logo.png`)} alt="" />
              <img className="rw-score rw-score--play" src={asset(`${A}/googleplay-rating-4-5.svg`)} alt="4.5" />
              <span className="rw-stars">
                <img src={asset(`${A}/googleplay-star-1.svg`)} alt="" />
                <img src={asset(`${A}/googleplay-star-2.svg`)} alt="" />
                <img src={asset(`${A}/googleplay-star-3.svg`)} alt="" />
                <img src={asset(`${A}/googleplay-star-4.svg`)} alt="" />
              </span>
              <img className="rw-label rw-label--play" src={asset(`${A}/googleplay-label-in-google-play.svg`)} alt="In Google Play" />
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-footer">
        <FooterCTA label="Next" onClick={onSubscribe} delayed />
      </div>
    </>
  )
}
