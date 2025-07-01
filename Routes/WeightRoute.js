const express = require('express');
const router = express.Router();
const WeightLog = require('../Models/WeightLog');
const authenticate = require('../Middleware/AuthMiddleware');

router.post('/logWeight', authenticate, async (req, res) => {
  try {
    const { exercise, sets, reps, weight } = req.body;

    const log = new WeightLog({
      exercise,
      sets,
      reps,
      weight,
      user: req.user
    });

    await log.save();
    res.json({ message: 'Weight lifting log saved!', log });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to log workout' });
  }
});
router.get('/weightLogs', authenticate, async (req, res) => {
  try {
    const logs = await WeightLog.find({ user: req.user }).sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve weight logs' });
  }
})

module.exports = router;


