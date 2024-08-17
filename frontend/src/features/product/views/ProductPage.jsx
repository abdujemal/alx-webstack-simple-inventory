import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { TbInfoSquareRounded } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useProducts } from '../context/ProductContext';
import { filterProducts } from '../services/productService';

const Product = () => {
  const { products, setProducts, filteredProducts, setFilteredProducts } = useProducts();

  const [searchQuery, setSearchQuery] = useState("");
  const [preview, setPreview] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    sku: "",
    location: "",
    price: "",
    stock: "",
    image: "",
  });

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setFilteredProducts(filterProducts(products, query));
  };

  const togglePreview = (product) => setPreview(product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.id && newProduct.name) {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setFilteredProducts((prevProducts) => [...prevProducts, newProduct]);
      setNewProduct({
        id: "",
        name: "",
        sku: "",
        location: "",
        price: "",
        stock: "",
        image: "",
      });
      setShowAddForm(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden bg-white">
      <div className={`flex-auto transition-all duration-300 ${preview ? 'lg:w-3/4' : 'w-full'}`}>
        <div className="flex flex-col lg:flex-row lg:gap-5 p-6">
          <div className={`flex flex-col ${preview ? 'lg:w-3/4' : 'w-full'} transition-all duration-500`}>
            <div className="flex flex-col mt-7">
              <div className="flex flex-wrap gap-6 justify-between mb-4 text-lg">
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
                    {filteredProducts.map((product, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 text-center">
                          <span>{product.id}</span>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <div className="flex items-center">
                            <img
                              loading="lazy"
                              src={product.image}
                              className="object-contain w-20 h-20 rounded"
                              alt={product.name}
                            />
                            <span className="ml-2">{product.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-2 text-center">{product.sku}</td>
                        <td className="px-4 py-2 text-center">{product.location}</td>
                        <td className="px-4 py-2 text-center">{product.price}</td>
                        <td className="px-4 py-2 text-center">{product.stock}</td>
                        <td className="px-4 py-2 text-center flex items-center justify-center space-x-2">
                          <button onClick={() => togglePreview(product)}>
                            <TbInfoSquareRounded className="text-blue-400" />
                          </button>
                          <a href="/somepath">
                            <MdOutlineEdit className="text-yellow-400" />
                          </a>
                          <a href="/somepath">
                            <RiDeleteBin5Line className="text-red-400" />
                          </a>
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
              <div className="text-2xl font-bold mb-4">Preview Product</div>
              <img
                loading="lazy"
                src={preview.image}
                className="object-contain mb-4 rounded-xl w-full max-w-xs"
                alt={preview.name}
              />
              <div>Product ID: {preview.id}</div>
              <div className="mt-2">Product Name: {preview.name}</div>
              <div className="mt-2">Stock: {preview.stock}</div>
              <div className="mt-2">Location: {preview.location}</div>
              <div className="mt-2">Price: {preview.price}</div>
              <div className="mt-2">Status: Ready Stock</div>
              <button onClick={() => setPreview(null)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      {showAddForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleAddProduct}>
              <div className="mb-4">
                <label className="block text-gray-700">ID:</label>
                <input
                  type="text"
                  name="id"
                  value={newProduct.id}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">SKU:</label>
                <input
                  type="text"
                  name="sku"
                  value={newProduct.sku}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location:</label>
                <input
                  type="text"
                  name="location"
                  value={newProduct.location}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price:</label>
                <input
                  type="text"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Stock:</label>
                <input
                  type="text"
                  name="stock"
                  value={newProduct.stock}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image URL:</label>
                <input
                  type="text"
                  name="image"
                  value={newProduct.image}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;