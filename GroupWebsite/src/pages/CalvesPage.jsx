
function CalvesPage(){
    return(
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Calf Workouts</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Why Train Your Calves?</h2>
                <p className="text-gray-700 leading-relaxed">Training your calves enhances your athletic performance, improves stability, and prevents injuries. Your calves are important for everday acitivies, such as walking, running, and jumping. By improving your calf strength, you reduce the risk of injury by improving stability and ankle strength. Training calves also enhances lower body aesthetics.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Warm-Up Tips</h2>
                <p className="text-gray-700 leading-relaxed">Before training calves, perform 5-10 minutes of light cardio followed by dynamic stretches. Dynamic stretches like eccentric calf raises, downward dog, and zombie walks will decrease your risk of injury by increasing blood flow to the muscle and activating your calves for exercise.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Calf Exercises</h2>
                    <div className="grid md:grid-cols-3 gap-4">

                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Straight-Leg Calf Raises</h3>
                            <p className="text-gray-600 text-sm">4 sets of 10 reps. Stand on the edge platform to ensure your calves have enough range of motion. Your toes should be on the platform with your heels hanging off. Gently lower your heels until you feel the a sufficent stretch, then use your calves to slowly rise your heels so you are even with your toes. You can use your bodyweight or add weight to increase difficulty.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Seated Calf Raises</h3>
                        <p className="text-gray-600 text-sm">3 sets of 20 reps. Engage your core, keep elbows at a 45° angle, and lower until your chest is just above the floor.</p>
                    </div>
                    </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Post-Workout Stretch</h2>
                <p className="text-gray-700 leading-relaxed">Stretch your calves by putting the ball of your foot on a wall and keeping your heel on the ground. Remember to alternative legs.</p>
            </section>

            <p className="text-sm text-gray-500 text-center">Tip: The key to developing your calves is to maintain good form and to perform every repition slowly. Not only will this work your calves more effectively, but it will reduce your risk of injury.</p>

        </div>
    );
}

export default CalvesPage;