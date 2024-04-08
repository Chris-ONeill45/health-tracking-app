import React, { useState } from 'react';
import DisplayChart from './DisplayChart';
import ChooseChartType from './ChooseChartType';
import ChooseDataSet from './ChooseDataSet';
import Alert from './Alert';

const Dashboard = ({
  datasets,
  selectedDataSet,
  handleSelectDataSet,
  chartData,
  handleSelectChartType,
}) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <DisplayChart label="Measurement" units="Units" entries={chartData} />
      <ChooseChartType onSelectChartType={handleSelectChartType} />
      <ChooseDataSet
        datasets={datasets}
        onSelectDataSet={handleSelectDataSet}
      />
      {showAlert && (
        <Alert selectedDataSet={selectedDataSet} onClose={handleCloseAlert} />
      )}
      <button type="button" onClick={() => setShowAlert(true)}>
        Add Data
      </button>
    </div>
  );
};

export default Dashboard;
