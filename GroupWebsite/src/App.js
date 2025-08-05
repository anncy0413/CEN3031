import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import WorkoutTracker from './pages/WorkoutTracker';
import Leaderboard from './pages/Leaderboard';
import ProgressTracker from './pages/ProgressTracker';
import ChestPage from './pages/ChestPage';
import BicepsPage from './pages/BicepsPage';
import AbdominalsPage from './pages/AbdominalsPage';
import BackPage from './pages/BackPage';
import CalvesPage from './pages/CalvesPage';
import GlutesPage from './pages/GlutesPage';
import HamstringsPage from './pages/HamstringsPage';
import TricepsPage from './pages/TricepsPage';
import QuadsPage from './pages/QuadsPage';
import ShoulderPage from './pages/ShouldersPage';
import ProfilePage from './pages/Profile';
import ToolPage from './pages/Tool';
import { useAuth } from './AuthContext';

function App() {
  const { loading } = useAuth(); // Wait for auth to finish

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/workout" element={<WorkoutTracker />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/chest" element={<ChestPage />} />
        <Route path="/biceps" element={<BicepsPage />} />
        <Route path="/abdominals" element={<AbdominalsPage />} />
        <Route path="/back" element={<BackPage />} />
        <Route path="/calves" element={<CalvesPage />} />
        <Route path="/glutes" element={<GlutesPage />} />
        <Route path="/hamstrings" element={<HamstringsPage />} />
        <Route path="/triceps" element={<TricepsPage />} />
        <Route path="/quads and adductors" element={<QuadsPage />} />
        <Route path="/shoulders" element={<ShoulderPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tool" element={<ToolPage />} />

      </Routes>
    </>
  );
}

export default App;

