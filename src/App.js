import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Projects'>Projects</Link>
        <Link to='/Contact'>Contact</Link>
      </Nav>
    </Router>
  );
}

export default App;
