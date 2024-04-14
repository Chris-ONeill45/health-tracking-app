// react
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// contexts
import useAuthContext from '../hooks/useAuthContext';

const PrivateRoutes = () => {
  const { user } = useAuthContext();
  return user ? <Outlet /> : <Navigate to="sign-in" />;
};
export default PrivateRoutes;
