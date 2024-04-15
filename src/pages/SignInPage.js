import '../styles/public-pages.css';
import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm';

const SignInPage = () => {
  return (
    <div className="public-page">
      <header className="public-page-header">
        <h1>Welcome back, sign in!</h1>
      </header>
      <main className="public-page-main">
        <SignInForm />
        <Link to="/create-user">Dont have an account? Register!</Link>
      </main>
    </div>
  );
};
export default SignInPage;
