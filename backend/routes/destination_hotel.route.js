import express from 'express';

import { protectRoute } from '../middlewares/auth.middleware.js';
import { getAllDestinations } from '../controllers/destination_hotel.controller.js';

const route = express.Router();

route.get('/getAllDestinations', protectRoute, getAllDestinations);


export default route;
