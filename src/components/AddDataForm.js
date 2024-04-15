import React, { useState } from 'react';
import axios from 'axios';
import useAuthContext from '../hooks/useAuthContext';

const AddDataForm = ({ chartData, setChartData }) => {
  const { user } = useAuthContext();
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const numericValue = parseFloat(value);

    const newData = [...chartData.datasets[0].data, numericValue];
    const lastSevenEntries = newData.slice(-7);
    const newChartData = {
      ...chartData,
      datasets: [{ ...chartData.datasets[0], data: lastSevenEntries }],
    };

    setChartData(newChartData);
    setValue('');

    try {
      const response = await axios.post('http://localhost:5050/adddata', {
        uid: user.uid,
        dataset: { label: 'Weight', unit: 'kg' },
        measurement: parseFloat(value),
        timestamp: new Date(),
      });
      console.log(response);
      setValue('');
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
