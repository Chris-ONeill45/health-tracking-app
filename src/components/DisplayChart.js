import React from 'react';
import { Line } from 'react-chartjs-2';

const DisplayChart = ({ label, units, entries }) => {
  const chartData = {
    labels: entries.map((entry) => entry.timeStamp),
    datasets: [
      {
        label,
        data: entries.map((entry) => entry.measurement),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartKey = `${label}_${units}_${entries.length}`;

  return (
    <div key={chartKey}>
      <Line data={chartData} />
      <p>Units: {units}</p>
    </div>
  );
};

export default DisplayChart;
