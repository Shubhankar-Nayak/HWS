import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/userRoutes';
import bookingRoutes from "./routes/bookingRoutes";

import path from 'path';

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: ['http://localhost:8080', 'https://hws-tau.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', userRoutes);
app.use("/api/booking", bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));