import validator from 'validator';
import { Schema, model } from 'mongoose';

const reservationSchema = Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, 'First Name must contain atleast 3 characters'],
    mnaxLength: [30, 'First Name conncot exceed 30 characters'],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, 'Last Name must contain atleast 3 characters'],
    maxLength: [30, 'Last irst Name conncot exceed 30 characters'],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'Provide a valid email address'],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, 'Phone Number must contain only 10  digits'],
    maxLength: [10, 'Phone Number  cannot exceed  10  digits'],
  },
  time: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Reservation = model('Reservations', reservationSchema);
export default Reservation;
