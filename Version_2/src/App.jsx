import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Trends from './components/Trends';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import Login from './components/Login';
import Event from './components/Event'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('auth') === 'true'
  );

  const handleLoginSuccess = () => {
    localStorage.setItem('auth', 'true');
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {/* NavBar is always visible */}
      <NavBar />

      {/* Content below NavBar changes dynamically based on the route */}
      <Routes>
        {/* Route for the Login page */}
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />

        {/* Route for the Event page */}
        <Route
          path="/event"
          element={<Event />}
        />

        {/* Protected Route for the main content */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <MainContent />
                <Trends />
                <Leaderboard />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" /> // Redirect to login if not authenticated
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;