import express from 'express';
import {
  getMyBookings,     
  getBookingsByEmail,
  addBooking,
  deleteBooking
} from '../controllers/bookingController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// Get bookings for the authenticated user (uses email from JWT token)
router.route('/my-bookings')
  .get(protect, getMyBookings); 

// Get bookings by specific email (admin feature - requires email parameter)
router.route('/email/:email')
  .get(protect, getBookingsByEmail);

// Create new booking
router.route('/')  
  .post(protect, addBooking);

// Delete booking by ID
router.route('/:id')
  .delete(protect, deleteBooking);    

export default router;