import { deleteRequest, getRequest, postRequest, putRequest } from '../../../shared/utils/apiHelpers';

// Base URL for API
const API_URL = 'http://localhost:3000/api/v1';
export const getProducts = async () => {
  try {
    const response = await getRequest(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching products');
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await postRequest(`${API_URL}/products`, productData, true);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating product');
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await putRequest(`${API_URL}/products/${id}`, productData);
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
