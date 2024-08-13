import express from 'express';
import customerController from '../controllers/customerController.js';
import authorizeUser from '../../shared/middleware/authMiddleware.js';
import isUserLoggedOut from '../../shared/middleware/authMiddleware.js';




const customerRoutes = express.Router();

customerRoutes.post('/', authorizeUser, customerController.createCustomer);
customerRoutes.get('/:id', authorizeUser, customerController.getCustomerById);
customerRoutes.get('/', authorizeUser, customerController.getAllCustomers);
customerRoutes.put('/:id', authorizeUser, customerController.updateCustomer);
customerRoutes.delete('/:id', authorizeUser, customerController.deleteCustomer);

export default customerRoutes;
