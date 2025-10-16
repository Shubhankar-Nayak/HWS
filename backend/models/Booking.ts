const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    programme: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

export const Booking = mongoose.model('Booking', bookingSchema);