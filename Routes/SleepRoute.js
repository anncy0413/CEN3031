const express = require('express');
const router = express.Router();
const SleepLog = require('../Models/SleepLog');
const authenticate = require('../Middleware/AuthMiddleware');

router.post('/logSleep', authenticate, async (req, res) => {
  try {
    const { sleepTime, wakeTime, quality } = req.body;

    const duration = (new Date(wakeTime) - new Date(sleepTime)) / (1000 * 60 * 60); // in hours

    const log = new SleepLog({
      sleepTime,
      wakeTime,
      durationHours: duration,
      quality, // optional
      user: req.user
    });

    await log.save();
    res.json({ message: 'Sleep log saved!', log });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to log sleep' });
  }
});
router.get('/sleepLogs', authenticate, async (req, res) => {
  try {
    const logs = await SleepLog.find({ user: req.user }).sort({ dateLogged: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve sleep logs' });
  }
});

router.patch('/:id', authenticate, async (req, res) => {
  try {
    const updatedLog = await SleepLog.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedLog) {
      return res.status(404).json({ error: 'Log not found or not yours' });
    }

    res.json(updatedLog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update sleep log' });
  }
});

// DELETE /sleep/:id - Delete a sleep log
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const deleted = await SleepLog.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId
    });

    if (!deleted) {
      return res.status(404).json({ error: 'Log not found or not yours' });
    }

    res.json({ message: 'Sleep log deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete sleep log' });
  }
});


module.exports = router;


