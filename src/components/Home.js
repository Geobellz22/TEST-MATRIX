import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ children, greeting}) => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to Matrix Momentum</p>
      <nav>
      <Link to="/profile">Profile</Link> |
        <Link to="/products">Products</Link> |
        <Link to="/cart">Cart</Link> |
        <Link to="/order-history">Order History</Link> |
        <Link to="/order-tracking">Order Tracking</Link>
        </nav>
    </div>
  );
};

export default Home;
