import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Plus } from 'lucide-react';


function WorkoutTracker(){
  const [workouts, setWorkouts] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  // const [form, setForm] = useState({ type: '', duration: '' });

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleAddWorkout = (e) => {
  //   e.preventDefault();
  //   setWorkouts([...workouts, { ...form, id: Date.now() }]);
  //   setForm({ type: '', duration: '' });
  // };
  const [duration, setDuration] = useState('');
  const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '', weight: '' }]);

  const navigate = useNavigate();

  const handleAddExercise = () => {
    setExercises([...exercises, { name: '', sets: '', reps: '', weight: '' }]);
  };

  const handleExerciseChange = (index, field, value) => {
    const updated = [...exercises];
    updated[index][field] = value;
    setExercises(updated);
  };

  const handleCardioSubmit = (e) => {
  e.preventDefault();
  const newWorkout = {
    id: Date.now(),
    type: 'Cardio',
    duration
  };
  setWorkouts([...workouts, newWorkout]);
  setDuration('');
};

const handleWeightliftingSubmit = (e) => {
  e.preventDefault();
  const newWorkout = {
    id: Date.now(),
    type: 'Weightlifting',
    exercises: [...exercises]
  };
  setWorkouts([...workouts, newWorkout]);
  setExercises([{ name: '', sets: '', reps: '', weight: '' }]);
};

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl mb-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Generate Your Workout</h2>
        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={() => setSelectedType('Cardio')}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedType === 'Cardio' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Cardio
          </button>
          <button
            type="button"
            onClick={() => setSelectedType('Weightlifting')}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedType === 'Weightlifting' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
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
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6"> 
      <div className="bg-white shadow-lg rounded-2xl p-5">
        <h4 className="font-semibold text-lg text-blue-700 mb-2">
            Full Body Circuit
        </h4> 
        <p className="text-gray-700 text-sm"> A balanced full-body workout including squats, push-ups, and jumping jacks for a complete session. </p>
        <p className="text-gray-500 text-xs mt-1">Ideal for: Quick sessions, Home workout, Conditioning</p> 
      </div> 
      <div className="bg-white shadow-lg rounded-2xl p-5"> 
        <h4 className="font-semibold text-lg text-blue-700 mb-2">
          Cardio Blast
        </h4> 
        <p className="text-gray-700 text-sm"> Includes running, cycling, or jump rope to elevate heart rate and burn calories efficiently. </p> <p className="text-gray-500 text-xs mt-1">Ideal for: Cardio lovers, Weight loss, Endurance training</p> 
      </div> 
      <div className="bg-white shadow-lg rounded-2xl p-5"> 
        <h4 className="font-semibold text-lg text-blue-700 mb-2">Strength Focus</h4>
          <p className="text-gray-700 text-sm"> Weightlifting plan with compound movements like deadlifts, bench press, and rows to build muscle strength. </p>
          <p className="text-gray-500 text-xs mt-1">Ideal for: Strength training, Muscle building, Gym sessions</p>
      </div> 
    </div>
    </div>
    </>
  );
};
export default WorkoutTracker;
