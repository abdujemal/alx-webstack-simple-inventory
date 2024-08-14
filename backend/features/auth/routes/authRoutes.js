// routes/authRoutes.js
import express from 'express';
import upload from '../../shared/middleware/mutlerMiddleware.js';

import {login, register, logout, resetPassword, googleAuth, googleCallback, update} from '../controllers/authController.js';
import authorizeUser from '../../shared/middleware/authMiddleware.js';

const authRoute = express.Router();

//https://localhost:3000/api/v1/auth/register


// Register route
authRoute.post('/register', upload.single('image'), register);
authRoute.post('/update', authorizeUser, upload.single('image'), update);

// Login route
authRoute.post('/login', login);

// Logout route
authRoute.post('/logout', logout);

// Password reset route
authRoute.post('/reset-password', resetPassword);

// Google OAuth route
authRoute.get('/google', googleAuth);
authRoute.get('/google/callback', googleCallback);

export default authRoute;