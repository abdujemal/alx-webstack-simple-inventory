import { uploadImageToFirebase } from '../../../firebaseStorage.js';
import productService from '../services/productService.js';

const createProduct = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(404).json({ message: 'Image is required' });
        }
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`//await uploadImageToFirebase(req.file);

        const product = await productService.createProduct(req.body, imageUrl, req.user.username);

        res.status(201).json(product);
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: error.message });
    }
};

const getProducts = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const products = await productService.getProducts(parseInt(page), parseInt(limit));
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const result = await productService.deleteProduct(req.params.id);
        if (result) {
            res.status(200).json({ message: 'Product deleted' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const searchProducts = async (req, res) => {
    const { query } = req.query; // Query to search for
    if (!query) {
        return res.status(400).json({ message: 'Search query is required' });
    }
    try {
        const products = await productService.searchProducts(query);
        res.status(200).json(products);
    } catch (error) {

        res.status(500).json({ message: error.message });
    }
};

export default {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProducts
};
