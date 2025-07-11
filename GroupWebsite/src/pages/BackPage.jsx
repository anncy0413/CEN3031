// BackPage.jsx
import React from 'react';

function BackPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Back Workouts</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why Train Your Back?</h2>
        <p className="text-gray-700 leading-relaxed">Training your back is essential for improving posture, building overall strength, and reducing the risk of injuries. A strong back supports daily activities like lifting and carrying while balancing your upper body aesthetics with a V-taper look.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Warm-Up Tips</h2>
        <p className="text-gray-700 leading-relaxed">Start with 5-10 minutes of light cardio and dynamic movements such as arm swings, shoulder rolls, and cat-camel stretches to prepare your spine and upper back for exercise.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Core Exercises</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Pull-Ups</h3>
            <p className="text-gray-600 text-sm">4 sets of 8 reps. Engage your lats fully and control the lowering phase for optimal back engagement.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Deadlifts</h3>
            <p className="text-gray-600 text-sm">4 sets of 6 reps. Maintain a neutral spine and engage your core to safely lift heavier weights while strengthening your posterior chain.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Seated Rows</h3>
            <p className="text-gray-600 text-sm">3 sets of 12 reps. Focus on squeezing your shoulder blades together with each repetition to enhance mid-back development.</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Post-Workout Stretch</h2>
        <p className="text-gray-700 leading-relaxed">Perform child’s pose and seated forward bends, holding each for 30 seconds to relieve tension in your back muscles and improve flexibility post-workout.</p>
      </section>

      <p className="text-sm text-gray-500 text-center">Tip: Incorporate both vertical (pull-ups) and horizontal (rows) pulling movements for complete back development while focusing on controlled form.</p>
    </div>
  );
}

export default BackPage;
