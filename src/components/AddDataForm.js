import React, { useState } from 'react';
import axios from 'axios';

const AddDataForm = ({ selectedDataSet, onUpdateChart }) => {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/adddata', {
        type: selectedDataSet,
        value: parseFloat(value),
      });
      setValue('');
      onUpdateChart();
      console.log('Data added successfully!');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addData">Select data type: {selectedDataSet}</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`Enter ${selectedDataSet} value...`}
        />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default AddDataForm;
