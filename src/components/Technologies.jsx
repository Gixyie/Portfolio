import React from 'react'
import './Technologies.css';
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

const Technologies = () => {
  return (
    <div className="bg-container-tech">
        <h2>Technologies</h2>
        <div className="tech-container">
            <div className="tech-container2">
            <RiReactjsLine size={30} color='cyan'/>
            </div>
            <div className="tech-container2">
            <SiJavascript size={30} color='yellow'/>
            </div>
            <div className="tech-container2">
            <FaNodeJs size={30} color='green'/>
            </div>
        
        </div>
    </div>
  )
}

export default Technologies;