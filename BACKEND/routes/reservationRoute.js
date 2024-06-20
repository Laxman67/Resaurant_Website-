import { Router } from 'express';
import { sendReservation } from '../controllers/reservation.js';

const router = Router();
router.get('/', (req, res) => {
  res.send('<h2> Welcome to the reservation service</h2>');
});
router.post('/send', sendReservation);

export default router;
