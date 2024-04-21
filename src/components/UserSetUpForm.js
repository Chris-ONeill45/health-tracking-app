import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuthContext from '../hooks/useAuthContext';

const UserSetUpForm = ({ userName }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [formData, setFormData] = useState({
    displayName: userName,
    email: user.email,
    dob: '',
    height: '',
    weight: '',
    dataset: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        email: formData.email,
        dob: formData.dob,
        height: formData.height,
        displayName: formData.displayName,
        uid: user.uid,
      },
      dataSet: {
        label: 'Weight',
        unit: 'kg',
        entries: [{ measurement: formData.weight, timeStamp: new Date() }],
      },
    };

    try {
      const response = await axios.post('/createuser', newUser);
      console.log('Initialization successful:', response.data);
    } catch (error) {
      console.error('Initialization failed:', error);
    }

    navigate('/user-home');
  };

  return (
    <div>
      <h2>Welcome, {userName}!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-entry">
          <label htmlFor="email">
            Email
            <input
              className="form-readonly"
              type="email"
              id="email"
              name="email"
              value={user.email}
              readOnly
            />
          </label>
        </div>
        <div className="form-entry">
          <label htmlFor="dob">
            Date of Birth
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-entry">
          <label htmlFor="height">
            Height
            <input
              type="text"
              id="height"
              name="height"
              placeholder="cm"
              value={formData.height}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-entry">
          <label htmlFor="weight">
            Weight
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="kg"
              value={formData.weight}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserSetUpForm;
