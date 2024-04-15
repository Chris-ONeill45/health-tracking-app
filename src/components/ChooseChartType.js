import React from 'react';

const ChooseChartType = ({ setChartType }) => {
  const handleChange = (e) => {
    setChartType(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
      </select>
    </div>
  );
};

export default ChooseChartType;
