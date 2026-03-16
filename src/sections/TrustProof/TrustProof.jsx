import React, { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import "../TrustProof/TrustProof.css";

const DIGIT_HEIGHT = 36;

// 1. ADDED 'index' to the props here
function Digit({ value, index }) {
  const isNumber = !isNaN(parseInt(value));
  const target = isNumber ? parseInt(value) : 0;

  const animatedValue = useSpring(0, { stiffness: 50, damping: 20 });
  const y = useTransform(animatedValue, (v) => v * -DIGIT_HEIGHT);

  useEffect(() => {
    if (isNumber) {
      // Now 'index' is defined, so the stagger will work!
      const timeout = setTimeout(() => {
        animatedValue.set(target);
      }, index * 80); // 80ms delay per digit for a nice "wave" effect

      return () => clearTimeout(timeout);
    }
  }, [target, animatedValue, isNumber, index]);

  if (!isNumber) {
    return <span className="digit-char">{value}</span>;
  }

  return (
    <div className="digit-mask">
      <motion.div style={{ y }} className="digit-column">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div key={n} className="digit-number">
            {n}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function TrustProof() {
  const numberStr = "$7,438,126,713";

  return (
    <div className="padCont">
      <div className='trustSection'>
        <div className="trustContent">
          <div className="num-wrapper">
            {numberStr.split("").map((char, index) => (
              // 2. PASSING the index prop here
              <Digit key={index} value={char} index={index} />
            ))}
          </div>
          <p className='numTxt'>
            Over 2,000 business owners spend on a Stark corporate cards
          </p>
        </div>
        
        <div className="slider">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className={`brand brand${i}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustProof;