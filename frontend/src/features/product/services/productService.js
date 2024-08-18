import axios from 'axios';

// Base URL for API
const API_URL = 'http://localhost:3000/api/v1'; // Change to your back-end URL

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching products');
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/products`, productData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating product');
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`${API_URL}/products/${id}`, productData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error updating product');
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error deleting product');
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search`, { params: { query } });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error searching products');
  }
};
