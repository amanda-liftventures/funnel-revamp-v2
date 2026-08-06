import timeSvg from '../assets/chrome/statusbar-time-941.svg'
import signalSvg from '../assets/chrome/statusbar-mobile-signal.svg'
import wifiSvg from '../assets/chrome/statusbar-wifi.svg'
import batteryOutlineSvg from '../assets/chrome/statusbar-battery-outline.svg'
import batteryCapSvg from '../assets/chrome/statusbar-battery-cap.svg'
import batteryFillSvg from '../assets/chrome/statusbar-battery-fill.svg'
import lockSvg from '../assets/chrome/chrome-lock.svg'
import shareSvg from '../assets/chrome/chrome-share.svg'
import './DeviceChrome.css'

/**
 * Simulated iOS status bar + Safari-style browser chrome, matching the Figma
 * frames 1:1. Rendered in demo/mockup mode only — on a real deployment the
 * device provides both.
 */
export function DeviceChrome() {
  return (
    <div className="device-chrome">
      <div className="status-bar">
        <img className="status-time" src={timeSvg} alt="" />
        <img className="status-signal" src={signalSvg} alt="" />
        <img className="status-wifi" src={wifiSvg} alt="" />
        <img className="status-battery-outline" src={batteryOutlineSvg} alt="" />
        <img className="status-battery-cap" src={batteryCapSvg} alt="" />
        <img className="status-battery-fill" src={batteryFillSvg} alt="" />
      </div>
      <div className="chrome-bar">
        <div className="chrome-bar-input">
          <div className="chrome-center">
            <span className="chrome-lock">
              <img src={lockSvg} alt="" />
            </span>
            <span className="chrome-url">supersummary.com</span>
          </div>
          <img className="chrome-share" src={shareSvg} alt="" />
        </div>
      </div>
    </div>
  )
}
