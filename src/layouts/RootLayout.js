// react
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
// contexts
import useAuthContext from '../hooks/useAuthContext';
// hooks
import useLogout from '../hooks/useLogout';
// components
import Footer from '../components/Footer';

const RootLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const handleSignOut = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="root-layout">
      <header className="root-layout-header">
        <nav>
          <div className="root-layout-logo">
            <NavLink to="/">
              <img
                className="root-layout-logo--img"
                src="health-heart.jpeg"
                alt="fitness app logo"
              />
              <h3>Fitness App</h3>
            </NavLink>
          </div>
          <div className="root-layout-links">
            <NavLink to="about">About</NavLink>
            {!user ? (
              <>
                <NavLink to="sign-in">Sign In</NavLink>
                <NavLink to="create-user">Register</NavLink>
              </>
            ) : (
              <>
                <NavLink to="user-home">Account</NavLink>
                <NavLink to="/" onClick={handleSignOut}>
                  Sign Out
                </NavLink>
              </>
            )}
          </div>
          <div className="root-layout--burger">
            {!isMenuOpen ? (
              <GiHamburgerMenu
                className="nav-bar--burger__icon"
                onClick={handleMenuClick}
              />
            ) : (
              <ImCross
                className="nav-bar--burger__icon"
                onClick={handleMenuClick}
              />
            )}
          </div>
          {/* navmenuSTART */}
          {isMenuOpen && (
            <div className="root-layout-menulinks">
              <NavLink to="about">About</NavLink>
              {!user ? (
                <>
                  <NavLink to="sign-in">Sign In</NavLink>
                  <NavLink to="create-user">Register</NavLink>
                </>
              ) : (
                <>
                  <NavLink to="user-home">Account</NavLink>
                  <NavLink to="/" onClick={handleSignOut}>
                    Sign Out
                  </NavLink>
                </>
              )}
            </div>
          )}
          {/* navmenuEND */}
        </nav>
      </header>
      <main className="root-layout-main">
        <Outlet />
      </main>
      <div className="root-layout-footer">
        <Footer />
      </div>
    </div>
  );
};
export default RootLayout;
