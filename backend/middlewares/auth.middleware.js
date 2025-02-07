import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - login again' });
    }

    const decoded = jwt.verify(token, process.env.SECRET_STRING);
    const user = await User.findById(decoded.id).select('-password');

    if (user === null) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
