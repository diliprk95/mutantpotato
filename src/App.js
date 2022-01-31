import './App.css';
import About from './Component/About';
import React from 'react';
import Section from './Component/Section';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from './Component/MainContent';

const App =() => {
  return (
    <div className="App">
      <Router>
      <Navbar title="Mutant Potato"/>
      {/* <Section/>       */}
      <MainContent/>
      {/* <About/> */}
      </Router>
    </div>  
  );
}

export default App;
