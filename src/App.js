import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PortfolioDashboard from './components/PortfolioDashboard';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Home from './components/Home';
import SecurityQuestions from './components/SecurityQuestions';
import ActiveSessions from './components/ActiveSessions';
import ChangePassword from './components/ChangePassword';
import ReferralProgram from './components/ReferralProgram';
import Ratings from './components/Ratings';
import RatingsList from './components/RatingsList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PortfolioDashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/security-questions" element={<SecurityQuestions />} />
          <Route path="/active-sessions" element={<ActiveSessions />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/referral-program" element={<ReferralProgram />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/ratings-list" element={<RatingsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
