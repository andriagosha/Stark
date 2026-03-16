import React, { useState } from 'react'
import {ChevronDown} from "lucide-react"
import "./Faq1.css"

function Faq1() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is Stark?",
      answer: "Stark is a modern financial platform built for businesses. It combines banking, payments, and crypto settlement tools in one simple interface so companies can move money faster and operate globally."
    },
    {
      question: "How much does Stark cost?",
      answer: "Stark offers a free plan with essential banking features for startups and small teams. Businesses that need advanced capabilities can upgrade to the Pro plan for $50 per month."
    },
    {
      question: "Does Stark support international payments?",
      answer: "Yes. Stark supports international wire transfers to multiple supported countries. Businesses can send payments globally with transparent pricing and fast processing."
    },
    {
      question: "Can I use crypto with Stark?",
      answer: "Yes. Stark allows seamless conversion and settlement using stablecoins such as USDC and USDT. This enables faster global payments and flexible crypto on and off ramp services."
    },
    {
      question: "Is Stark secure?",
      answer: "Security is a top priority at Stark. The platform includes enterprise-grade account protection, secure infrastructure, and advanced safeguards to keep business funds and data safe."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="FaqSection">
        <div className="faqContent">
            <div className="faqTxt">
                <h1>Frequently asked questions</h1>
                <p>Here are the answers you are looking for</p>
            </div>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <div key={index} className="faqItem" onClick={() => toggleFaq(index)}>
                        <div className="faqName">
                            {faq.question}

                            <ChevronDown
                                size={24}
                                className={openIndex === index ? "rotate" : "arrow"}
                            />
                        </div>
                        

                        <div className={`faqAnswer ${openIndex === index ? "open" : ""}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Faq1