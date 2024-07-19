import React, { useState, useEffect } from 'react';
//import './ActiveSessions.css';

const ActiveSessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch('/api/active-sessions/')
      .then((response) => response.json())
      .then((data) => setSessions(data));
  }, []);

  const handleLogoutOtherSessions = () => {
    fetch('/api/logout-other-sessions/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => alert(data.message));
  };

  return (
    <div className="active-sessions">
      <h2>Active Sessions</h2>
      <ul>
        {sessions.map((session) => (
          <li key={session.session_key}>
            {session.user} - {new Date(session.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
      <button onClick={handleLogoutOtherSessions}>Logout Other Sessions</button>
    </div>
  );
};

export default ActiveSessions;
