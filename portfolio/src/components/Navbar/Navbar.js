
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Navbar({ activeSection, onSectionClick }) {
  const sections = ['Home', 'About', 'Projects', 'ContactMe'];

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        {sections.map((section) => (
          <Link
            key={section}
            to={`/${section}`} // Ensure proper routing paths
            className={`desktopMenuListItem ${activeSection === section ? 'active' : ''}`}
            onClick={() => onSectionClick(section)} // Trigger smooth scroll
          >
            {section}
          </Link>
        ))}
      </div>
      
    </nav>
  );
}

export default Navbar;
