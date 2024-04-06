import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDataForm = ({ onUpdateChart }) => {
  const [selectedDataType, setSelectedDataType] = useState('weight');
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/???????', {
        type: selectedDataType,
        value: parseFloat(value),
      });
      onUpdateChart(response.data);
      setValue('');
      navigate.push('/user-home');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dataTypeSelect">
          Select data type:
          <select
            id="dataTypeSelect"
            value={selectedDataType}
            onChange={(e) => setSelectedDataType(e.target.value)}
          >
            <option value="weight">Weight</option>
            <option value="bloodSugar">Blood Sugar</option>
            <option value="calorieIntake">Calorie Intake</option>
          </select>
        </label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default AddDataForm;
