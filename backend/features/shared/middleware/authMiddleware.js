// middlewares/authMiddleware.js
import  jwt from 'jsonwebtoken';

const authorizeUser = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Failed to authenticate token' });
  }
};

export default authorizeUser;