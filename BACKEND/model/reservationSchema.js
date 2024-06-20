import validator from 'validator';
import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, 'First Name must contain at least 3 characters'],
    maxLength: [30, 'First Name cannot exceed 30 characters'],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, 'Last Name must contain at least 3 characters'],
    maxLength: [30, 'Last Name cannot exceed 30 characters'],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'Provide a valid email address'],
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return validator.isMobilePhone(v, 'any', { strictMode: false });
      },
      message: 'Provide a valid 10-digit phone number',
    },
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;
