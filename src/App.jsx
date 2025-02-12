import React from 'react'
import Navbar from './components/Navbar.jsx';
import './App.css';
import Hero from './components/Hero';
import About from './components/About.jsx';
import Technologies from './components/Technologies.jsx';
const App = () => {
  return (
    <div className="navbar">
      <div className="navbar2"></div>
    <div className="background">
     
   
      <div className="container2">
         <Navbar />
         <Hero /> 
         <About />
         <Technologies />
       </div>
    </div>
     </div>
  );
};

export default App