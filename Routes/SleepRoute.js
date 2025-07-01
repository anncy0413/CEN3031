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

module.exports = router;


