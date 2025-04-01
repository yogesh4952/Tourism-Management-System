// middleware/auth.js
import { Clerk } from '@clerk/clerk-sdk-node';
import User from '../models/user.model.js';

const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY });

export const authMiddleware = async (req, res, next) => {
  try {
    // Clerk expects the token in the Authorization header (Bearer <token>)
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized - no token provided' });
    }

    const token = authHeader.split(' ')[1];
    const session = await clerk.verifyToken(token);

    // Get user ID from Clerk's session
    const clerkUserId = session.sub;

    // Find or create user in your database
    let user = await User.findOne({ clerkId: clerkUserId });
    if (!user) {
      // If user doesn't exist, you might want to create one (optional)
      user = new User({
        clerkId: clerkUserId,
        email: session.email || 'unknown', // Clerk might provide this
        username: session.username || `user_${clerkUserId}`,
        // Add other fields as needed
      });
      await user.save();
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('Auth error:', err);
    return res.status(401).json({ message: 'Unauthorized - invalid token' });
  }
};