import React from 'react';
import './Hero.css';
import { HERO_CONTENT, EXPERIENCES } from '../data/content';

const Hero = () => {
  return (
   <div className="presentation-container">
    <div className="presentation">
        <div className="text">
            <div className="text2">
                <h1>Giorgia Cocozza</h1>
            <span className="subtitle">Front end Developer</span>
            <p className="hero-content">
                {HERO_CONTENT}
            </p>
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero;