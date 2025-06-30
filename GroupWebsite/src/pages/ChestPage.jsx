// ChestPage.jsx
import React from 'react';

function ChestPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Chest Workouts</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1️⃣ Why Train Your Chest?</h2>
        <p className="text-gray-700 leading-relaxed">A strong chest enhances pushing power, improves posture, and balances upper body aesthetics. Training your chest helps with daily activities like pushing doors and stabilizes the shoulders during compound lifts. A well-developed chest also protects your shoulders by taking on load during upper body exercises.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2️⃣ Warm-Up Tips</h2>
        <p className="text-gray-700 leading-relaxed">Before starting, perform 5-10 minutes of light cardio followed by dynamic stretches such as arm circles, band pull-aparts, and shoulder rotations. This will increase blood flow and reduce the risk of injury during pressing movements.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3️⃣ Core Exercises</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Bench Press</h3>
            <p className="text-gray-600 text-sm">4 sets of 8 reps. Keep your feet planted and lower the bar to mid-chest with control before pressing up powerfully.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Push-Ups</h3>
            <p className="text-gray-600 text-sm">3 sets of 20 reps. Engage your core, keep elbows at a 45° angle, and lower until your chest is just above the floor.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Incline Dumbbell Press</h3>
            <p className="text-gray-600 text-sm">3 sets of 12 reps. Targets the upper chest; ensure the bench is set at a 30° incline for optimal tension.</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4️⃣ Post-Workout Stretch</h2>
        <p className="text-gray-700 leading-relaxed">Stretch your chest after training by holding a doorway chest stretch for 30 seconds on each side and performing gentle arm swings to reduce tightness, aiding muscle recovery and flexibility.</p>
      </section>

      <p className="text-sm text-gray-500 text-center">💡 Tip: Consistency and proper form are key to effective chest development. Focus on feeling the chest muscles engage during each rep rather than simply moving the weight.</p>
    </div>
  );
}

export default ChestPage;
