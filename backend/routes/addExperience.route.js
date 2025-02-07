import express from 'express';
import {
  addExperience,
  getAllExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
} from '../controllers/addExperience.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/add', protectRoute, addExperience);
router.get('/', protectRoute, getAllExperiences);
router.get('/:id', protectRoute, getExperienceById);
router.put('/:id', protectRoute, updateExperience);
router.delete('/:id', protectRoute, deleteExperience);

export default router;
