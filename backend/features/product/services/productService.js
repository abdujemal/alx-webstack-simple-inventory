import NotificationService from '../../Notification/service/notificationService.js';
import Product from '../models/productModel.js';

const createProduct = async (productData, imageUrl, username) => {
    try {
        const product = new Product(productData);
        product.image = imageUrl;
        NotificationService.sendToAll("New Product has been added", `${product.productName} is added by ${username}`)
        return await product.save();
    } catch (error) {
        throw new Error('Error creating product: ' + error.message);
    }
};

const getProducts = async (page = 1, limit = 10) => {
    try {
        const skip = (page - 1) * limit;
        return await Product.find()
                            .skip(skip)
                            .limit(limit);
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

const searchProducts = async (query) => {
    try {
       
        const regex = new RegExp(query, 'i'); // Case-insensitive search
        return await Product.find({
            $or: [
                { productName: regex },
                { SKU: regex },
                { location: regex }
            ]
        });
    } catch (error) {
        throw new Error('Error searching products: ' + error.message);
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
