// BicepsPage.jsx
import React from 'react';

function BicepsPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Biceps and Forearms Workouts</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why Train Your Biceps?</h2>
        <p className="text-gray-700 leading-relaxed">Strong biceps enhance your pulling strength and arm aesthetics. They support daily activities like lifting objects, carrying bags, and assist in compound lifts such as rows and pull-ups, making your upper body balanced and functional.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Warm-Up Tips</h2>
        <p className="text-gray-700 leading-relaxed">Warm up with 5 minutes of arm circles, light band curls, and gentle dynamic stretching to prepare your elbows and forearms, ensuring blood flow and reducing injury risk during bicep exercises.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Core Exercises</h2>
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
        <h2 className="text-2xl font-semibold mb-2">Post-Workout Stretch</h2>
        <p className="text-gray-700 leading-relaxed">Stretch your biceps using a wall stretch or arm extension hold for 30 seconds on each side to reduce muscle tightness, improve flexibility, and aid recovery after your workout.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why Train Your Forearms?</h2>
        <p className="text-gray-700 leading-relaxed">Your forearms improves your grip strength, which is important for everyday life and benefits other compound lifts. It also contributes to a balanced athletic physique.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2"> Warm-Up Tips</h2>
        <p className="text-gray-700 leading-relaxed">Warm up your forearms by doing a series of wrist rotations, dynamic wrist flexor stretches, and fist clenches. This will increase mobility and blood flow.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Core Exercises</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Overhand Curls</h3>
            <p className="text-gray-600 text-sm">3 sets of 10 reps. Keep your elbows still, hold the bar with an overhand grip with your thumb on top of the bar, and curl upwards.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Underhand Wrist Curls</h3>
            <p className="text-gray-600 text-sm">3 sets of 8 reps. Use a bench or your legs to support your forearms. Hold a weight in your hands with an underhand grip and move the weight with just your wrist. Keep your forearms as secure as possible.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-bold mb-1">Overhand Wrist Curls</h3>
            <p className="text-gray-600 text-sm">3 sets of 8 reps. The same movement as an underhand wrist curl, except you are making your forearms face down and curling up.</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Post-Workout Stretch</h2>
        <p className="text-gray-700 leading-relaxed">To stretch your forearms, extend your arm with your palms facing down and gently pull your fingers back towards your body. Hold for each arm for 15-30 seconds.</p>
      </section>

      <p className="text-sm text-gray-500 text-center">Tip: Focus on slow eccentric lowering during curls to maximize muscle engagement and growth.</p>
    </div>
  );
}

export default BicepsPage;
