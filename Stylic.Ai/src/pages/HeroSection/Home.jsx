import React from "react";
import { motion } from "framer-motion";
import Third from "./About";
import Six from "./Asked";
import Second from "./Instant";
import Forth from "./Photosection";
import Five from "./Slider";
import First from "./Transform";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const HeroSection = () => {
  return (
    <>
      {/* First Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <First />
      </motion.div>

      {/* Second Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
      >
        <Second />
      </motion.div>

      {/* Third Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInRight}
      >
        <Third />
      </motion.div>

      {/* Forth Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Forth />
      </motion.div>

      {/* Fifth Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
      >
        <Five />
      </motion.div>

      {/* Sixth Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInRight}
      >
        <Six />
      </motion.div>
    </>
  );
};

export default HeroSection;