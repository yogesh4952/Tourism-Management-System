import express from 'express';
import {
  addGuide,
  getAllGuides,
  getGuideById,
  updateGuide,
  deleteGuide,
  searchGuides,
} from '../controllers/guide.controller.js';

const router = express.Router();

router.post('/register', addGuide);
router.get('/', getAllGuides);
router.get('/:id', getGuideById);
router.put('/:id', updateGuide);
router.delete('/:id', deleteGuide);
router.get('/search', searchGuides);

export default router;
