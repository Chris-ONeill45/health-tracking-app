import '../styles/public-pages.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="public-page">
      <header className="public-page-header">
        <h1>Heart Attack!</h1>
        <p>We cant find what your looking for?</p>
        <img
          className="public-page-header--logo"
          src="broken-heart.jpeg"
          alt="broken heart"
        />
      </header>
      <main className="public-page-main">
        <Link to="/">Lets get you Home</Link>
      </main>
    </div>
  );
};
export default NotFoundPage;
