import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Home.css";

const Home = () => {
  const fullText = `Hi, I'm Sonu Kumar. I'm a passionate web developer with experience in building engaging websites and applications. Explore my work and connect with me!`;
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // Detect when section is in view
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Typing Effect
  useEffect(() => {
    if (inView && index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, inView]);

  return (
    <motion.div
      ref={ref}
      className="home_container"
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="main_container">
        {/* Left Side - Typing Text */}
        <motion.div
          className="left_container"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2>Sonu Kumar</h2>
          <p className="typing_effect">
            {displayText}
            <span className="cursor">|</span>
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="right_container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img src="./images/sonu.jpg" alt="Sonu Kumar" className="home_image" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
