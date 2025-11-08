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
  .get(getMyBookings); 

// Get bookings by specific email (admin feature - requires email parameter)
router.route('/email/:email')
  .get(getBookingsByEmail);

// Create new booking
router.route('/')  
  .post(addBooking);

// Delete booking by ID
router.route('/:id')
  .delete(deleteBooking);    

export default router;