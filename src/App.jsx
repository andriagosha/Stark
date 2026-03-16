import Header from "./sections/Header/Header"
import Hero from "./sections/Hero/Hero"
import TrustProof from "./sections/TrustProof/TrustProof"
import Features from "./sections/Features/Features"
import Foundation from "./sections/Foundation/Foundation"
import Capabilities from "./sections/Capabilities/Capabilities"
import Pricing from "./sections/Pricing/Pricing"
import Faq from "./sections/Faq1/Faq1"
import Footer from './sections/Footer/Footer'
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,   // bigger = slower smoother scroll
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);


  return (
    <>
      <Header />
      <Hero />
      <TrustProof />
      <Features />
      <Foundation />
      <Capabilities />
      <Pricing />
      <Faq />
      <Footer />
    </>
  )
}

export default App
