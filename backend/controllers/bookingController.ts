import { Request, Response } from 'express';
import { Booking } from '../models/Booking';

// Add a new booking
export const addBooking = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, programme, date, time, message } = req.body;

    if (!firstName || !lastName || !email || !phone || !programme || !date || !time) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const booking = await Booking.create({
      firstName,
      lastName,
      email,
      phone,
      programme,
      date,
      time,
      message
    });

    res.status(201).json({
      message: 'Booking created successfully',
      booking: { ...booking.toObject(), id: booking._id }
    });
  } catch (err: any) {
    if (err.code === 11000 && err.keyPattern?.email) {
      return res.status(400).json({ message: 'A booking with this email already exists' });
    }
    res.status(500).json({ message: 'Failed to create booking', error: err.message });
  }
};

// Get all bookings
export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (err: any) {
    res.status(500).json({ message: 'Failed to fetch bookings', error: err.message });
  }
};

// Get a single booking by ID
export const getBookingById = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(booking);
  } catch (err: any) {
    res.status(500).json({ message: 'Error fetching booking', error: err.message });
  }
};

// Delete a booking
export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ message: 'Failed to delete booking', error: err.message });
  }
};