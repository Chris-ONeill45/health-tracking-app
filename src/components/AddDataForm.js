import React, { useState } from 'react';
import axios from 'axios';

const AddDataForm = ({ selectedDataSet, onUpdateChart, onAddData }) => {
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/adddata', {
        type: selectedDataSet,
        value: parseFloat(value),
      });
      onUpdateChart(response.data);
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
          Enter {selectedDataSet} value:
          <input
            type="number"
            id="dataValueInput"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Enter ${selectedDataSet} value`}
          />
        </label>
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default AddDataForm;
