const express = require('express');
const router = express.Router();
const WeightLog = require('../Models/WeightLog');
const User = require('../Models/Users');
const authenticate = require('../Middleware/AuthMiddleware');

// POST: Add a new weight log and update user points
router.post('/logWeight', authenticate, async (req, res) => {
  try {
    const { exercise, sets, reps, weight } = req.body;

    const log = new WeightLog({ exercise, sets, reps, weight, user: req.user.userId });
    await log.save();

    const user = await User.findById(req.user.userId);
    if (user) {
      const pointsEarned = sets * reps * weight * 0.1;
      user.points += pointsEarned;
      user.workoutHistory.push({ type: 'weightlifting', exercise, sets, reps, weight, date: new Date() });
      await user.save();
    }

    res.json({ message: 'Weight lifting log saved and points updated!', log, newPoints: user.points });
  } catch (err) {
    console.error(err);
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

// PATCH /weights/:id - Update a specific weight log
router.patch('/:id', authenticate, async (req, res) => {
  try {
    const updatedLog = await WeightLog.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedLog) {
      return res.status(404).json({ error: 'Log not found or not yours' });
    }

    res.json(updatedLog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update log' });
  }
});

// DELETE /weights/:id - Delete a specific weight log
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const deleted = await WeightLog.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId
    });

    if (!deleted) {
      return res.status(404).json({ error: 'Log not found or not yours' });
    }

    res.json({ message: 'Log deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete log' });
  }
});

module.exports = router;
