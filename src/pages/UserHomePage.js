import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../components/Dashboard';
import useAuthContext from '../hooks/useAuthContext';
import 'chart.js/auto';

const UserHomePage = () => {
  const { user } = useAuthContext();
  const [selectedDataSet, setSelectedDataSet] = useState('Weight');
  const [chartData, setChartData] = useState([]);

  const handleSelectDataSet = (dataSet) => {
    setSelectedDataSet(dataSet);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`/retrieveuser`, {
        params: { uid: user.uid },
      });
      // setChartData(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
