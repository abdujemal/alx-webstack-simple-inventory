import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducts, updateProduct } from '../../product/services/productService';

const ActivityPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [updatedProduct, setUpdatedProduct] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const products = await getProducts();
                const productToEdit = products.find(p => p._id === id);
                setProduct(productToEdit);
                setUpdatedProduct(productToEdit);

            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(id, updatedProduct);
            navigate('/products');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    if (!product) return <div className="p-6">Loading...</div>;

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md border border-primary">
            <h1 className="text-3xl font-bold mb-9 text-center">Buy Product</h1>
            <div className="flex justify-center md:justify-center mb-4">
                <input
                    
                    onChange={(e) => e.target.value}
                    className="w-full max-w-md px-4 py-2.5 bg-white rounded-lg shadow-md border border-gray-300 text-center"
                    type="search"
                    placeholder="Search Customer..."
                />
            </div>

        </div>
    );
};

export default ActivityPage;
