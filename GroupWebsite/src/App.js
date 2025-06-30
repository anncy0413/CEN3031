import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import WorkoutTracker from './pages/WorkoutTracker';
import Leaderboard from './pages/Leaderboard';
import Challenges from './pages/Challenges';
import ProgressTracker from './pages/ProgressTracker';
import ChestPage from './pages/ChestPage';
import BicepsPage from './pages/BicepsPage';
import AbdominalsPage from './pages/AbdominalsPage';
import BackPage from './pages/BackPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/workout" element={<WorkoutTracker />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/chest" element={<ChestPage />} />
        <Route path="/biceps" element={<BicepsPage />} />
        <Route path="/abdominals" element={<AbdominalsPage />} />
        <Route path="/back" element={<BackPage />} />
      </Routes>
    </>
  );
}

export default App;
