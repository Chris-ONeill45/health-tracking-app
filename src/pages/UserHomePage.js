import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../components/Dashboard';
import 'chart.js/auto';

const UserHomePage = () => {
  const [selectedDataSet, setSelectedDataSet] = useState('weight');
  const [chartData, setChartData] = useState([]);

  const handleSelectDataSet = (dataSet) => {
    setSelectedDataSet(dataSet);
  };

  const fetchData = async (dataSet) => {
    try {
      const response = await axios.get(`/users${dataSet}`);
      setChartData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(selectedDataSet);
  }, [selectedDataSet]);

  const datasets = [
    { value: 'weight', label: 'Weight' },
    { value: 'bloodSugar', label: 'Blood Sugar' },
    { value: 'calorieIntake', label: 'Calorie Intake' },
  ];

  return (
    <div>
      <Dashboard
        selectedDataSet={selectedDataSet}
        handleSelectDataSet={handleSelectDataSet}
        datasets={datasets}
        chartData={chartData}
        setChartData={setChartData}
      />
    </div>
  );
};

export default UserHomePage;
