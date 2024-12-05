import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import DiaryPage from './pages/DiaryPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
          <Navigation />
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/diary"
              element={
                <PrivateRoute>
                  <DiaryPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;