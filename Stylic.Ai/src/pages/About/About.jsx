import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React from 'react';

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

const AboutHeader = () => {
  return (
    <motion.div
      className="bg-[#0f2854] py-20 flex flex-col items-center text-white"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h1 className="text-4xl pt-20 font-bold mb-4">About Us</h1>
      <div className="flex items-center space-x-2 text-sm text-gray-200">
        <span className="font-semibold">Home</span>
        <ChevronRight className="w-4 h-4 text-yellow-400" />
        <span className="font-semibold text-white">About Us</span>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <motion.section
      className="relative bg-white py-16 px-6 md:px-16 flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Circular Image */}
        <motion.div
          className="relative flex justify-center"
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden relative flex justify-center items-center border-2 border-gray-300">
            {/* Rotating Text (Static Image Alternative) */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <div className="absolute text-gray-400 text-xl font-bold tracking-wide animate-spin-slow">
                {/* S T Y L I C &nbsp; • &nbsp; S H O O T &nbsp; • &nbsp; S T Y L I C */}
              </div>
            </div>
            {/* Profile Image */}
            <img
              src="./src/assets/About.jpg"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInRight}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Behold the Future of Design Service
          </h2>
          <p className="text-gray-600 mt-4">
            Transform the way fashion comes to life with the help of our AI technology. 
            From Hyper-Realistic Visuals to Brand Identity Revolutionisation, all Innovation is Made Simpler.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            {[
              "Expert advice at every step of the way.",
              "Access to potent tools and resources.",
              "AI solutions that bring significant results.",
              "Easy to integrate into your workflow.",
              "Optimised visuals for a better online presence.",
            ].map((point, index) => (
              <li key={index} className="flex items-center">
                ✅ <span className="ml-2">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

const WhyChooseUs = () => {
  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0f2854] mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            className="bg-white shadow rounded-lg p-6 border hover:shadow-lg transition"
            variants={slideInLeft}
          >
            <h3 className="text-xl font-bold text-[#0f2854] mb-4">Exceptional Solutions</h3>
            <p className="text-gray-600">
              Fashion photography with the most advanced artificial intelligence technologies. 
              Create imagery that mesmerises and makes your brand the talk of the town.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white shadow rounded-lg p-6 border hover:shadow-lg transition"
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold text-[#0f2854] mb-4">Devoted Team</h3>
            <p className="text-gray-600">
              Our enthusiastic experts combine their efforts to provide customised solutions that actualise your vision. 
              In return, these efforts contribute to raising your brand status and visibility.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white shadow rounded-lg p-6 border hover:shadow-lg transition"
            variants={slideInRight}
          >
            <h3 className="text-xl font-bold text-[#0f2854] mb-4">Proven Results</h3>
            <p className="text-gray-600">
              With a global track record of success, we empower brands with impactful visuals, leaving a lasting impression on audiences.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Counter = ({ value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-6xl font-bold text-gray-900"
    >
      {value}+
    </motion.div>
  );
};

const WorkImpressions = () => {
  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Work Impressions</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-20">
          {/* Happy Customers */}
          <div className="text-center">
            <Counter value={100} />
            <p className="text-gray-600 font-semibold mt-2">Happy Customers</p>
          </div>

          {/* Total Photos */}
          <div className="text-center">
            <Counter value={1000} />
            <p className="text-gray-600 font-semibold mt-2">Total Photos</p>
          </div>

          {/* Total Photoshoots */}
          <div className="text-center">
            <Counter value={500} />
            <p className="text-gray-600 font-semibold mt-2">Total Photoshoots</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const About = () => {
  return (
    <div>
      <AboutHeader />
      <Hero />
      <WhyChooseUs />
      <WorkImpressions />
    </div>
  );
};

export default About;