import React, { useEffect } from 'react';
import { FaUsers, FaBoxOpen, FaShoppingCart, FaDollarSign } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const Overview = () => {
  const stats = [
    { title: 'Total Users', value: '1,250', icon: <FaUsers className="text-white w-6 h-6" />, bg: 'bg-blue-500' },
    { title: 'Packages', value: '22', icon: <FaBoxOpen className="text-white w-6 h-6" />, bg: 'bg-green-500' },
    { title: 'Bookings', value: '82', icon: <FaShoppingCart className="text-white w-6 h-6" />, bg: 'bg-yellow-500' },
    { title: 'Revenue', value: '156,400 BDT', icon: <FaDollarSign className="text-white w-6 h-6" />, bg: 'bg-purple-500' },
  ];

  // Chart data and options
  const chartData = {
    labels: ['May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Bookings',
        data: [ 6, 14, 35, 27],
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1F2937',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#4B5563', font: { size: 12 } },
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
      },
      x: {
        ticks: { color: '#4B5563', font: { size: 12 } },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800"
      >
        Overview
      </motion.h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <div className={`${stat.bg} p-3 rounded-full mr-4 flex items-center justify-center`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm sm:text-base">{stat.title}</p>
              <p className="text-lg sm:text-xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart Section dffv*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Booking Trends</h2>
        <div className="h-64 sm:h-80">
          <Line data={chartData} options={chartOptions} />
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;