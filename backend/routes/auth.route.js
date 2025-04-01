import express from 'express';
import {
  registerUser,
  logOut,
  loginUser,
  resetPassword,
  sendResetOtp,
  sendVerifyOtp,
  verifyOtp,
} from '../controllers/auth.controller.js';
import { authMiddleware } from '../middlewares/auth.js';

const route = express.Router();

route.post('/registerUser', registerUser);

route.post('/login', loginUser);
route.post('/send-verify-otp', authMiddleware, sendVerifyOtp);
route.post('/verify-otp', authMiddleware, verifyOtp);
route.post('/send-reset-otp', authMiddleware, sendResetOtp);
route.post('/reset-password', authMiddleware, resetPassword);
route.post('/logout', authMiddleware, logOut);

export default route;
