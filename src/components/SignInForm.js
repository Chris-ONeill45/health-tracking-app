// react
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
// axios
// import axios from 'axios';
// contexts
import useAuthContext from '../hooks/useAuthContext';
// hooks
import useLogin from '../hooks/useLogin';

const SignInForm = () => {
  const { user } = useAuthContext();
  const { error, isPending, login } = useLogin();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData.email, formData.password);
    } catch (err) {
      console.log(err);
    }

    setFormData({
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {user ? (
        <Navigate to="/user-home" />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          {!isPending && <button type="submit">Log In</button>}
          {isPending && <button type="button">Loading</button>}
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default SignInForm;
