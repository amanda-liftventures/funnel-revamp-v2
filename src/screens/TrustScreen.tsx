import { FooterCTA } from '../components/FooterCTA'
import { asset } from '../assets-map'
import './TrustScreen.css'

const A = '/assets/05-trust'

export function TrustScreen({ onNext }: { onNext: () => void }) {
  return (
    <>
      <div className="trust-content">
        <div className="trust-title-block">
          <h1 className="trust-headline">
            Trusted by readers{' '}
            <span className="trust-hl-word">
              like you
              <img
                src={asset(`${A}/text-highlight-orange.svg`)}
                alt=""
                aria-hidden="true"
              />
            </span>
          </h1>
        </div>
        <div className="trust-carousel">
          <img className="trust-carousel-strip" src={asset(`${A}/senja-carousel.svg`)} alt="Reader testimonials" />
        </div>
        <img
          className="trust-social-proof"
          src={asset(`${A}/social-proof.svg`)}
          alt="Rated Excellent — 995 reviews on Trustpilot"
        />
      </div>
      <FooterCTA label="Next" onClick={onNext} />
    </>
  )
}
