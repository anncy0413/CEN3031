import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Xpump Interactive Muscle Map</h1>
      <p className="text-center text-gray-700 mb-6 text-lg">Tap a muscle group below to explore focused workouts and tips</p>

      <div className="relative max-w-[700px] w-full flex items-center justify-center">
        <div className="flex flex-col space-y-6 mr-6">
          {['Chest', 'Abdominals'].map(label => (
            <button
              key={label}
              onClick={() => navigate(`/${label.toLowerCase()}`)}
              className="bg-blue-600 text-white font-bold w-40 py-4 rounded-xl text-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl"
            >
              {label}
            </button>
          ))}
        </div>

        <img
          src="/muscle-4320425_1920.png"
          alt="Muscle Map"
          className="w-100 h-auto rounded-xl shadow-xl"
        />

        <div className="flex flex-col space-y-6 ml-6">
          {['Biceps', 'Back'].map(label => (
            <button
              key={label}
              onClick={() => navigate(`/${label.toLowerCase()}`)}
              className="bg-blue-600 text-white font-bold w-40 py-4 rounded-xl text-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
