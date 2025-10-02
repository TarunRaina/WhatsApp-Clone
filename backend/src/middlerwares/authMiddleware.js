const jwt = require('jsonwebtoken');
const response = require('../../utils/responseHandler');

const authMiddleware = (req, res, next) => {
  // Try to get from Authorization header
  const authHeader = req.headers['authorization'];
  let token = null;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  } else if (req.cookies?.auth_token) {
    // Or fallback to cookie
    token = req.cookies.auth_token;
  }

  if (!token) {
    return response(res, 401, 'Authorization token missing or malformed');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach decoded payload to request
    next();
  } catch (error) {
    console.error('Auth error:', error.message);
    return response(res, 401, 'Invalid or expired token');
  }
};

module.exports = authMiddleware;
