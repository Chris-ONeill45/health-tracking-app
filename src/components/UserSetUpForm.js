// react
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// context
import useAuthContext from '../hooks/useAuthContext';

// { name, email, userStatus, setUserStatus }
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
      // entry: {
      //   measurement: formData.weight,
      //   timeStamp: new Date(),
      // },
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
      <p>Email: {user.email}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dob">
            Date of Birth:
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="height">
            Height:
            <input
              type="text"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="weight">
            Weight:
            <input
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* <div>
          <label htmlFor="dataset">
            Predefined Dataset:
            <select
              id="dataset"
              name="dataset"
              value={formData.dataset}
              onChange={handleChange}
            >
              <option value="">Select a dataset</option>
              <option value="dataset1">Dataset 1</option>
              <option value="dataset2">Dataset 2</option>
              <option value="dataset3">Dataset 3</option>
            </select>
          </label>
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserSetUpForm;
