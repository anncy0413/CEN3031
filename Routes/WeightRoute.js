const express = require('express');
const router = express.Router();
const WeightLog = require('../Models/WeightLog');
const authenticate = require('../Middleware/AuthMiddleware');

// POST: Add a new weight log
router.post('/logWeight', authenticate, async (req, res) => {
  try {
    const { exercise, sets, reps, weight } = req.body;

    const log = new WeightLog({
      exercise,
      sets,
      reps,
      weight,
      user: req.user.userId  // ✅ correct usage
    });

    await log.save();
    res.json({ message: 'Weight lifting log saved!', log });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to log workout' });
  }
});

// GET: Fetch all logs for this user
router.get('/weightLogs', authenticate, async (req, res) => {
  try {
    const logs = await WeightLog.find({ user: req.user.userId }).sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve weight logs' });
  }
});

module.exports = router;



