import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaWallet } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './LoginRegister.css';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    retypeEmail: '',
    password: '',
    retypePassword: '',
    bitcoinWallet: '',
    ethereumWallet: '',
    usdtWallet: '',
    tronWallet: '',
    dogecoinWallet: '',
    shibaInuWallet: '',
    twoFactorCode: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (form.email !== form.retypeEmail) {
      setError('Emails do not match');
      return false;
    }
    if (form.password !== form.retypePassword) {
      setError('Passwords do not match');
      return false;
    }
    if (!form.twoFactorCode) {
      setError('Two-factor authentication code is required');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Mock registration logic
    setSuccess('Registration successful! Please check your email for verification.');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <FaUser />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FaUser />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FaEnvelope />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FaEnvelope />
          <input
            type="email"
            name="retypeEmail"
            placeholder="Retype Email"
            value={form.retypeEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FaLock />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FaLock />
          <input
            type="password"
            name="retypePassword"
            placeholder="Retype Password"
            value={form.retypePassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FaWallet />
          <input
            type="text"
            name="bitcoinWallet"
            placeholder="Bitcoin Wallet"
            value={form.bitcoinWallet}
            onChange={handleChange}
          />
        </div>
        <div>
          <FaWallet />
          <input
            type="text"
            name="ethereumWallet"
            placeholder="Ethereum Wallet"
            value={form.ethereumWallet}
            onChange={handleChange}
          />
        </div>
        <div>
          <FaWallet />
          <input
            type="text"
            name="usdtWallet"
            placeholder="USDT TRC 20 Wallet"
            value={form.usdtWallet}
            onChange={handleChange}
          />
        </div>
        <div>
          <FaWallet />
          <input
            type="text"
            name="tronWallet"
            placeholder="Tron Wallet"
            value={form.tronWallet}
            onChange={handleChange}
          />
        </div>
        <div>
          <FaWallet />
          <input
            type="text"
            name="dogecoinWallet"
            placeholder="Dogecoin Wallet"
            value={form.dogecoinWallet}
            onChange={handleChange}
          />
        </div>
        <div>
          <FaWallet />
          <input
            type="text"
            name="shibaInuWallet"
            placeholder="Shiba Inu Wallet"
            value={form.shibaInuWallet}
            onChange={handleChange}
          />
        </div>
        <div>
          <FaLock />
          <input
            type="text"
            name="twoFactorCode"
            placeholder="2FA Code"
            value={form.twoFactorCode}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
