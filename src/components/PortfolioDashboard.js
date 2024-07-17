// src/components/PortfolioDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioDashboard.css';

const investmentPlans = [
  { name: 'BEGINNERS PLAN', returnPercentage: 5, minAmount: 100, maxAmount: 999, duration: 20 },
  { name: 'STAR PLAN', returnPercentage: 10, minAmount: 1000, maxAmount: 4999, duration: 24 },
  { name: 'ADVANCE PLAN', returnPercentage: 12, minAmount: 5000, maxAmount: 9999, duration: 24 },
  { name: 'BUSINESS PLAN', returnPercentage: 9, minAmount: 3000, maxAmount: 12000, duration: 5 },
  { name: 'GOLDEN PLAN', returnPercentage: 10, minAmount: 10000, maxAmount: 20000, duration: 78 },
  { name: 'PREMIUM PLAN', returnPercentage: 20, minAmount: 20000, maxAmount: 'UNLIMITED', duration: 48 }
];

const PortfolioDashboard = () => {
  return (
    <div className="dashboard">
    <header className="dashboard-header">
      <h2>MATRIX MOMENTUM</h2>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/profile" className="nav-link">profile</Link> | 
        <Link to="/Login" className="nav-link">Login</Link>
        <Link to="/Register" className="nav-link">Register</Link>
      </nav>
      </header>
      <div className="content">
        <h3>Investment Plans</h3>
        <ul className="investment-plans">
          {investmentPlans.map((plan, index) => (
            <li key={index} className="investment-plan">
              <h4>{plan.name}</h4>
              <p>Return: {plan.returnPercentage}%</p>
              <p>Amount: ${plan.minAmount} - ${plan.maxAmount}</p>
              <p>Duration: {plan.duration} hours</p>
              <Link to="/register" className="invest-link">Invest Now</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioDashboard;
