import React, { useState } from "react";

export default function Tool() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);
  const [activity, setActivity] = useState("1.375");
  const [goal, setGoal] = useState("maintain");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    let bmr;

    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * parseFloat(activity);

    let finalCalories;
    if (goal === "lose") {
      finalCalories = tdee - 500;
    } else if (goal === "gain") {
      finalCalories = tdee + 500;
    } else {
      finalCalories = tdee;
    }

    setCalories(Math.round(finalCalories));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Fitness Tools
      </h1>

      <div className="bg-white max-w-3xl mx-auto shadow-lg rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Calorie Calculator
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(+e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(+e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(+e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Activity Level:</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">Light (1–3 days/week)</option>
              <option value="1.55">Moderate (3–5 days/week)</option>
              <option value="1.725">Active (6–7 days/week)</option>
              <option value="1.9">Very Active (hard daily exercise)</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Goal:</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="maintain">Maintain Weight</option>
              <option value="lose">Lose Weight</option>
              <option value="gain">Gain Weight</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={calculateCalories}
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700"
          >
            Calculate
          </button>
        </div>

        {calories !== null && (
          <div className="text-center mt-4 text-xl font-medium text-green-600">
            Your daily calorie needs:{" "}
            <span className="font-bold">{calories}</span> kcal
          </div>
        )}
      </div>
    </div>
  );
}
