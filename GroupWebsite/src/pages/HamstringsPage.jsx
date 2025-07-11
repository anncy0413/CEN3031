import React, { useState } from 'react';


function HamstringsPage(){
    return(
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Hamstring Workouts</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Why Train Your Hamstrings?</h2>
                <p className="text-gray-700 leading-relaxed">Training your hamstrings is critical for maintaining knee stability, supporting your pelvis, and building lower body strength. Without hamstring strength, movements like leaning forward become significantly more difficult.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Warm-Up Tips</h2>
                <p className="text-gray-700 leading-relaxed">Walk for 5-10 minutes to get the blood flowing to your hamstrings, then perform hamstring scoops and toe touches to prepare you for movement.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Hamstring Exercises</h2>
                    <div className="grid md:grid-cols-3 gap-4">

                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Stiff-Legged Deadlifts</h3>
                            <p className="text-gray-600 text-sm">Stand shoulder width apart with a barbell in front of you. Hinge forward, keeping your knees as straight as possible and maintaining a neutral spine. Engage your core to remain stable.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Seated Leg Curl</h3>
                        <p className="text-gray-600 text-sm">Adjust the machine to your height, then sit and slightly lean forward. Push the padding down with your hamstrings to finish the movement at a 90° angle.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Lying Leg Curl</h3>
                        <p className="text-gray-600 text-sm">3 sets of 20 reps. Engage your core, keep elbows at a 45° angle, and lower until your chest is just above the floor.</p>
                    </div>
                    </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Post-Workout Stretch</h2>
                <p className="text-gray-700 leading-relaxed">Lay face down on the machine and ensure the padding is right above your feet. Bring the weight towards the back of your legs. </p>
            </section>

            <p className="text-sm text-gray-500 text-center">Tip: If you experience lower back pain during lying leg curl, push your glutes into the machine as you push the weight up. This ensures the load remains on your hamstrings and not your back.</p>

        </div>
    );
}

export default HamstringsPage;