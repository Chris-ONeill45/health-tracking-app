import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Server logic??????
      // Pass server UID from Firebase
      // Receive
      // const receive = {
      //   email,
      //   dob,
      //   height,
      //   displayName,
      //   UID,
      //   dataset: [
      //     {
      //       label,
      //       unit,
      //       entries: [
      //         { measurement, timestamp },
      //         { measurement, timestamp },
      //         { measurement, timestamp },
      //       ],
      //     },
      //     {
      //       label,
      //       unit,
      //       entries: [
      //         { measurement, timestamp },
      //         { measurement, timestamp },
      //         { measurement, timestamp },
      //       ],
      //     },
      //   ],
      // };
      const response = await axios.get('/login', formData);
      console.log('Login successful:', response.data);
    } catch (err) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Login</button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default SignInForm;
