
function QuadsPage(){
    return(
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Quad Workouts</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Why Train Your Quads?</h2>
                <p className="text-gray-700 leading-relaxed">Training your calves enhances your athletic performance, improves stability, and prevents injuries. Your calves are important for everday acitivies, such as walking, running, and jumping. By improving your calf strength, you reduce the risk of injury by improving stability and ankle strength. Training calves also enhances lower body aesthetics.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Warm-Up Tips</h2>
                <p className="text-gray-700 leading-relaxed">Before training quads, perform 5-10 minutes of light cardio followed by standing knee hug to quad stretch and a dynamic side lunge.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Quad Exercises</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Squat</h3>
                            <p className="text-gray-600 text-sm">3 sets of 15 reps. Stand with your feet shoulder width apart. Drop you hips, while keeping your torse upright, until you achieve a 90° with your legs.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Leg Extension</h3>
                        <p className="text-gray-600 text-sm">3 sets of 10 reps. Sit back on the machine and use the handles to stabilize yourself. Push the weight as high as you can go.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-bold mb-1">Adductor machine</h3>
                        <p className="text-gray-600 text-sm">3 sets of 12 reps. Set the machine to the furthest range of motion you can go. Sit on the machine and use your adductors to bring the weight inward.</p>
                    </div>
                    </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Post-Workout Stretch</h2>
                <p className="text-gray-700 leading-relaxed">To stretch your quads, sit on the floor with your shins and feet on the ground. Use your body weight to sit on your shins. The further back you go, the more you'll stretch your quads.</p>
            </section>

            <p className="text-sm text-gray-500 text-center">Tip: Training your adductors is essential for builiding a balanced physique with strong legs.</p>

        </div>
    );
}

export default QuadsPage;