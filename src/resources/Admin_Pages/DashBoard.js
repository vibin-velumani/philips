import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [salesByRegion, setSalesByRegion] = useState({});

  

  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;