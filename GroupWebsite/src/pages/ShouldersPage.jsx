
function ShoulderPage(){
    return(
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Deltoid Workouts</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Why Train Your Deltoids?</h2>
                <p className="text-gray-700 leading-relaxed">Training your deltoids improves your posture, enhancing pushing strength, and prevents shoulder injuries. Your delts are also essential in obtaining an athletic physique.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Warm-Up Tips</h2>
                <p className="text-gray-700 leading-relaxed">Before training your shoulders, perform 20 arm circles (clockwise and counterclockwise) to improve mobility and increase blood flow to your joints.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Deltoid Exercises</h2>
                    <div className="grid md:grid-cols-3 gap-4">

                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Military Press</h3>
                            <p className="text-gray-600 text-sm">4 sets of 10 reps. Grab two dumbbells and sit on a bench. Bring the weights to the top of your shoulder and press up with your elbows flared at a 45° angle in front of your body.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Lateral Raises</h3>
                        <p className="text-gray-600 text-sm">3 sets of 15 reps. With one weight per side, hold the dumbbells at hip height. Use your shoulders to bring the weight to shoulder level, while keeping your arms 45° in front of your body.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Rear Delt Flies</h3>
                        <p className="text-gray-600 text-sm">3 sets of 10 reps. Lay on an inclined bench face down and grab two dumbbells. Pull the dumbbells towards your back at a 45°.</p>
                    </div>
                    </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Post-Workout Stretch</h2>
                <p className="text-gray-700 leading-relaxed">Stretch your deltoids by crossing your arm in front of your body and holding yourself in place with your other arm.</p>
            </section>

            <p className="text-sm text-gray-500 text-center">Tip: Training every section of your deltoids is key to developing your muscles and maintaining good shoulder health.</p>

        </div>
    );
}

export default ShoulderPage;