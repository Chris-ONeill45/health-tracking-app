import React from 'react';
import NavMenu from './NavMenu';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-menu">
        <NavMenu />
      </div>
      <div className="navbar-logo">logo</div>
    </nav>
  );
};

export default NavBar;
