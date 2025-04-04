import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="about_section">
      <motion.div
        className="about_container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Section - Image */}
        <motion.div
          className="about_image_container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src="/images/sonu.jpg" alt="Sonu Kumar" className="home_image" />
        </motion.div>

        {/* Right Section - Text Content */}
        <motion.div
          className="about_text"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2>About Me</h2>
          <p>
            I'm <b>Sonu Kumar</b>, a passionate web developer specializing in
            front-end and back-end development. I love creating interactive and
            visually appealing websites using modern technologies like React,
            JavaScript, and Node.js.
          </p>
          <p>
            My journey in web development has been fueled by curiosity and the
            desire to build seamless digital experiences. Whether it’s crafting
            user-friendly interfaces or optimizing performance, I always strive
            for excellence.
          </p>
          <p>
            Let's connect and collaborate on innovative projects!
          </p>
          <motion.a
            href="/contact"
            className="about_button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
