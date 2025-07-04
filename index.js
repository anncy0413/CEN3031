const express = require('express');
const connectDB = require('./db');
const mongoose = require("mongoose");

const cors = require("cors");

// Import routes
const cardioRoutes = require('./Routes/CardioRoute');
const weightRoutes = require('./Routes/WeightRoute');
const sleepRoutes = require('./Routes/SleepRoute');
const authRoutes = require('./Routes/AuthRoute');
const userRoutes = require('./Routes/UserRoute');


const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());
app.use('/cardio', cardioRoutes);
app.use('/weights', weightRoutes);
app.use('/sleep', sleepRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
// Connect to MongoDB
connectDB();

app.use(cors({origin: 'http://localhost:3000'}))

// Root route
app.get('/', (req, res) => {
  res.send('Xpump backend is running!');
});

// API to register a user====================
app.post("/register", async (req, resp) => {
    try {
        const User = require('./Models/Users.js');
        const user = new User(req.body);
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
//my section end===============================

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

