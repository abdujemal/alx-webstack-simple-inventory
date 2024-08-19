import express from 'express';
import customerController from '../controllers/customerController.js';
import upload from '../../shared/middleware/mutlerMiddleware.js';


const customerSearchRoute = express.Router();

customerSearchRoute.get('/', customerController.searchCustomers);


export default customerSearchRoute;
