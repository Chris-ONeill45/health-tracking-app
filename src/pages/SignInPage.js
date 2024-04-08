import React from 'react';
// import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm';

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <SignInForm />
      {/* <Link to="/">Home</Link>
      <Link to="/create-user">Register</Link> */}
    </div>
  );
};

export default SignInPage;
