import React from 'react';

const ChooseChartType = ({ onSelectChartType }) => {
  const handleChange = (e) => {
    onSelectChartType(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="line">Line Chart</option>
      </select>
    </div>
  );
};

export default ChooseChartType;
