import React from 'react';
import { Link } from 'react-router-dom';
import CreateUserForm from '../components/CreateUserForm';

const CreateUserPage = () => {
  return (
    <div className="create-user-page">
      <CreateUserForm />
      <Link to="/">Home</Link>
      <Link to="/sign-in">Sign In</Link>
    </div>
  );
};

export default CreateUserPage;
