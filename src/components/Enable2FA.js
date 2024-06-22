import React, { useState } from 'react';

const Enable2FA = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/enable-2fa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ code })
      });

      if (response.ok) {
        setMessage('2FA enabled successfully');
      } else {
        setMessage('Failed to enable 2FA');
      }
    } catch (err) {
      setMessage('Failed to enable 2FA');
    }
  };

  return (
    <div>
      <h2>Enable Two-Factor Authentication</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        {message && <p>{message}</p>}
        <button type="submit">Enable 2FA</button>
      </form>
    </div>
  );
};

export default Enable2FA;
