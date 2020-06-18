// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import MouseParticles  from 'react-mouse-particles';
// import Navitem from './Navitem'

// //import Navitem from './Navitem';

// class Navbar extends Component {
//     constructor(props)
// {
// super(props);
// this.state={
// 'NavItemActive':''
// }
// }
// activeitem=(x)=>
// {
// if(this.state.NavItemActive.length>0){
// document.getElementById(this.state.NavItemActive).classList.remove('active');
// }
// this.setState({'NavItemId':x},()=>{
// document.getElementById(this.state.NavItemActive).classList.add('active');
// });
// };

//     render() {
//         return (
//             <>
//             <MouseParticles g={1} color={["#ff75d6", "#bd60b4", "#a37ddf", "#5aaee1", "#88c6ec"]} cull="col,image-wrapper"/>
//             <nav>
//                 <ul>
//                     <Navitem item="Home" tolink="/" ></Navitem>
//                     <Navitem item="About" tolink="/about" ></Navitem>
//                     <Navitem item="Education" tolink="/education"></Navitem>
//                     <Navitem item="Skills" tolink="/skills"></Navitem>
//                     <Navitem item="Contact" tolink="/contact"></Navitem>
//                 </ul>
//             </nav>
//             </>
//         );
//     }
// }

// export default Navbar;