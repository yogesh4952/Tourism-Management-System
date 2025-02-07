import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import {
  checkIsPremium,
  getPremiumHotelById,
  getPremiumHotels,
  upgradeToPremium,
} from '../controllers/premium.controller.js';
import checkPremiumStatus from '../middlewares/checkPremiumStatus.middleware.js';

const route = express.Router();

route.post('/check-premium', protectRoute, checkPremiumStatus, checkIsPremium);

route.post('/upgrade-premium', protectRoute, upgradeToPremium);

route.get(
  '/get-premium-hotels',
  protectRoute,
  checkPremiumStatus,
  getPremiumHotels
);

route.get(
  '/get-premium-hotel/:id',
  protectRoute,
  checkPremiumStatus,
  getPremiumHotelById
);
export default route;
