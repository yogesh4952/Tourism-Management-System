import express from 'express';
import {
  checkIsPremium,
  getPremiumHotelById,
  getPremiumHotels,
  upgradeToPremium,
} from '../controllers/premium.controller.js';
import checkPremiumStatus from '../middlewares/checkPremiumStatus.middleware.js';
import { authMiddleware } from '../middlewares/auth.js';

const route = express.Router();

route.post('/check-premium', authMiddleware, checkPremiumStatus, checkIsPremium);

route.post('/upgrade-premium', authMiddleware, upgradeToPremium);

route.get(
  '/get-premium-hotels',
  authMiddleware,
  checkPremiumStatus,
  getPremiumHotels
);

route.get(
  '/get-premium-hotel/:id',
  authMiddleware,
  checkPremiumStatus,
  getPremiumHotelById
);
export default route;
