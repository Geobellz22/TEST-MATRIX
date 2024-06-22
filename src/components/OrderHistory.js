<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    // Example fetch logic
    const fetchedOrders = [
      { id: 1, product: 'Product 1', status: 'Delivered' },
      { id: 2, product: 'Product 2', status: 'In Transit' },
    ];
    setOrders(fetchedOrders);
  };

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.product} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
=======
import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    { id: 1, total: 300, status: 'Completed' },
    { id: 2, total: 200, status: 'Pending' }
  ]);

  useEffect(() => {
    // Simulate fetching order history from backend
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order #{order.id} - ${order.total} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
>>>>>>> 17e709e417bb91a4e1743ca83d7ccd6b700e3d03
