const mongoose = require('mongoose');

const CardioSchema = new mongoose.Schema({
  distance: {
    type: Number,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  intensity: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Cardio', CardioSchema);
