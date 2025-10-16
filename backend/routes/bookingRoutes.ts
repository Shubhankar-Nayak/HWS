import express from 'express';
import {
  getBookings,
  addBooking,
  deleteBooking
} from '../controllers/bookingController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/')
  .get(protect, getBookings)
  .post(addBooking);

router
  .route('/:id')
  .delete(protect, deleteBooking);    

export default router;