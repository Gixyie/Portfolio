import React from 'react'
import Navbar from './components/Navbar.jsx';
import './App.css';
import Hero from './components/Hero';


const App = () => {
  return (
    <div className="navbar">
      <div className="navbar2"></div>
    <div className="background">
     </div>
   
   <div className="container2"><Navbar />
   </div>
   <Hero /> 
    </div>
  );
};

export default App