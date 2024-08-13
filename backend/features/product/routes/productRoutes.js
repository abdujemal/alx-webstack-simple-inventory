import express from 'express';
import productController from '../controllers/productController.js';
import authorizeUser from '../../shared/middleware/authMiddleware.js';
import isUserLoggedOut from '../../shared/middleware/logoutMiddleware.js';


const productRoutes = express.Router();

// Apply middlewares
productRoutes.use(authorizeUser);

// // Public routes for logged out users
// productRoutes.post('/register', isUserLoggedOut, (req, res) => {
//     // Registration logic here
// });

// CRUD routes for products
productRoutes.post('/', productController.createProduct);
productRoutes.get('/', productController.getProducts);
productRoutes.get('/:id', productController.getProductById);
productRoutes.put('/:id', productController.updateProduct);
productRoutes.delete('/:id', productController.deleteProduct);

export default productRoutes;
