import React from 'react'
import { motion } from "framer-motion"
import "./Hero.css"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

function Hero() {
  return (
    <div className='Hero'>
      <div className="container">
        <motion.div 
          className="content"
          variants={container}
          initial="hidden"
          animate="show"
        >

          <motion.div variants={item}>
            <p className='heroText'>
              Redefining <span>standart</span> <br/>
              in business finance
            </p>
          </motion.div>

          <motion.div variants={item}>
            <p className='smTxt'>
              Banking, Cards, Crypto, Treasury, and More — All on One Platform
            </p>
          </motion.div>

          <motion.div variants={item}>
            <div className="input">
              <input type="text" placeholder="What's your email?" />
              <button>Get Started</button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Hero