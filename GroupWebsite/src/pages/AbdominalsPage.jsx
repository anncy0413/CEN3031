// AbdominalsPage.jsx
import React from 'react';

function AbdominalsPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Abdominals Workouts</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1️⃣ Why Train Your Abdominals?</h2>
        <p className="text-gray-700 leading-relaxed">A strong core enhances stability, protects your spine, and supports better posture and athletic performance. It also assists with daily activities such as bending, lifting, and maintaining balance, while contributing to aesthetic goals like a toned midsection.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2️⃣ Warm-Up Tips</h2>
        <p className="text-gray-700 leading-relaxed">Begin with 5 minutes of light cardio followed by dynamic movements like standing torso twists, hip circles, and cat-camel stretches to activate your core muscles before engaging in abdominal exercises.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3️⃣ Core Exercises</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Planks</h3>
            <p className="text-gray-600 text-sm">3 sets of 60 seconds. Keep your back flat, tighten your core, and maintain steady breathing for stability and endurance.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Crunches</h3>
            <p className="text-gray-600 text-sm">4 sets of 20 reps. Perform with controlled movements, focusing on engaging your abdominals without pulling on your neck.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Leg Raises</h3>
            <p className="text-gray-600 text-sm">3 sets of 15 reps. Keep your legs straight, lift with your lower abs, and avoid using momentum to maximize tension.</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4️⃣ Post-Workout Stretch</h2>
        <p className="text-gray-700 leading-relaxed">Finish with cobra stretches or lying torso twists, holding each stretch for 30 seconds to relax the core muscles, improve flexibility, and reduce post-workout stiffness.</p>
      </section>

      <p className="text-sm text-gray-500 text-center">💡 Tip: Consistency in core workouts combined with a balanced diet is key for visible abdominal definition and functional strength.</p>
    </div>
  );
}

export default AbdominalsPage;
