import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const dummyData = [
  { date: '2025-06-01', weight: 100 },
  { date: '2025-06-08', weight: 105 },
  { date: '2025-06-15', weight: 110 },
  { date: '2025-06-22', weight: 115 },
  { date: '2025-06-29', weight: 120 },
];

function ProgressTracker() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Progress Tracker</h1>

      <div className="w-full max-w-3xl h-80 mb-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis label={{ value: 'Weight (lbs)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* More stuff */}
      <p className="text-xl text-gray-600">More content can go here, like goals or stats.</p>
    </div>
  );
}
export default ProgressTracker;
