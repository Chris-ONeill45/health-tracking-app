import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
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
          <div className="form-entry">
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-entry">
            <label htmlFor="password">
              Password
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          {!isPending && <button type="submit">Log In</button>}
          {isPending && <button type="button">Loading</button>}
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default SignInForm;
