import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
function navbar() {
  return (
    <div className="navbar">
      <div className="leftside"></div>
      <img src={logo}/>
      <div className="rightside">
      <Link to="/">Home</Link>
      <Link to="/menu">menu</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
      </div>
      
      </div>
  );
}

export default navbar
