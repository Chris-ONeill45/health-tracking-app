import React from 'react';
import AddDataForm from './AddDataForm';

const Alert = ({ selectedDataSet, chartData, setChartData }) => {
  return (
    <div className="alert">
      <AddDataForm
        selectedDataSet={selectedDataSet}
        chartData={chartData}
        setChartData={setChartData}
      />
    </div>
  );
};

export default Alert;
