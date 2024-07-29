import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MemoryUsageChart = () => {
  const data = {
    labels: ['Memory A', 'Memory B', 'Memory C', 'Memory D'],
    datasets: [
      {
        label: 'Memory Usage',
        data: [12, 19, 3, 5],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default MemoryUsageChart;
