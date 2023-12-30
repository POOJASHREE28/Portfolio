import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
const Navbar = () => {
  return (
    <nav className="navbar">
       <img src={logo} alt="logo" className="logo"/>
       <div className="desktopMenu">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Projects</Link>
       </div>
       <button className="desktopMenuBtn">
        <img src={contactImg} alt="contact" className="desktopMenuImg"/>Contact Me</button>
    </nav>
  );
}

export default Navbar;