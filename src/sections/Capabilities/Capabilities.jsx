import React from 'react'
import "./Capabilities.css"

function Capabilities() {
  return (
    <div className="Capabilities">
        <div className="capabilities-content">
            <div className="capTxt">
                <h1>Powered by <br /><span>modern</span> technology</h1>
                <p className='capP'>Effortless stablecoin on/off ramps, intuitive developer APIs, and streamlined multi-entity management for scalable growth.</p>
            </div>
            <div className="capCards">
                <div className="capCard capCard1">
                    <h3>Crypto on and off ramp. <span>Instantly convert between fiat and crypto in the Stark app—no hidden fees.</span></h3>
                </div>
                <div className="capCard capCard2">
                    <h3>Stark API. <span>Full API access with every Stark account—read, and write your workflow your way.</span></h3>
                </div>
                <div className="capCard capCard3">
                    <h3>Multi Entity. <span>Switch effortlessly between bank accounts for your entities, between Discord servers.</span></h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Capabilities