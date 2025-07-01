const express = require('express');
const connectDB = require('./db');

// Import routes
const waterRoutes = require('./Routes/WaterRoute');
const weightRoutes = require('./Routes/WeightRoute');
const sleepRoutes = require('./Routes/SleepRoute');
const authRoutes = require('./Routes/AuthRoute');
const userRoutes = require('./Routes/UserRoute');


const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use('/water', waterRoutes);
app.use('/weights', weightRoutes);
app.use('/sleep', sleepRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
// Connect to MongoDB
connectDB();




// Root route
app.get('/', (req, res) => {
  res.send('Xpump backend is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


