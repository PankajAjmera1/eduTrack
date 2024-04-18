import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';


import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = () => {
  const labels = getLastYearMonths();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 30, 40],
        borderColor: 'rgba(107,70,193,0.5)',
        backgroundColor: '#6b46c1',
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export const DoughnutChart = () => {
  const data = {
    labels: ['Subscribed', 'Not Subscribed'],
    datasets: [
      {
        label: 'Views',
        data: [10,68],
        borderColor: ['rgb(62,12,171)', 'rgb(214,43,129)'],
        backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

function getLastYearMonths() {
  const labels = [];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentMonth = new Date().getMonth();

  const remain = 11 - currentMonth;

  for (let i = currentMonth; i < months.length; i--) {
    const element = months[i];
    labels.unshift(element);
    if (i === 0) break;
  }

  for (let i = 11; i > remain; i--) {
    if (i === currentMonth) break;
    const element = months[i];
    labels.unshift(element);
  }

  return labels;
};


// Continent
export const ContinentPieChart = () => {
  const data = {
    labels: ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'],
    datasets: [
      {
        label: 'Sales by Continent',
        data: [30, 25, 20, 15, 5, 5], // Example data, replace with actual sales data
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Sales by Continent',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};



//Topic


export const TopicPieChart = () => {
  const data = {
    labels: ['AI', 'Web', 'Android', 'Data Science', 'UI/UX', 'Cloud Computing'],
    datasets: [
      {
        label: 'Sales by Topic',
        data: [20, 25, 15, 10, 10, 20], // Example data, replace with actual sales data
        backgroundColor: [
          'rgba(255, 99, 142, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 456, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 614, 0.6)'
        ],
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Sales by Topic',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

//Offline vs online



export const CourseTypePieChart = () => {
  const data = {
    labels: ['Online', 'Offline Classroom'],
    datasets: [
      {
        label: 'Course Type',
        data: [70, 30], // Example data, replace with actual sales data
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Online vs. Offline Classroom Courses',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

