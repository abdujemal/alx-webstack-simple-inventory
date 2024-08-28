import { deleteRequest, getRequest, postRequest, putRequest } from '../../../shared/utils/apiHelpers';
import axios from 'axios';
import { getToken } from '../../auth/services/localStorageService';

// Base URL for API
const API_URL = 'https://alx-webstack-simple-inventory.onrender.com/api/v1';
export const getProducts = async (page, limit) => {
  try {
    const response = await getRequest(`${API_URL}/products`, { page, limit });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching products');
  }
};

export const createProduct = async (productData) => {
  try {
    const token = getToken();
    if (!token) {
      throw new Error("Token is not provided")
    }

    const response = await axios.post(`${API_URL}/products`, productData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating product');
  }
};

export const updateProduct = async (id, productData, image) => {
  try {
    const response = await putRequest(`${API_URL}/products/${id}`, productData, true, image);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error updating product');
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await deleteRequest(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error deleting product');
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await getRequest(`${API_URL}/search`, { query });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error searching products');
  }
};

export const getProductById = async (id) => {
  try {
    const response = await getRequest(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error getting product');
  }
};
