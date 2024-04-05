import React, { useState } from 'react';
import axios from 'axios';

const UserSetUpForm = ({ name, email, userStatus, setUserStatus }) => {
  const [formData, setFormData] = useState({
    dob: '',
    height: '',
    weight: '',
    dataset: '',
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/initialize', formData);
      console.log('Initialization successful:', response.data);
    } catch (error) {
      console.error('Initialization failed:', error);
    }
  };

  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <p>Email: {email}</p>

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
