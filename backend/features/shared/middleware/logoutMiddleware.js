// middlewares/authMiddleware.js
import  jwt from 'jsonwebtoken';

const isUserLoggedOut = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    next();
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    
    return res.status(403).json({ message: 'Already logged in.' });
  } catch (err) {
    next();
  }

};

export default isUserLoggedOut;