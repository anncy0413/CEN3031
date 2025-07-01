const jwt = require('jsonwebtoken');
const JWT_SECRET = 'yourSecretKey'; 

function authenticate(req, res, next) {
  const token = req.header('Authorization'); // Step 1: Get token from request header

  if (!token) {
    return res.status(401).json({ error: 'No token provided' }); // Step 2: Block if no token
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Step 3: Decode the token
    req.user = decoded.userId; // Step 4: Attach userId to the request object
    next(); // Step 5: Allow request to continue
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' }); // Step 6: Block if token is invalid
  }
}

module.exports = authenticate;
