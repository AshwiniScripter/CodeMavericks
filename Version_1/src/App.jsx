import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Trends from './components/Trends';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  // Simulate authentication state (replace with actual authentication logic)
  const isAuthenticated = false; // Set to true if the user is logged in

  return (
    <Router>
      <Routes>
        {/* Route for the Login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the main app content */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <NavBar />
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