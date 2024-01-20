import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
const Navbar = () => {
  return (
    <nav className="navbar">
       <img src={logo} alt="logo" className="logo"/>
       <div className="desktopMenu">
          <Link to="/" className="desktopMenuListItem" >Home</Link>
          <Link to="/About" className="desktopMenuListItem"  >About</Link>
          <Link to="/Projects" className="desktopMenuListItem">Projects</Link>
       </div>
       <Link to="/ContactMe" className="desktopMenuBtn">
          <img src={contactImg} alt="contact" className="desktopMenuImg" />Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;