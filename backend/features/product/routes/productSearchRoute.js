import express from 'express';
import productController from '../controllers/productController.js';
import upload from '../../shared/middleware/mutlerMiddleware.js';


const productSearchRoute = express.Router();

productSearchRoute.get('/', productController.searchProducts);


export default productSearchRoute;
