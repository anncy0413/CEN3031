import React from 'react';


function TricepsPage(){
    return(
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Tricep Workouts</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Why Train Your Triceps?</h2>
                <p className="text-gray-700 leading-relaxed">Training your triceps is crucial to building strength, given they make up 60% of your upper arm. Your triceps also provide support when it comes to pushing movements. If you want to gain strength, triceps are essential. </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Warm-Up Tips</h2>
                <p className="text-gray-700 leading-relaxed">To warm up your triceps, complete a series of arm circles, dip stretch, and tricep extensions with a resistance band. Warming up properly will prepare you to use your triceps and prevent injury.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Core Exercises</h2>
                    <div className="grid md:grid-cols-3 gap-4">

                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Skull Crushers</h3>
                            <p className="text-gray-600 text-sm">3 sets of 10 reps. Lay on a bench and press the weight right above your chest. Your arms should be slightly past a 90° angle. Gently lower the weight down to just above your forehead, then press back up to the starting position.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Overhead extension</h3>
                        <p className="text-gray-600 text-sm">4 sets of 8 reps. To perform overhead extension, grab a weight and use one or both hands to push the weight up.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Tricep pushdown</h3>
                        <p className="text-gray-600 text-sm">3 sets of 20 reps. This exercise is best performed with a cable or resistance band. Make sure your cable is at torso height, then grab the end and push down. Make sure your torso is slightly angled towards the cable to fully engage your triceps.</p>
                    </div>
                    </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Post-Workout Stretch</h2>
                <p className="text-gray-700 leading-relaxed">Bend your arm behind your head, then gently push your elbow down.</p>
            </section>

            <p className="text-sm text-gray-500 text-center">Tip: Make sure to increase weight whenever you feel the exercises are too easy. This will ensure you're progressing.</p>

        </div>
    );
}

export default TricepsPage;