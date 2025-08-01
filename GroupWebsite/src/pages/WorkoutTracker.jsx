import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WorkoutTracker() {
  const [workouts, setWorkouts] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [duration, setDuration] = useState('');
  const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '', weight: '' }]);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', sets: '', reps: '', weight: '' }]);
  };

  const handleExerciseChange = (index, field, value) => {
    const updated = [...exercises];
    updated[index][field] = value;
    setExercises(updated);
  };

  const handleCardioSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if(token == 'admin-token'){
      setMessage('Please switch to user account');
      return
    }

    try {
    const token = localStorage.getItem('token');
      const response = await fetch("http://localhost:5050/cardio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
          distance: 0,
          time: Number(duration),
          intensity: "Medium"
        })
      });

      const data = await response.json();
      if (response.ok) {
        alert(`✅ Cardio uploaded! Points: ${data.newPoints}`);
        const newWorkout = { id: Date.now(), type: 'Cardio', duration };
        setWorkouts([...workouts, newWorkout]);
        setDuration('');
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (error) {
      console.error(error);
      alert("Upload error");
    }
  };

  const handleWeightliftingSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if(token == 'admin-token'){
      setMessage('Please switch to user account');
      return
    }

    try {
    const token = localStorage.getItem('token');
      for (const ex of exercises) {
        const response = await fetch("http://localhost:5050/weightlifting", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
          body: JSON.stringify({
            exercise: ex.name,
            sets: Number(ex.sets),
            reps: Number(ex.reps),
            weight: Number(ex.weight)
          })
        });
        const data = await response.json();
        if (!response.ok) {
          alert(data.error || `Upload failed for ${ex.name}`);
          return;
        }
      }
      alert("✅ Weightlifting workouts uploaded!");
      const newWorkout = { id: Date.now(), type: 'Weightlifting', exercises: [...exercises] };
      setWorkouts([...workouts, newWorkout]);
      setExercises([{ name: '', sets: '', reps: '', weight: '' }]);
    } catch (error) {
      console.error(error);
      alert("Upload error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl mb-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Generate Your Workout</h2>
        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={() => setSelectedType('Cardio')}
            className={`px-4 py-2 rounded-lg font-semibold ${selectedType === 'Cardio' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Cardio
          </button>
          <button
            type="button"
            onClick={() => setSelectedType('Weightlifting')}
            className={`px-4 py-2 rounded-lg font-semibold ${selectedType === 'Weightlifting' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Weightlifting
          </button>
        </div>

        {selectedType === 'Cardio' && (
          <form onSubmit={handleCardioSubmit} className="flex flex-col gap-4">
            <input
              type="number"
              placeholder="Duration (minutes)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg">
              Submit Cardio Workout
            </button>
            {message && <p className="text-center text-sm mt-2">{message}</p>}
          </form>
        )}

        {selectedType === 'Weightlifting' && (
          <form onSubmit={handleWeightliftingSubmit} className="flex flex-col gap-4">
            {exercises.map((exercise, index) => (
              <div key={index} className="border p-4 rounded-lg bg-gray-50 space-y-2">
                <input
                  type="text"
                  placeholder="Exercise (e.g. Barbell Squats)"
                  value={exercise.name}
                  onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
                  className="w-full border p-2 rounded"
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Sets"
                    value={exercise.sets}
                    onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)}
                    className="flex-1 border p-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Reps"
                    value={exercise.reps}
                    onChange={(e) => handleExerciseChange(index, 'reps', e.target.value)}
                    className="flex-1 border p-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Weight (lbs)"
                    value={exercise.weight}
                    onChange={(e) => handleExerciseChange(index, 'weight', e.target.value)}
                    className="flex-1 border p-2 rounded"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddExercise}
              className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800"
            >
              Add another exercise
            </button>
            <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg">
              Submit Weightlifting Workout
            </button>
            {message && <p className="text-center text-sm mt-2">{message}</p>}
          </form>
        )}

        {workouts.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Workout Added!</h3>
            <ul className="space-y-2">
              {workouts.map((w) => (
                <li key={w.id} className="bg-gray-100 rounded-lg p-3 shadow-sm">
                  <span className="font-semibold text-blue-600">{w.type}</span>
                  {w.type === 'Cardio' ? (
                    <> - {w.duration} min</>
                  ) : (
                    <ul className="mt-2 space-y-1 pl-4 list-disc">
                      {w.exercises.map((ex, i) => (
                        <li key={i}>
                          {ex.name} — {ex.sets} sets × {ex.reps} reps @ {ex.weight} lbs
                        </li>
                      ))}
                    </ul>
                  )}
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
