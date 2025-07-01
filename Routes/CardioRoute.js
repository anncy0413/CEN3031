const express = require('express');
const router = express.Router();
const Cardio = require('../Models/Cardio');
const authenticate = require('../Middleware/AuthMiddleware');

// POST: Log a new cardio session
router.post('/logCardio', authenticate, async (req, res) => {
  try {
    const { distance, time, intensity } = req.body;

    const cardio = new Cardio({
      distance,
      time,
      intensity,
      user: req.user.userId
    });

    await cardio.save();
    res.status(201).json({ message: 'Cardio session logged!', cardio });
  } catch (err) {
    res.status(500).json({ error: 'Failed to log cardio session' });
  }
});

// GET: Get all cardio logs for the authenticated user
router.get('/cardioLogs', authenticate, async (req, res) => {
  try {
    const logs = await Cardio.find({ user: req.user.userId }).sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve cardio logs' });
  }
});

// PATCH: Update a specific cardio session
router.patch('/:id', authenticate, async (req, res) => {
  try {
    const updated = await Cardio.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Cardio log not found or not yours' });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update cardio session' });
  }
});

// DELETE: Remove a specific cardio session
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const deleted = await Cardio.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId
    });

    if (!deleted) {
      return res.status(404).json({ error: 'Cardio log not found or not yours' });
    }

    res.json({ message: 'Cardio log deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete cardio session' });
  }
});

module.exports = router;
