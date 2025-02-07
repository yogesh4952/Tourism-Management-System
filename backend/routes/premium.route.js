import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import { checkIsPremium } from '../controllers/premium.controller.js';
const route = express.Router();

route.post('/check-premium', protectRoute, checkIsPremium);

export default route;
