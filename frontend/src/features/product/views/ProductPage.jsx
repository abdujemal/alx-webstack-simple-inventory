import { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { TbInfoSquareRounded } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useProducts } from '../context/ProductContext';
import { getProducts, createProduct, searchProducts, deleteProduct } from '../services/productService';

const ProductPage = () => {
  const { products, setProducts, filteredProducts, setFilteredProducts } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [preview, setPreview] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    SKU: "",
    location: "",
    price: "",
    stock: "",
    image: null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [setProducts, setFilteredProducts]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Debounce the search request
    const delay = 500; // milliseconds
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(async () => {
      if (query) {
        try {
          const results = await searchProducts(query);
          setFilteredProducts(results);
        } catch (error) {
          console.error('Error searching products:', error);
        }
      } else {
        setFilteredProducts(products); // Reset to all products if query is empty
      }
    }, delay);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId); // Assuming this function deletes from the backend
      setProducts(products.filter(product => product._id !== productId));
      setFilteredProducts(filteredProducts.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle error, e.g., show an error message
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImageChange = (e) => {
    setNewProduct((prevProduct) => ({ ...prevProduct, image: e.target.files[0] }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in newProduct) {
      formData.append(key, newProduct[key]);
      console.log(`${key}:${newProduct[key]}`);
    }
    try {
      const addedProduct = await createProduct(formData);
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
      setFilteredProducts((prevProducts) => [...prevProducts, addedProduct]);
      resetForm();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const resetForm = () => {
    setNewProduct({
      productName: "",
      SKU: "",
      location: "",
      price: "",
      stock: "",
      image: null,
    });
    setShowAddForm(false);
  };

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden  bg-white">
      <div className={`flex-auto transition-all duration-300 ${preview ? 'lg:w-3/4' : 'w-full'}`}>
        <div className="flex flex-col lg:flex-row lg:gap-5 ">
          <div className={`flex flex-col ${preview ? 'lg:w-3/4 h-screen' : 'w-full'} transition-all duration-500`}>
            <div className="flex flex-col mt-7">
              <div className="flex flex-wrap gap-6 justify-between mb-4 text-lg px-40">
                <div className="flex items-center px-3 rounded-md border border-gray-200 text-black flex-grow max-w-full md:max-w-md lg:max-w-lg shadow-md">
                  <CiSearch className="text-black mr-2" />
                  <input
                    className="w-full px-2 rounded-md outline-none"
                    type="search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                  />
                </div>
                <div className="flex items-center gap-2.5">
                  <button onClick={() => setShowAddForm(true)} className="flex items-center gap-1 px-4 py-2 bg-primary text-white rounded-lg shadow-md">
                    <IoIosAdd className="w-5 h-5" />
                    <span>Add Item</span>
                  </button>
                </div>
              </div>

              <div className="shrink-0 mt-10 border-t border-gray-300" />

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-center">ID</th>
                      <th className="px-4 py-2 text-center">Product</th>
                      <th className="px-4 py-2 text-center">SKU</th>
                      <th className="px-4 py-2 text-center">Location</th>
                      <th className="px-4 py-2 text-center">Price</th>
                      <th className="px-4 py-2 text-center">Stock</th>
                      <th className="px-4 py-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    {filteredProducts.map((product) => (
                      <tr key={product._id}>
                        <td className="px-4 py-2 text-center">{product._id}</td>
                        <td className="px-4 py-2 text-center">
                          <div className="flex items-center">
                            <img loading="lazy" src={product.image} className="object-contain w-20 h-20 rounded border border-primary" />
                            <span className="ml-2">{product.productName}</span>
                          </div>
                        </td>
                        <td className="px-4 py-2 text-center">{product.SKU}</td>
                        <td className="px-4 py-2 text-center">{product.location}</td>
                        <td className="px-4 py-2 text-center">${product.price}</td>
                        <td className="px-4 py-2 text-center">{product.stock}</td>
                        <td className="px-4 py-2 text-center">
                          <div className='flex items-center justify-center space-x-2'>
                            <button onClick={() => setPreview(product)}>
                              <TbInfoSquareRounded className="text-blue-400 size-5" />
                            </button>
                            <a href="/edit-path" className="text-yellow-400 size-5">
                              <MdOutlineEdit />
                            </a>
                            <button onClick={() => handleDeleteProduct(product._id)} className="text-red-400 size-5">
                              <RiDeleteBin5Line />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {preview && (
            <div className="flex flex-col lg:w-1/4 bg-primary text-white p-6">
              <div className="text-2xl font-bold mb-4">Product Details</div>
              <div className="mb-4">
                <img src={preview.image} alt={preview.productName} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-xl font-semibold mb-2">{preview.productName}</h2>
                <p><strong>SKU:</strong> {preview.SKU}</p>
                <p><strong>Location:</strong> {preview.location}</p>
                <p><strong>Price:</strong> ${preview.price}</p>
                <p><strong>Stock:</strong> {preview.stock}</p>
              </div>
              <button onClick={() => setPreview(null)} className="mt-auto py-2 px-4 bg-secondary text-white rounded-lg">Close</button>
            </div>
          )}
        </div>
      </div>

      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form onSubmit={handleAddProduct} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Product Name</label>
              <input
                type="text"
                name="productName"
                value={newProduct.productName}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">SKU</label>
              <input
                type="text"
                name="SKU"
                value={newProduct.SKU}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={newProduct.location}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Stock</label>
              <input
                type="number"
                name="stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Image</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="mt-1 block w-full"
                accept="image/*"

              />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={() => setShowAddForm(false)} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">Add Product</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductPage;