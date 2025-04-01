import express from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import {
  addExperience,
  getAllExperiences,
  getExperienceById,
  updateExperience,
  deleteExperience,
  likeExperience,
  dislikeExperience,
} from '../controllers/experience.js';

const router = express.Router();

router.post('/', authMiddleware, addExperience);
router.get('/', getAllExperiences);
router.get('/:id', getExperienceById);
router.put('/:id', authMiddleware, updateExperience);
router.delete('/:id', authMiddleware, deleteExperience);
router.post('/like/:id', authMiddleware, likeExperience);
router.post('/unlike/:id', authMiddleware, dislikeExperience);

export default router;