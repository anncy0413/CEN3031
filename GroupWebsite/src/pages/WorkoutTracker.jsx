import React, { useState } from 'react';

function WorkoutTracker() {
  const [workouts, setWorkouts] = useState([]);
  const [form, setForm] = useState({ type: '', duration: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddWorkout = (e) => {
    e.preventDefault();
    setWorkouts([...workouts, { ...form, id: Date.now() }]);
    setForm({ type: '', duration: '' });
  };

  return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Log Your Workout</h2>
        <form onSubmit={handleAddWorkout} className="flex flex-col gap-3">
          <input
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="type"
            placeholder="Workout Type (e.g., Running)"
            value={form.type}
            onChange={handleChange}
            required
          />
          <input
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="duration"
            placeholder="Duration (minutes)"
            value={form.duration}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-600 transition font-semibold shadow"
          >
            Add Workout
          </button>
        </form>
        {workouts.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Workout Log:</h3>
            <ul className="space-y-1">
              {workouts.map((w) => (
                <li key={w.id} className="text-gray-700">
                  • {w.type} - {w.duration} min
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkoutTracker;
