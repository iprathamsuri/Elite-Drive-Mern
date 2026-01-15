import Booking from "../models/booking.js";

export const createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
};

export const getBookings = async (req, res) => {
  const bookings = await Booking.find({ userEmail: req.params.email });
  res.json(bookings);
};
