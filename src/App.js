import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import styled from 'styled-components';
// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <Router>
      <div className="nav">
        <Link to='/' className='link'>Home</Link>
        <Link to='/About' className='link'>About</Link>
        <Link to='/Projects' className='link'>Projects</Link>
        <Link to='/Contact' className='link'>Contact</Link>
        <Link to='/Protected' className='link'>In Progress</Link>
      </div>
    </Router>
  );
}

export default App;
