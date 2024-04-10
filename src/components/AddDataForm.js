import React, { useState } from 'react';
import axios from 'axios';
import useAuthContext from '../hooks/useAuthContext';

const AddDataForm = ({ onUpdateChart, onAddData }) => {
  const { user } = useAuthContext();
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5050/adddata', {
        uid: user.uid,
        measurement: parseFloat(value),
        timestamp: new Date(),
      });
      // onUpdateChart(response.data);
      console.log(response);
      setValue('');
      onAddData();
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dataValueInput">
          Enter value:
          <input
            type="number"
            id="dataValueInput"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
          />
        </label>
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default AddDataForm;
