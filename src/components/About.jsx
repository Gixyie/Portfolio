import React from 'react'
import './About.css';
import { ABOUT_TEXT } from '../data/content';
const About = () => {
  return (
    <div className="bgcontainer-about">
        <h2>About<span className="spanMe"> Me</span></h2>
    <div className="container-about">
        <div className="container-about2">
            <div className="container-about3">
                <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="fotopc" />
           
            <div className="text-about-container">
                <div className="text-about">
                    <p>{ABOUT_TEXT}</p>
                </div>
            </div>   
            </div>
            </div>
        </div>
    </div>
    
  )
}

export default About