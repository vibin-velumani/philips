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

  useEffect(() => {
    axios.get('/api/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));

    axios.get('/api/customers')
      .then(res => setCustomers(res.data))
      .catch(err => console.log(err));

    axios.get('/api/revenue')
      .then(res => setRevenue(res.data))
      .catch(err => console.log(err));

    axios.get('/api/inventory')
      .then(res => setInventory(res.data))
      .catch(err => console.log(err));

    axios.get('/api/feedback')
      .then(res => setFeedback(res.data))
      .catch(err => console.log(err));

    axios.get('/api/sales-by-region')
      .then(res => setSalesByRegion(res.data))
      .catch(err => console.log(err));
  }, []);

  const salesChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3, 9],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Orders</h3>
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <div>
                <span>Order ID:</span> {order.id}
              </div>
              <div>
                <span>Customer Name:</span> {order.customerName}
              </div>
              <div>
                <span>Total Price:</span> {order.totalPrice}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Customers</h3>
        <ul>
          {customers.map(customer => (
            <li key={customer.id}>
              <div>
                <span>Customer ID:</span> {customer.id}
              </div>
              <div>
                <span>Name:</span> {customer.name}
              </div>
              <div>
                <span>Email:</span> {customer.email}
              </div>
            </li>
          ))}
      </ul>
        </div>
      <div>
        <h3>Revenue</h3>
        <p>{revenue}</p>
      </div>
      <div>
        <h3>Inventory</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => (
              <tr key={item.id}>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Feedback</h3>
        <ul>
          {feedback.map(feedback => (
            <li key={feedback.id}>
              <div>
                <span>Customer Name:</span> {feedback.customerName}
              </div>
              <div>
                <span>Rating:</span> {feedback.rating}
              </div>
              <div>
                <span>Comment:</span> {feedback.comment}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Sales by Region</h3>
        {/* <Line data={salesByRegion} /> */}
      </div>
      <div>
        <h3>Sales by Month</h3>
        {/* <Line data={salesChartData} /> */}
      </div>
    </div>
  );
};

export default Dashboard;