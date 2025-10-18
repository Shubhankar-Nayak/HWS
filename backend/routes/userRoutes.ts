import express from 'express';
import {
  registerUser,
  loginUser,
  getMe,
  setPassword,
  changePassword,
  googleLogin,
  sendOtpToEmail,
  verifyUser,
  logoutUser
} from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google', googleLogin);
router.post('/send-otp', sendOtpToEmail);
router.get('/verify', verifyUser);
router.post('/logout', logoutUser);

// Protected Routes
router.get('/me', protect, getMe);

router.post('/set-password', protect, setPassword);
router.post('/change-password', protect, changePassword);

export default router;