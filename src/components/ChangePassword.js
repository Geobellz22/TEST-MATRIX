import React, { useState } from 'react';
//import './ChangePassword.css';

const ChangePassword = () => {
  const [form, setForm] = useState({ old_password: '', new_password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/change-password/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message || data.error);
        setForm({ old_password: '', new_password: '' });
      });
  };

  return (
    <div className="change-password">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="old_password"
          placeholder="Old Password"
          value={form.old_password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="new_password"
          placeholder="New Password"
          value={form.new_password}
          onChange={handleChange}
          required
        />
        <button type="submit">Change Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;
