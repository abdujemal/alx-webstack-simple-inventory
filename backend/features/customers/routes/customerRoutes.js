import express from 'express';
import customerController from '../controllers/customerController.js';
import authorizeUser from '../../shared/middleware/authMiddleware.js';
import isUserLoggedOut from '../../shared/middleware/authMiddleware.js';




const customerRoutes = express.Router();

customerRoutes.post('/',  customerController.createCustomer);
customerRoutes.get('/:id',  customerController.getCustomerById);
customerRoutes.get('/',  customerController.getAllCustomers);
customerRoutes.put('/:id',  customerController.updateCustomer);
customerRoutes.delete('/:id', customerController.deleteCustomer);

export default customerRoutes;
