const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../Models/Users');
const authenticate = require('../Middleware/AuthMiddleware');
const authenticateToken = require('../Middleware/AuthMiddleware');


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
// PATCH /users/reset/:id
router.patch('/reset/:id', authenticate, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Only admins can perform this action.' });
  }

  try {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(userId, { points: 0 }, { new: true });
    res.json({ message: 'Points reset successfully', user });
  } catch (err) {
    res.status(500).json({ error: 'Failed to reset points' });
  }
});

router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json({
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      currentWeight: user.currentWeight || '',
      goalWeight: user.goalWeight || '',
      trainingGoal: user.trainingGoal || '',
      calorieTarget: user.calorieTarget || ''
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


router.patch('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const updateFields = {};

  const allowedFields = ['currentWeight', 'goalWeight', 'trainingGoal', 'calorieTarget'];

  allowedFields.forEach(field => {
    if (req.body[field] !== undefined) {
      updateFields[field] = req.body[field];
    }
  });

  try {
    const updated = await User.findByIdAndUpdate(id, updateFields, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;
