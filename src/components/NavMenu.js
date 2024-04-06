import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-dropdown">
      <button className="dropdown-button" type="button" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/user-home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavMenu;
