import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Trends from './components/Trends';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import Login from './components/Login';
import Event from './components/Event';
import FlatFinder from './components/FaltFinder'; // ✅ Corrected import
import Rentify from './components/Rentify'; // ✅ Added missing import

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('auth') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('auth', isAuthenticated ? 'true' : 'false');
  }, [isAuthenticated]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/event" element={<Event />} />
        <Route path="/flatfinder" element={<FlatFinder />} />  {/* ✅ Correct navigation */}
        <Route path="/rentify" element={<Rentify />} />  {/* ✅ Added missing Rentify route */}
        <Route path="/" element={isAuthenticated ? (
            <>
              <MainContent />
              <Trends />
              <Leaderboard />
              <Footer />
            </>
          ) : (
            <Navigate to="/login" />
          )}
        />
      </Routes>
    </Router>
  );
};

export default App;
