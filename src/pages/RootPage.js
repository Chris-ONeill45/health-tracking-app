// styles
import '../styles/public-pages.css';
// react
import React from 'react';
import { Link } from 'react-router-dom';

const RootPage = () => {
  return (
    <div className="public-page">
      <header className="public-page-header">
        <h1>Welcome to Fitness App</h1>
        <img
          className="public-page-header--logo"
          src="health-heart.jpeg"
          alt="fitness app logo"
        />
      </header>
      <main className="public-page-main">
        <Link to="/sign-in">Already have an account? Sign In!</Link>
        <Link to="/create-user">Register a new account!</Link>
      </main>
    </div>
  );
};
export default RootPage;
