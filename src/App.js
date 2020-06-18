import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MouseParticles  from 'react-mouse-particles';
// import About from './Components/about';
import './index.css';
import Navbar from './Components/Navbar'

// import './App.css';

  function App() {
    return (
      <>
        <MouseParticles g={1} color={["#ff75d6", "#bd60b4", "#a37ddf", "	#5aaee1", "#88c6ec"]} cull="col,image-wrapper"/>
        <Navbar />
      </>
    );
  }

export default App;
