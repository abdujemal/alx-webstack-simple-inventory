import express from 'express';
import productController from '../controllers/productController.js';
import upload from '../../shared/middleware/mutlerMiddleware.js';


const productRoutes = express.Router();

// // Public routes for logged out users
// productRoutes.post('/register', isUserLoggedOut, (req, res) => {
//     // Registration logic here
// });

// CRUD routes for products
productRoutes.post('/', upload.single('image'), productController.createProduct);
productRoutes.get('/', productController.getProducts);
productRoutes.get('/:id', productController.getProductById);
productRoutes.put('/:id', upload.single('image'), productController.updateProduct);
productRoutes.delete('/:id', productController.deleteProduct);

// Search route
productRoutes.get('/search', productController.searchProducts);


export default productRoutes;
