// styles
import '../styles/public-pages.css';
// react
import React from 'react';
import { Link } from 'react-router-dom';
// components
import CreateUserForm from '../components/CreateUserForm';

const CreateUserPage = () => {
  return (
    <div className="public-page">
      <header className="public-page-header">
        <h1>Create your account!</h1>
      </header>
      <main className="public-page-main">
        <CreateUserForm />
        <Link to="/sign-in">Already have an account? Sign In!</Link>
      </main>
    </div>
  );
};
export default CreateUserPage;
