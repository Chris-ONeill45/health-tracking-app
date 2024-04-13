import React from 'react';
import { Line } from 'react-chartjs-2';
// import axios from 'axios';

const DisplayChart = ({ chartData }) => {
  // const DisplayChart = ({ label, units }) => {
  //   const [chartData, setChartData] = useState({
  //     labels: [],
  //     datasets: [
  //       {
  //         label: `${label} (${units})`,
  //         data: [],
  //         fill: false,
  //         borderColor: 'rgb(75, 192, 192)',
  //         tension: 0.1,
  //       },
  //       // {
  //       //   label,
  //       //   data: entries.map((entry) => entry.measurement),
  //       //   fill: false,
  //       //   borderColor: 'rgb(75, 192, 192)',
  //       //   tension: 0.1,
  //       // },
  //     ],
  //   });

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5050/adddata');
  //       const { data } = response;
  //       const labels = data.map((entry) => entry.timeStamp);
  //       const measurements = data.map((entry) => entry.measurement);
  //       setChartData({
  //         labels,
  //         datasets: [
  //           {
  //             label: `${label} (${units})`,
  //             data: measurements,
  //             fill: false,
  //             borderColor: 'rgb(75, 192, 192)',
  //             tension: 0.1,
  //           },
  //         ],
  //       });
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default DisplayChart;
