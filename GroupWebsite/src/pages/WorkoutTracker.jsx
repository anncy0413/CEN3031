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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mb-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Generate Your Workout</h2>
        <form onSubmit={handleAddWorkout} className="flex flex-col gap-4">
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Workout Type</option>
            <option value="Weightlifting">Weightlifting</option>
            <option value="Cardio">Cardio</option>
          </select>
          <input
            type="number"
            name="duration"
            placeholder="Duration (minutes)"
            value={form.duration}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
            <input
            type="number"
            name="Weight"
            placeholder="Weight (lbs)"
            value={form.weight}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition font-semibold shadow"
          >
            Add Workout
          </button>
        </form>

        {workouts.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Your Workout Log</h3>
            <ul className="space-y-2">
              {workouts.map((w) => (
                <li key={w.id} className="bg-gray-100 rounded-lg p-3 shadow-sm">
                  <span className="font-semibold text-blue-600">{w.type}</span> - {w.duration} min
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-5">
          <h4 className="font-semibold text-lg text-blue-700 mb-2">Full Body Circuit</h4>
          <p className="text-gray-700 text-sm">
            A balanced full-body workout including squats, push-ups, and jumping jacks for a complete session.
          </p>
          <p className="text-gray-500 text-xs mt-1">Ideal for: Quick sessions, Home workout, Conditioning</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-5">
          <h4 className="font-semibold text-lg text-blue-700 mb-2">Cardio Blast</h4>
          <p className="text-gray-700 text-sm">
            Includes running, cycling, or jump rope to elevate heart rate and burn calories efficiently.
          </p>
          <p className="text-gray-500 text-xs mt-1">Ideal for: Cardio lovers, Weight loss, Endurance training</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-5">
          <h4 className="font-semibold text-lg text-blue-700 mb-2">Strength Focus</h4>
          <p className="text-gray-700 text-sm">
            Weightlifting plan with compound movements like deadlifts, bench press, and rows to build muscle strength.
          </p>
          <p className="text-gray-500 text-xs mt-1">Ideal for: Strength training, Muscle building, Gym sessions</p>
        </div>
      </div>
    </div>
  );
}

export default WorkoutTracker;
