import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
