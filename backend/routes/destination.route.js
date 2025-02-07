import express from 'express';

import { protectRoute } from '../middlewares/auth.middleware.js';
import {
  deleteAll,
  deleteDestination,
  getAllDestinations,
  getDestinationByDistrict,
} from '../controllers/destination.controller.js';
import { createDestination } from '../controllers/destination.controller.js';

const route = express.Router();

route.get('/getAllDestinations', protectRoute, getAllDestinations);
route.post('/create-destination', protectRoute, createDestination);
route.get('/getDestinationByDistrict', protectRoute, getDestinationByDistrict);
route.delete('/:id', protectRoute, deleteDestination);

route.delete('/delete-all', deleteAll);

export default route;
