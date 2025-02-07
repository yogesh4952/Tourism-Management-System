import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';

const route = express.Router();

export default route;
