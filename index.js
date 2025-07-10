const express = require('express');
const connectDB = require('./db');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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

app.post("/login", async (req, resp) =>{
    try{
        const User = require('./Models/Users.js');
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (user) {
            const result = await bcrypt.compare(password, user.password);
            if (result) {
                console.log("Account exists");
                console.log(user.username);
                console.log(req.body.email);
                console.log(req.body.password);
            }
            else {
                resp.status(400).json({error: "Password doesn't match"});
            }
        }
        else{
            resp.status(400).json({ error: "User doesn't exist" });
        }
    }
    catch(e){
        resp.status(400).json({ message: "Something went wrong", error: e.message });
    }
});

//my section end===================

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

