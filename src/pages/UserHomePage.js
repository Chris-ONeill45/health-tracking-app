import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

const UserHomePage = () => {
  return (
    <div>
      <h1>User Home Page</h1>
      <Dashboard />
      <Link to="/add-data">Add Data</Link>
    </div>
  );
};

export default UserHomePage;
