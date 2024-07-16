// src/components/PortfolioDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h2>Portfolio Dashboard</h2>
      <nav>
        <Link to="/profile">Profile</Link> | 
      </nav>
      <div>
        <h3>Investment Plans</h3>
        <ul>
          {investmentPlans.map((plan, index) => (
            <li key={index}>
              <h4>{plan.name}</h4>
              <p>Return: {plan.returnPercentage}%</p>
              <p>Amount: ${plan.minAmount} - ${plan.maxAmount}</p>
              <p>Duration: {plan.duration} hours</p>
              <Link to="/register">Invest Now</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioDashboard;
