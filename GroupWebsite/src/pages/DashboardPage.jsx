import React from 'react';
import MuscleMap from './Musclemap';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Xpump Interactive Muscle Map</h1>
      <p className="text-center text-gray-700 mb-6 text-lg">Click on a muscle group below to explore focused workouts and tips</p>

      <MuscleMap />
    </div>
  );
}

export default DashboardPage;
