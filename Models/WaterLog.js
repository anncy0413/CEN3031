const mongoose = require('mongoose');

const WaterLogSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

module.exports = mongoose.model('WaterLog', WaterLogSchema);
