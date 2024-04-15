import React from 'react';
import { useParams } from 'react-router-dom';
import UserSetUpForm from '../components/UserSetUpForm';

const UserSetUpPage = () => {
  const params = useParams();

  return (
    <div className="user-set-up-form">
      <UserSetUpForm userName={params.displayName} />
    </div>
  );
};

export default UserSetUpPage;
