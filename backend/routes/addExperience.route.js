import express from 'express';
import {
  addExperience,
  getAllExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
  likeExperience,
} from '../controllers/addExperience.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';
import route from './auth.route.js';

const router = express.Router();

router.post('/add', protectRoute, addExperience);
router.get('/', getAllExperiences);
router.get('/:id', getExperienceById);
router.put('/:id', updateExperience);
router.delete('/:id', deleteExperience);
router.post('/like/:id', likeExperience);

export default router;
