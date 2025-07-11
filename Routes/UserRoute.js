const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../Models/Users');
const authenticate = require('../Middleware/AuthMiddleware');

const router = express.Router();

// GET /users/me - Get user profile
router.get('/me', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /users/me - Update username/email
router.put('/me', authenticate, async (req, res) => {
  const { username, email } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      { username, email },
      { new: true, runValidators: true }
    ).select('-password');
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /users/me - Delete user account
router.delete('/me', authenticate, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.userId);
    res.json({ message: 'Account deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PATCH /users/password - Change password
router.patch('/password', authenticate, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Incorrect current password' });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get leaderboard sorted by points
router.get('/leaderboard', async (req, res) => {
    try {
        const topUsers = await User.find()
            .sort({ points: -1 }) // sort descending
            .limit(10) // top 10
            .select('username points'); // return only username and points

        res.json(topUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }
});


module.exports = router;
