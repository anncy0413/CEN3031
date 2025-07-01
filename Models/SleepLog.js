const mongoose = require('mongoose');

const SleepLogSchema = new mongoose.Schema({
  sleepTime: {
    type: Date,
    required: true,
  },
  wakeTime: {
    type: Date,
    required: true,
  },
  durationHours: {
    type: Number,
  },
  quality: {
    type: String,
    enum: ['poor', 'okay', 'great'],
    default: 'okay'
  },
  dateLogged: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

module.exports = mongoose.model('SleepLog', SleepLogSchema);


