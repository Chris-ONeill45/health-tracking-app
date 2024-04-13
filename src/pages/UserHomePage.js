import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../components/Dashboard';
import useAuthContext from '../hooks/useAuthContext';
import 'chart.js/auto';

const UserHomePage = () => {
  const { user } = useAuthContext();
  const [selectedDataSet, setSelectedDataSet] = useState('Weight');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  const handleSelectDataSet = (dataSet) => {
    setSelectedDataSet(dataSet);
  };

  // const userData = {
  //   id: results.rows[0].id,
  //   email: results.rows[0].email,
  //   dob: results.rows[0].dob,
  //   height: results.rows[0].height,
  //   displayname: results.rows[0].displayname,
  //   firebase_uid: results.rows[0].firebase_uid,
  //   relatedData: results.rows.map((row) => ({
  //     dataset_label: row.dataset_label,
  //     dataset_unit: row.dataset_unit,
  //    entries: [{entry_measurement}, {entry_timestamp}]
  //     entry_measurement: row.entry_measurement,
  //     entry_timestamp: row.entry_timestamp,
  //   }

  const fetchData = async () => {
    try {
      // await axios.get(`/retrieveuser/${user.uid}`);
      const response = await axios.get(
        `http://localhost:5050/retrieveuser/${user.uid}`
      );
      console.log(response);
      // const { relatedData } = response;
      // const labels = relatedData[0].dataset_label;
      // const measurements = relatedData[0].dataset_label;
      // setChartData({
      //   labels,
      //   datasets: [
      //     {
      //       label: `${selectedDataSet}`,
      //       data: measurements,
      //       fill: false,
      //       borderColor: 'rgb(75, 192, 192)',
      //       tension: 0.1,
      //     },
      //   ],
      // });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(user.uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const datasets = [
    { value: 'weight', label: 'Weight' },
    { value: 'bloodSugar', label: 'Blood Sugar' },
    { value: 'calorieIntake', label: 'Calorie Intake' },
  ];

  return (
    <div>
      <h1>hello!</h1>
    </div>
    // <div>
    //   <Dashboard
    //     selectedDataSet={selectedDataSet}
    //     handleSelectDataSet={handleSelectDataSet}
    //     datasets={datasets}
    //     chartData={chartData}
    //     setChartData={setChartData}
    //   />
    // </div>
  );
};

export default UserHomePage;
