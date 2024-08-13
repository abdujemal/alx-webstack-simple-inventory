import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    SKU: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
