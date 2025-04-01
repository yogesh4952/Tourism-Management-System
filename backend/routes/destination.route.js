import express from 'express';

import {
  deleteAll,
  deleteDestination,
  getAllDestinations,
  getDestinationByDistrict,
} from '../controllers/destination.controller.js';
import { createDestination } from '../controllers/destination.controller.js';
import { authMiddleware } from '../middlewares/auth.js';

const route = express.Router();

route.get('/getAllDestinations', authMiddleware, getAllDestinations);
route.post('/create-destination', authMiddleware, createDestination);
route.get('/getDestinationByDistrict', authMiddleware, getDestinationByDistrict);
route.delete('/:id', authMiddleware, deleteDestination);

route.delete('/delete-all', deleteAll);

export default route;
