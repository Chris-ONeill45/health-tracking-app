// styles
// react
import React, { useEffect, useState } from 'react';
// components
import NavBar from './NavBar';
import NavMenu from './NavMenu';
// contexts
import useAuthContext from '../../hooks/useAuthContext';

const NavControl = () => {
  const { user } = useAuthContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    console.log(user);
    if (user) setIsSignedIn(true);
  }, [user]);

  return (
    <div className="nav-control">
      <NavBar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
      />
      {isMenuOpen ? (
        <NavMenu isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      ) : null}
    </div>
  );
};

export default NavControl;
