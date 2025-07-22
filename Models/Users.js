// Models/Users.js (updated)

const mongoose = require('mongoose');

const workoutEntrySchema = new mongoose.Schema({
  type: { type: String, enum: ['cardio', 'weightlifting'], required: true },
  duration: Number,               // cardio: duration in minutes
  exercise: String,              // weightlifting: exercise name
  sets: Number,                  // weightlifting: sets
  reps: Number,                  // weightlifting: reps per set
  weight: Number,                // weightlifting: weight per rep
  date: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  points:   { type: Number, default: 0 }, // for gamification and leaderboard
  workoutHistory: [workoutEntrySchema],    // store all logged workouts for each user
    currentWeight: { type: Number, default: null },     // in kg
    goalWeight:  { type: Number, default: null },     // in kg
    trainingGoal:   { type: String, default: "" },       // "muscle gain", "fat loss", "maintenance"
    calorieTarget:   { type: Number, default: null }    // daily kcal
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
