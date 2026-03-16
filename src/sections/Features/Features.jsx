import React from "react";
import { motion } from "framer-motion";
import "./Features.css";

const leftCard = {
  hidden: { opacity: 0, x: -60 }, // smaller move
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" }, // smoother easing
  },
};

const middleCard = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const rightCard = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

function Features() {
  return (
    <div className="Features">
      <div className="features-content">
        <div className="text">Who This Is For</div>

        <motion.div
          className="cards"
          initial="hidden"
          whileInView="show"
        >
          <motion.div className="card card1" variants={leftCard}>
            Freelancers
          </motion.div>

          <motion.div className="card card2" variants={middleCard}>
            Startups
          </motion.div>

          <motion.div className="card card3" variants={rightCard}>
            Entrepreneurs
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Features;