import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const DisplayChart = ({ chartData, chartType }) => {
  const maxDataValue = Math.max(...chartData.datasets[0].data);
  const suggestedMax = maxDataValue + 10;

  const containerStyle = {
    width: '800px',
  };

  const chartOptions = {
    maintainAspectRatio: true,
    aspectRatio: 2,
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax,
      },
    },
  };

  return (
    <div style={containerStyle}>
      {chartType === 'line' ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <Bar data={chartData} options={chartOptions} />
      )}
    </div>
  );
};

export default DisplayChart;
