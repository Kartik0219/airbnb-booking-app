// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  listing_id: { type: String, required: true },
  client_name: { type: String, required: true },
  email: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
