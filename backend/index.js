import express from 'express';
import connectToMongo from './features/shared/utils/db.js';
import authRoute from './features/auth/routes/authRoutes.js';
import isUserLoggedOut from './features/shared/middleware/logoutMiddleware.js';
import authorizeUser from './features/shared/middleware/authMiddleware.js';
import { googleCallback } from './features/auth/controllers/authController.js';

import env from 'dotenv'

env.config();


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

//Routes
app.use('/api/v1/auth', authRoute)

// app.post('/google/callback', googleCallback)


app.listen(port, () => {
  
  connectToMongo().then((v)=>{
    console.log(`Server is running on port ${port}`);
  }).catch((e)=>{
    console.log(`Error: ${e}`);
  })
});