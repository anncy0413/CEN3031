const jwt = require('jsonwebtoken');
const JWT_SECRET = 'yourSecretKey';

function authenticate(req, res, next) {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  // ✅ Allow admin-token shortcut
  if (token === 'admin-token') {
    req.user = { role: 'admin' };  // ✅ tag this as admin
    return next();
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = { userId: decoded.userId, role: 'user' };  // tag regular user
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = authenticate;


