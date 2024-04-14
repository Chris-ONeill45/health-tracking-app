// react
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
// import axios from 'axios';
// contexts
import useAuthContext from '../hooks/useAuthContext';
// hooks
import useSignup from '../hooks/useSignup';

const CreateUserForm = () => {
  const { user } = useAuthContext();
  const { error, isPending, signup } = useSignup();
  const [navigatePath, setNavigatePath] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    setNavigatePath(`/user-setup/${formData.name}`);
    try {
      await signup(formData.email, formData.password, formData.name);
    } catch (err) {
      console.log(err);
    }
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    // try {
    //   //send data to BE
    //   const sendNewUser = {
    //     email,
    //     dob,
    //     height,
    //     displayName,
    //     UID,
    //     dataset: [
    //       {
    //         label,
    //         unit,
    //         entries: [{ measurement, timestamp }],
    //       },
    //     ],
    //   };
    //   const response = await axios.post('/users', formData);
    //   console.log('Registration successful:', response.data);
    // } catch (err) {
    //   console.error('Registration failed:', err);
    //   setError('Registration failed. Please try again later.');
    // }
  };
  return (
    <div>
      {user ? (
        <Navigate to={navigatePath} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-entry">
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>
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
          <div className="form-entry">
            <label htmlFor="confirmPassword">
              Confirm Password
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {!isPending && <button type="submit">Register</button>}
          {isPending && <button type="button">Loading</button>}
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default CreateUserForm;
