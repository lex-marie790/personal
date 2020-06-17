import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MouseParticles  from 'react-mouse-particles'

// import styled from 'styled-components';
// import logo from './logo.svg';
// import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <>
        <MouseParticles g={1} color={["#ff75d6", "#bd60b4", "#a37ddf", "	#5aaee1", "#88c6ec"]} cull="col,image-wrapper"/>
        <Router>
          <div className="nav">
            <Link to='/' className='link'>Home</Link>
            <Link to='/About' className='link'>About</Link>
            <Link to='/Projects' className='link'>Projects</Link>
            <Link to='/Contact' className='link'>Contact</Link>
            <Link to='/Protected' className='link'>In Progress</Link>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
