import React from 'react';
import AddDataForm from './AddDataForm';

const Alert = ({ selectedDataSet, onClose, chartData, setChartData }) => {
  return (
    <div className="alert">
      <button type="button" onClick={onClose}>
        Close
      </button>
      <AddDataForm
        selectedDataSet={selectedDataSet}
        chartData={chartData}
        setChartData={setChartData}
      />
    </div>
  );
};

export default Alert;
