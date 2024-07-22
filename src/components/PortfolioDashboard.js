import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioDashboard.css';

const investmentPlans = [
  { name: 'BEGINNERS PLAN', return: '5%', amountRange: '$100 - $999', duration: '20 hours' },
  { name: 'STAR PLAN', return: '10%', amountRange: '$1,000 - $4,999', duration: '24 hours' },
  { name: 'ADVANCE PLAN', return: '12%', amountRange: '$5,000 - $9,999', duration: '24 hours' },
  { name: 'BUSINESS PLAN', return: '9%', amountRange: '$3,000 - $12,000', duration: '5 hours' },
  { name: 'GOLDEN PLAN', return: '10%', amountRange: '$10,000 - $20,000', duration: '78 hours' },
  { name: 'PREMIUM PLAN', return: '20%', amountRange: '$20,000 - UNLIMITED', duration: '48 hours' }
];

const walletAddresses = [
  { name: 'Bitcoin', address: 'bc1q372ruvgmqa0uwumdzqsvgvc6z2w030pxvkw4ww' },
  { name: 'Tether USDT TRC 20', address: 'TB9JQFM5Jndp6hqvxvQvKa5RrbrprDkJVo' },
  { name: 'Tron', address: 'TB9JQFM5Jndp6hqvxvQvKa5RrbrprDkJVo' },
  { name: 'Ethereum', address: '0x1a158E08B0bd1ac5D991e85e3A9Dd373D21a1489' },
  { name: 'BNB', address: 'bnb1ggnnlqthfqcx0rc58aagpypamcrcspsn6qm6j9' },
  { name: 'Dogecoin', address: 'DEereXL4WAi4MNcVdCfTcBPMEB1a5UFMUe' },
  { name: 'USDT ERC20', address: '0x1a158E08B0bd1ac5D991e85e3A9Dd373D21a1489' },
  { name: 'Bitcoin Cash', address: 'qrm8ad75nechkxtaa7jyv577zdh7whze2qs28z4jj2' }
];

const PortfolioDashboard = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      try {
        const response = await fetch('/api/transaction-history'); // Replace with your actual API endpoint
        const data = await response.json();
        setTransactionHistory(data);
      } catch (error) {
        console.error('Error fetching transaction history:', error);
      }
    };

    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications'); // Replace with your actual API endpoint
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    const fetchRatings = async () => {
      try {
        const response = await fetch('/api/ratings'); // Replace with your actual API endpoint
        const data = await response.json();
        setRatings(data);
      } catch (error) {
        console.error('Error fetching ratings:', error);
      }
    };

    fetchTransactionHistory();
    fetchNotifications();
    fetchRatings();
  }, []);

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard');
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Your Company Name</h1>
        <nav>
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/security-questions" className="nav-link">Security Questions</Link>
          <Link to="/active-sessions" className="nav-link">Active Sessions</Link>
          <Link to="/change-password" className="nav-link">Change Password</Link>
          <Link to="/company-profile" className="nav-link">CompanyProfile</Link>
        
        </nav>
      </header>
      <div className="content">
        <h3>Investment Plans</h3>
        {investmentPlans.map((plan, index) => (
          <div key={index} className="investment-plan">
            <h4>{plan.name}</h4>
            <p>Return: {plan.return}</p>
            <p>Min-Max Amount: {plan.amountRange}</p>
            <p>Duration: {plan.duration}</p>
            <Link to="/register" className="invest-link">Invest Now</Link>
          </div>
        ))}

        <h3>Transaction History</h3>
        {transactionHistory.length > 0 ? (
          transactionHistory.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <p>Type: {transaction.type}</p>
              <p>Amount: {transaction.amount} {transaction.currency}</p>
              <p>Date: {transaction.date}</p>
            </div>
          ))
        ) : (
          <p>No transactions available</p>
        )}

        <h3>Notifications</h3>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div key={index} className="notification-item">
              <p>{notification.message}</p>
              <p>Date: {notification.date}</p>
            </div>
          ))
        ) : (
          <p>No notifications available</p>
        )}

        <h3>Ratings</h3>
        {ratings.length > 0 ? (
          ratings.map((rating, index) => (
            <div key={index} className="rating-item">
              <p>Rating: {rating.score} / 5</p>
              <p>Comment: {rating.comment}</p>
              <p>Date: {rating.date}</p>
            </div>
          ))
        ) : (
          <p>No ratings available</p>
        )}

        <h3>Referral Program</h3>
        <div className="referral-program">
          <p>Invite others and earn rewards:</p>
          <ul>
            <li>Level 1: 4%</li>
            <li>Level 2: 6%</li>
            <li>Level 3: 8%</li>
            <li>Level 4: 10%</li>
          </ul>
          <Link to="/referral" className="referral-link">Refer Now</Link>
        </div>

        <h3>Direct Wallet Payments</h3>
        {walletAddresses.map((wallet, index) => (
          <div key={index} className="wallet-item">
            <p>{wallet.name}: {wallet.address}</p>
            <button onClick={() => handleCopy(wallet.address)}>Copy Address</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDashboard;
