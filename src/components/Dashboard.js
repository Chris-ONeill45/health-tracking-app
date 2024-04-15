import React, { useState } from 'react';
import DisplayChart from './DisplayChart';
import ChooseChartType from './ChooseChartType';
import Alert from './Alert';

const Dashboard = ({
  chartType,
  handleSelectChartType,
  selectedDataSet,
  chartData,
  setChartData,
}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <DisplayChart chartType={chartType} chartData={chartData} />
      <ChooseChartType setChartType={handleSelectChartType} />
      {showAlert && (
        <Alert
          selectedDataSet={selectedDataSet}
          onClose={handleCloseAlert}
          chartData={chartData}
          setChartData={setChartData}
        />
      )}
      <button type="button" onClick={() => setShowAlert(true)}>
        Add Data
      </button>
    </div>
  );
};

export default Dashboard;
