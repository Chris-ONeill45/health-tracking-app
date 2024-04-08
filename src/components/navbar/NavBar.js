// styles
import '../../styles/nav-bar.css';
// react
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
// hooks
import useLogout from '../../hooks/useLogout';

const NavBar = ({ isMenuOpen, setIsMenuOpen, isSignedIn, setIsSignedIn }) => {
  const navigate = useNavigate();
  const { logout } = useLogout();

  const openMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    console.log('clicked');
    try {
      await logout();
      setIsSignedIn(false);
      navigate('/sign-in');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="nav-bar">
      <ul className="nav-bar--wrapper">
        <li className="nav-bar--logos">
          <Link className="nav-bar--logo" to="/">
            App Logo
          </Link>
        </li>
      </ul>
      <ul className="nav-bar--wrapper">
        <li className="nav-bar--elements">
          <NavLink className="nav-bar--element" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-bar--elements">
          <NavLink className="nav-bar--element" to="/contact">
            Contact
          </NavLink>
        </li>
        {!isSignedIn ? (
          <>
            <li className="nav-bar--elements">
              <NavLink className="nav-bar--element" to="/create-user">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-bar--elements">
              <NavLink className="nav-bar--element" to="/sign-in">
                Sign In
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="nav-bar--elements">
              <NavLink className="nav-bar--element" to="/user-home">
                Account
              </NavLink>
            </li>
            <li className="nav-bar--elements">
              <NavLink className="nav-bar--element" to="/settings">
                Settings
              </NavLink>
            </li>
            <li className="nav-bar--elements">
              <Link
                className="nav-bar--element"
                to="/sign-in"
                onClick={handleSignOut}
              >
                Sign Out
              </Link>
            </li>
          </>
        )}
      </ul>
      <div className="nav-bar--burger">
        {!isMenuOpen ? (
          <GiHamburgerMenu
            className="nav-bar--burger__icon"
            onClick={openMenu}
          />
        ) : (
          <ImCross className="nav-bar--burger__icon" onClick={openMenu} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
