const express = require('express');
const router = express.Router();
const WaterLog = require('../Models/WaterLog');
const authenticate = require('../Middleware/AuthMiddleware');

router.post('/logWater', authenticate, async (req, res) => {
  try {
    const { amount } = req.body;

    const log = new WaterLog({
      amount,
      user: req.user // user ID from JWT
    });

    await log.save();
    res.json({ message: 'Water log saved!', log });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to log water' });
  }
});
router.get('/waterLogs', authenticate, async (req, res) => {
  try {
    const logs = await WaterLog.find({ user: req.user }).sort({ timestamp: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve water logs' });
  }
});

module.exports = router;

