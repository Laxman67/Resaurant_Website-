import ErrorHandler from '../error/error.js';
import Reservation from '../model/reservationSchema.js';

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  /*
  ************TO DEBUG*******
  let obj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    date: date,
    time: time,
  };
  console.log(`Details of Submitted form: ${Object.values(obj)}`);
  */

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler('Please fill full reservation form', 400));
  }

  //   Create Reservation
  try {
    await Reservation.create({ firstName, lastName, email, phone, date, time });
    res.status(200).json({
      success: true,
      message: 'Your reservation has been sent successfully',
    });
  } catch (error) {
    if (error.name == 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );

      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }
    return next(error);
  }
};
