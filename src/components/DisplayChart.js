import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const DisplayChart = ({ chartData, chartType }) => {
  const maxDataValue = Math.max(...chartData.datasets[0].data);
  const minDataValue = Math.min(...chartData.datasets[0].data);
  const suggestedMax = maxDataValue + 10;
  const suggestedMin = minDataValue - 10;

  const chartOptions = {
    maintainAspectRatio: true,
    aspectRatio: 2,
    scales: {
      y: {
        suggestedMin,
        suggestedMax,
      },
    },
  };
  console.log('ChartData:', chartData);

  return (
    <div className="display-chart">
      {chartType === 'line' ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <Bar data={chartData} options={chartOptions} />
      )}
    </div>
  );
};

export default DisplayChart;
