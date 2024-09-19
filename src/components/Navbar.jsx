import React, { useState } from 'react';
import './Navbar.css'; // Import CSS styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand abril-fatface-600">Hepta</div>
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <div className={`menu-overlay ${isOpen ? 'menu-open' : ''}`}>
        <ul className="menu">
          <li>Home</li>
          <li>Hotels</li>
          <li>About Us</li>
          <li>Gallery</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
