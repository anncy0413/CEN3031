import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function ProgressTracker() {
  const [weightData, setWeightData] = useState([]);
  const [cardioData, setCardioData] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    // Fetch weight logs
    fetch(`http://localhost:5050/weights/user/${userId}`)
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(item => ({
          date: item.date.slice(0, 10),
          weight: item.weight
        }));
        setWeightData(formatted);
      })
      .catch(err => console.error(err));

    // Fetch cardio logs
    fetch(`http://localhost:5050/cardio/user/${userId}`)
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(item => ({
          date: item.date.slice(0, 10),
          time: item.time
        }));
        setCardioData(formatted);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 py-8 space-y-12">
      <h1 className="text-3xl font-semibold">Progress Tracker</h1>

      {/* Weight Tracker */}
      <div className="w-full max-w-3xl h-80">
        <h2 className="text-xl font-semibold mb-2 text-center">Weight Progress</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weightData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis label={{ value: 'Weight (lbs)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#4F46E5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Cardio Tracker */}
      <div className="w-full max-w-3xl h-80">
        <h2 className="text-xl font-semibold mb-2 text-center">Cardio Time Progress</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={cardioData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis label={{ value: 'Time (minutes)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="time" stroke="#10B981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProgressTracker;
