import express from 'express';
import cors from 'cors';
import dotenv, { configDotenv } from 'dotenv';

import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import ReservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: './config/config.env' });
app.use(
  cors({
    // origin:["https://studious-fiesta-xqvpgv56wp5frww-5173.app.github.dev/"],
    origin: [process.env.FRONTEND_URL], //what to connect with backend
    methods: ['POST'], // we want to post to frontend
    credentials: 'true',
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to get form data
app.use('/api/v1/reservation', ReservationRouter);

// Routes

dbConnection();
app.use(errorMiddleware);
export default app;
