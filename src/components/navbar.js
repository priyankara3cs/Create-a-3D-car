import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">3D Car</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about/">About</a></li>
          <li><a href="/services/">Services</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
