import Product from '../models/productModel.js';

const createProduct = async (productData, imageUrl) => {
    try {
        const product = new Product(productData);
        product.image = imageUrl;
        return await product.save();
    } catch (error) {
        throw new Error('Error creating product: ' + error.message);
    }
};

const getProducts = async () => {
    try {
        return await Product.find();
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
};

const getProductById = async (id) => {
    try {
        return await Product.findById(id);
    } catch (error) {
        throw new Error('Error fetching product: ' + error.message);
    }
};

const updateProduct = async (id, updateData) => {
    try {
        return await Product.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
        throw new Error('Error updating product: ' + error.message);
    }
};

const deleteProduct = async (id) => {
    try {
        return await Product.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error deleting product: ' + error.message);
    }
};

export default {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
