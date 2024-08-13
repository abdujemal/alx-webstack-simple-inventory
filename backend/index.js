import express from 'express';
import connectToMongo from './features/shared/utils/db.js';
import authRoute from './features/auth/routes/authRoutes.js';
import isUserLoggedOut from './features/shared/middleware/logoutMiddleware.js';
import authorizeUser from './features/shared/middleware/authMiddleware.js';
import { googleCallback } from './features/auth/controllers/authController.js';
import env from 'dotenv'
import activityRoutes from './features/activity/routes/activityRoute.js';
import customerRoutes from './features/customers/routes/customerRoutes.js';
import productRoutes from './features/product/routes/productRoutes.js';

env.config();


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

//Routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/activity', authorizeUser, activityRoutes)
app.use('/api/v1/customers', authorizeUser, customerRoutes);
app.use('/api/v1/products', authorizeUser, productRoutes);

// app.post('/google/callback', googleCallback)


app.listen(port, () => {

  connectToMongo().then((v) => {
    console.log(`Server is running on port ${port}`);
  }).catch((e) => {
    console.log(`Error: ${e}`);
  })
});