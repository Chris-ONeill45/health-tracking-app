import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../components/Dashboard';
import useAuthContext from '../hooks/useAuthContext';
import 'chart.js/auto';

const UserHomePage = () => {
  const { user } = useAuthContext();
  const [selectedDataSet, setSelectedDataSet] = useState('Weight');
  const [chartType, setChartType] = useState('line');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        fill: false,
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: 'rgb(0, 0, 255)',
        tension: 0.1,
      },
    ],
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/retrieveuser/${user.uid}`
      );

      const formattedData = response.data.datasets[0].entries.map((entry) => {
        const formattedTimestamp = new Date().toLocaleDateString();
        return {
          timestamp: formattedTimestamp,
          measurement: entry.measurement,
        };
      });

      const labels = formattedData.map((entry) => entry.timestamp);
      const measurements = formattedData.map((entry) => entry.measurement);

      setChartData({
        labels,
        datasets: [
          {
            label: `${selectedDataSet}`,
            data: measurements,
            fill: false,
            borderColor: 'rgb(0, 0, 255)',
            backgroundColor: 'rgb(0, 0, 255)',
            tension: 0.1,
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectChartType = (type) => {
    setChartType(type);
  };

  const dataChoice = [
    { value: 'weight', label: 'Weight' },
    { value: 'bloodSugar', label: 'Blood Sugar' },
    { value: 'calorieIntake', label: 'Calorie Intake' },
  ];

  return (
    <div className="user-homepage">
      <Dashboard
        dataChoice={dataChoice}
        chartData={chartData}
        setChartData={setChartData}
        chartType={chartType}
        handleSelectChartType={handleSelectChartType}
      />
    </div>
  );
};

export default UserHomePage;
