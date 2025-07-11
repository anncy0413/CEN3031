import React, { useState } from 'react';


function GlutesPage(){
    return(
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Glute Workouts</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Why Train Your Glutes?</h2>
                <p className="text-gray-700 leading-relaxed">Having strong glutes improves athletic performace, stabilizes your pelvis, and helps prevent injuries. Your glutes are your biggest muscle and you use them with almost every movement. It's important to maintain glute strength to live a healthy life.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Warm-Up Tips</h2>
                <p className="text-gray-700 leading-relaxed">10 minutes of light cardio before your workout, paired with body weight squats and glute bridges will prepare your glutes for an intense workout!</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Glute Exercises</h2>
                    <div className="grid md:grid-cols-3 gap-4">

                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Hip Thrust</h3>
                            <p className="text-gray-600 text-sm">3 sets of 10 reps. Sit on the floor with your back against a bench. Ensure the bench aligns with the bottom of your shoulder blades. From there, bring your feet closer to you to ensure you form a 90° angle with your knee. Use your glutes to push your pelvis up.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Bulgarian Split Squats</h3>
                        <p className="text-gray-600 text-sm">3 sets of 20 reps. Perform a lunge with one leg on a bench and your other leg in front of your. Use your leg on the ground to push yourself up from the bottom position.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Kickbacks</h3>
                        <p className="text-gray-600 text-sm">3 sets of 20 reps. Engage your core and lean slightly forward. Kick one leg back at a 45° angle while your other leg stabilizes you.</p>
                    </div>
                    </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Post-Workout Stretch</h2>
                <p className="text-gray-700 leading-relaxed">Perform pigeon stretch by sitting on the floor, then bringing one leg in front of you, placing your shin on the floor. Ensure your back leg is straight and gently lean forward.</p>
            </section>

            <p className="text-sm text-gray-500 text-center">Tip: When doing glute exercises, stabilize yourself on the heels of your feet to get proper muscle activation and prevent injury.</p>

        </div>
    );
}

export default GlutesPage;