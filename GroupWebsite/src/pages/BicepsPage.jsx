// BicepsPage.jsx
import React from 'react';

function BicepsPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Biceps Workouts</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1️⃣ Why Train Your Biceps?</h2>
        <p className="text-gray-700 leading-relaxed">Strong biceps enhance your pulling strength and arm aesthetics. They support daily activities like lifting objects, carrying bags, and assist in compound lifts such as rows and pull-ups, making your upper body balanced and functional.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2️⃣ Warm-Up Tips</h2>
        <p className="text-gray-700 leading-relaxed">Warm up with 5 minutes of arm circles, light band curls, and gentle dynamic stretching to prepare your elbows and forearms, ensuring blood flow and reducing injury risk during bicep exercises.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3️⃣ Core Exercises</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Dumbbell Curls</h3>
            <p className="text-gray-600 text-sm">4 sets of 12 reps. Keep your elbows still, curl with control, and squeeze your biceps at the top for a peak contraction.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Hammer Curls</h3>
            <p className="text-gray-600 text-sm">3 sets of 10 reps. Helps develop forearms and the brachialis, aiding in fuller arm appearance and strength.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Chin-Ups</h3>
            <p className="text-gray-600 text-sm">3 sets of 8 reps. A compound movement that builds biceps and back together with natural bodyweight tension.</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4️⃣ Post-Workout Stretch</h2>
        <p className="text-gray-700 leading-relaxed">Stretch your biceps using a wall stretch or arm extension hold for 30 seconds on each side to reduce muscle tightness, improve flexibility, and aid recovery after your workout.</p>
      </section>

      <p className="text-sm text-gray-500 text-center">💡 Tip: Focus on slow eccentric lowering during curls to maximize muscle engagement and growth.</p>
    </div>
  );
}

export default BicepsPage;
