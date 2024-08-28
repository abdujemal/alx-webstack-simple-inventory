import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducts, updateProduct } from '../services/productService';
import { dataURLtoFile } from '../../auth/services/helpers';

const EditProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [image, setImage] = useState(null);
  const [urlImage, setUrlImage] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        const productToEdit = products.find(p => p._id === id);
        setProduct(productToEdit);
        setUrlImage(productToEdit.image)
        setUpdatedProduct(productToEdit);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
    const reader = new FileReader();
    reader.onload = () => {
        setImage(reader.result);
    };
    
    reader.readAsDataURL(file);
    }
};  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      let imageFile;
      if(image){
        imageFile = dataURLtoFile(image, 'image.jpg')
      }
      await updateProduct(id, updatedProduct, imageFile);
      setLoading(false)
      navigate('/products');
    } catch (error) {
      setLoading(false)
      console.error('Error updating product:', error);
    }
  };

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md border border-primary">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Product</h1>
      <form onSubmit={handleUpdate} className="space-y-6">
        {
          image ? 
          <img src={image} className=" h-32 w-32 m-auto mt-6 rounded-full"  alt="user_image"/>  :
          <img src={urlImage} className=" h-32 w-32 m-auto mt-6 rounded-full" />                      
        }  
        <input type="file" accept="image/*" name='image' onChange={handleFileChange} className=" shadow-sm w-fit px-2 py-1 mt-2 rounded self-center"/>
                    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Product Name</label>
            <input
              type="text"
              name="productName"
              value={updatedProduct.productName || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">SKU</label>
            <input
              type="text"
              name="SKU"
              value={updatedProduct.SKU || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={updatedProduct.location || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={updatedProduct.price || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Stock</label>
            <input
              type="number"
              name="stock"
              value={updatedProduct.stock || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
          {
            loading ?
            <p
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-400"         
            >
              Loading...</p>:
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Update Product
            </button>
          }
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;
