import React from 'react'
import { Check } from "lucide-react"
import "./Pricing.css"

function Pricing() {
  return (
    <div className='Pricing'>
        <div className="pricContent">
            <div className="pricTop">
                <h1>
                   <span>Transparent</span> pricing with
                    <br />
                    features built for your business
                </h1>
            </div>
            <div className="pricCards">
                <div className="pricCard">
                    <div className="pricCardTop">
                        <p className='type'>Free</p>
                        <div className="price">
                            <p>$0</p>
                            <span>/month</span>
                        </div>
                        <p className='priceDesc'>
                            Full-service banking capabilities with simple pricing.
                        </p>
                    </div>
                    <button>Start for Free</button>
                    <div className="pricFeatures">
                        <ul>
                            <li>
                                <Check size={16} color='#fff'></Check>
                                Enterprise-grade account security and protection
                            </li>

                            <li>
                                <Check size={16} color='#fff'></Check>
                                Instant ACH transfers with low flat fees
                            </li>

                            <li>
                                <Check size={16} color='#fff'></Check>
                                Domestic wire payments with transparent pricing
                            </li>

                            <li>
                                <Check size={16} color='#fff'></Check>
                                Real-time payments via FedNow and RTP
                            </li>

                            <li>
                                <Check size={16} color='#fff'></Check>
                                Create unlimited virtual payment cards
                            </li>

                            <li>
                                <Check size={16} color='#fff'></Check>
                                Global wire transfers to supported countries
                            </li>

                            <li>
                                <Check size={16} color='#fff'></Check>
                                Low international card transaction fees
                            </li>

                            <li>
                                <Check size={16} color='#fff'></Check>
                                Seamless USDC crypto conversion and settlement
                            </li>

                            <li>
                                <Check size={16} color='#fff'></Check>
                                Flexible USDT on and off ramp services
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pricCard">
                    <div className="pricCardTop">
                        <p className='type'>Pro</p>
                        <div className="price">
                            <p>$50</p>
                            <span>/month</span>
                        </div>
                        <p className='priceDesc'>
                            Scale your business with tools designed for industry leaders.
                        </p>
                    </div>
                    <button>Get Started</button>
                    <div className="pricFeatures gold">
                        <ul>
                            <li>
                                <Check size={16}></Check>
                                High-limit account protection across partner banks
                            </li>

                            <li>
                                <Check size={16}></Check>
                                Fast ACH payments processed the same day
                            </li>

                            <li>
                                <Check size={16}></Check>
                                Domestic bank wires with transparent pricing
                            </li>

                            <li>
                                <Check size={16}></Check>
                                Real-time payouts through FedNow and RTP
                            </li>

                            <li>
                                <Check size={16}></Check>
                                Generate unlimited virtual cards instantly
                            </li>

                            <li>
                                <Check size={16}></Check>
                                Send international wires to global partners
                            </li>

                            <li>
                                <Check size={16}></Check>
                                Low cross-border card transaction fees
                            </li>

                            <li>
                                <Check size={16}></Check>
                                Seamless USDC conversion and settlement
                            </li>

                            <li>
                                <Check size={16}></Check>
                                Flexible USDT crypto ramp services
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing