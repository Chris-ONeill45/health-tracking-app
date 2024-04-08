// styles
import '../../styles/nav-menu.css';
// react
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// hooks
import useLogout from '../../hooks/useLogout';

const NavMenu = ({ isSignedIn, setIsSignedIn }) => {
  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleSignOut = async () => {
    console.log('clicked');
    try {
      await logout();
      setIsSignedIn(false);
      console.log('redirected');
      // navigate('/create-user', { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="nav-menu">
      <ul className="nav-menu--menu">
        <li className="nav-menu--item">
          <Link className="nav-menu--link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-menu--item">
          <Link className="nav-menu--link" to="/contact">
            Contact
          </Link>
        </li>
        {!isSignedIn ? (
          <>
            <li className="nav-menu--item">
              <Link className="nav-menu--link" to="/create-user">
                Sign Up
              </Link>
            </li>
            <li className="nav-menu--item">
              <Link className="nav-menu--link" to="/sign-in">
                Sign In
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-menu--item">
              <Link className="nav-menu--link" to="/user-home">
                Account
              </Link>
            </li>
            <li className="nav-menu--item">
              <Link className="nav-menu--link" to="/settings">
                Settings
              </Link>
            </li>
            <li className="nav-menu--item">
              <Link
                to="/sign-in"
                onClick={handleSignOut}
                className="nav-menu--link"
              >
                Sign Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavMenu;
