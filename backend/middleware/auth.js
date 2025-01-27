import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Get token from the 'Authorization' header
  if (!token) return res.status(401).json({ message: 'Access Denied' });
  
  jwt.verify(token.replace(/['"]+/g, ''), process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid Token' });
    req.user = user; // Attach the user data to the request object
    next(); // Proceed to the next middleware or route handler
  });
};