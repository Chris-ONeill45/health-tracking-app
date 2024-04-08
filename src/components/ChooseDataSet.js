import React from 'react';

const ChooseDataSet = ({ datasets, onSelectDataSet }) => {
  const handleChange = (e) => {
    onSelectDataSet(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {datasets.map((dataset) => (
          <option key={dataset.value} value={dataset.value}>
            {dataset.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChooseDataSet;
