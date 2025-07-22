const express = require('express');
const connectDB = require('./db');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const authenticate = require('./Middleware/AuthMiddleware');
const JWT_SECRET = 'yourSecretKey';
const jwt = require('jsonwebtoken');



const cors = require("cors");

// Import routes
const cardioRoutes = require('./Routes/CardioRoute');
const weightRoutes = require('./Routes/WeightRoute');
const sleepRoutes = require('./Routes/SleepRoute');
const authRoutes = require('./Routes/AuthRoute');
const userRoutes = require('./Routes/UserRoute');
const Cardio = require('./Models/Cardio');
const WeightLog = require('./Models/WeightLog');
const User = require('./Models/Users');

const app = express();
const PORT = 5050;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

app.use('/cardio', cardioRoutes);
app.use('/weights', weightRoutes);
app.use('/sleep', sleepRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
// Connect to MongoDB
connectDB();

//app.use(cors({origin: 'http://localhost:3000'}))

// Root route
app.get('/', (req, res) => {
  res.send('Xpump backend is running!');
});

//register ====================
app.post("/register", async (req, resp) => {
    try {
        const {username, email, password} = req.body;
        const User = require('./Models/Users.js');
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({username, email, password: hashedPassword});
        console.log(hashedPassword);
        let result = await user.save();
        if (result) {
            delete result.password; // Ensure you're not sending sensitive info
            resp.status(201).send(result); // Send successful response
            console.log("User registered");
        } else {
            console.log("User already registered");
            resp.status(400).send("User already registered");
        }
    } catch (e) {
        resp.status(500).send({ message: "Something went wrong?", error: e.message });
    }
});

//login ===========================

app.post("/login", async (req, resp) => {
    try {
        const User = require('./Models/Users.js');
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            const result = await bcrypt.compare(password, user.password);
            if (result) {
                console.log("Account exists:", user.username);

                const payload = { userId: user._id };
                const JWT_SECRET = 'yourSecretKey'; // ✅ Ensure this matches in AuthMiddleware.js

                const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' }); // ✅ Generate token with secret

                resp.status(200).json({
                    message: "Login successful",
                    username: user.username,
                    email: user.email, // ✅ Added missing comma
                    userId: user._id,
                    token: token // ✅ Now correctly defined
                });
            } else {
                resp.status(400).json({ error: "Password doesn't match" });
            }
        } else {
            resp.status(400).json({ error: "User doesn't exist" });
        }
    } catch (e) {
        resp.status(500).json({ message: "Something went wrong", error: e.message });
    }
});

//deleting account
app.delete('/profile', authenticate, async (req, res) => {
    try{
        //const User = require('./Models/Users.js');
        //const { username } = req.body;
        User.findByIdAndDelete('687edd453a9305218d638e9b'); //WHY DOESNT THIS WORK
        console.log("id to delete:");
        console.log(req.user.userId);
        res.json({message: "deletion worked"})
    }
    catch (error){
        console.log("username failed to delete:")
        console.log(req.user.userId);
        res.status(500).json({ error: error.message });
    }
    
    //deleteall for that user's workout logs? add later
});

//my section end===================
// POST /cardio
app.post('/cardio', authenticate, async (req, res) => {
    try {
        const { distance, time, intensity } = req.body;

        const cardioEntry = new Cardio({ user: req.user.userId, distance, time, intensity });
        await cardioEntry.save();

        const user = await User.findById(req.user.userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const pointsEarned = time; // 1 point per minute cardio
        user.points += pointsEarned;
        user.workoutHistory.push({ type: 'cardio', duration: time, distance, intensity, date: new Date() });
        await user.save();

        res.json({ message: 'Cardio logged and points updated', newPoints: user.points });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});


// POST /weightlifting
app.post('/weightlifting', authenticate, async (req, res) => {
    try {
        const { exercise, sets, reps, weight } = req.body;

        const weightEntry = new WeightLog({ user: req.user.userId, exercise, sets, reps, weight });
        await weightEntry.save();

        const user = await User.findById(req.user.userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const pointsEarned = sets * reps * weight * 0.1;
        user.points += pointsEarned;
        user.workoutHistory.push({ type: 'weightlifting', exercise, sets, reps, weight, date: new Date() });
        await user.save();

        res.json({ message: 'Weightlifting logged and points updated', newPoints: user.points });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

