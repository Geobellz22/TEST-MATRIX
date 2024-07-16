import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ children, greeting}) => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to Matrix Momentum</p>
      <nav>
      <Link to="/profile">Profile</Link>
        </nav>
    </div>
  );
};

export default Home;
