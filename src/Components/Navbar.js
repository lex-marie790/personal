import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MouseParticles  from 'react-mouse-particles';

//import Navitem from './Navitem';

class Navbar extends Component {

    render() {
        return (
            <>
            <MouseParticles g={1} color={["#ff75d6", "#bd60b4", "#a37ddf", "	#5aaee1", "#88c6ec"]} cull="col,image-wrapper"/>
            <Router>
               <div className='nav'>
                <Link to='/' className='link'>Home</Link>
                <Link to="/about" className='link'>About</Link>
                <Link to="/projects" className='link'>Projects</Link>
                <Link to="/contact" className='link'>Contact</Link>
                <Link to="/protected" className='link'>In Progress</Link> 
            </div> 
            </Router>
            </>
        )
    }
}

export default Navbar;