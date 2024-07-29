import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HealthMonitoringChart = () => {
  const data = {
    labels: ['CPU Usage', 'Memory Usage', 'Disk Usage', 'Network Activity'],
    datasets: [
      {
        label: 'Metrics',
        data: [12, 19, 3, 5],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default HealthMonitoringChart;
