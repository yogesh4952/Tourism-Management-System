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
import { protectRoute } from '../middlewares/auth.middleware.js';

const route = express.Router();

route.post('/registerUser', registerUser);

route.post('/login', loginUser);
route.post('/send-verify-otp', protectRoute, sendVerifyOtp);
route.post('/verify-otp', protectRoute, verifyOtp);
route.post('/send-reset-otp', protectRoute, sendResetOtp);
route.post('/reset-password', protectRoute, resetPassword);
route.post('/logout', protectRoute, logOut);

export default route;
