import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SystemProcessesChart = () => {
  const data = {
    labels: ['Process 1', 'Process 2', 'Process 3', 'Process 4'],
    datasets: [
      {
        label: 'CPU Usage',
        data: [65, 59, 80, 81],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={data} />;
};

export default SystemProcessesChart;
