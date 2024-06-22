<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token from local storage or any other storage mechanism
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token from local storage or any other storage mechanism
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
>>>>>>> 17e709e417bb91a4e1743ca83d7ccd6b700e3d03
