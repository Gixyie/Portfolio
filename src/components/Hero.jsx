import React from 'react';
import './Hero.css';
import { HERO_CONTENT, EXPERIENCES } from '../data/content';
import * as motion from "motion/react-client";


const Hero = () => {
  return (
   <div className="presentation-container">
    <div className="presentation">
        <div className="text">
        <motion.div 
        className="text2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
     <h1>Giorgia Cocozza</h1>
            <span className="subtitle">Front end Developer</span>
            <p className="hero-content">
                {HERO_CONTENT}
            </p>
            </motion.div>
   
            </div>
            </div>
        </div>
   
  )
}

export default Hero;