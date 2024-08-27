import axios from 'axios';
import { getRequest, deleteRequest, putRequest } from '../../../shared/utils/apiHelpers';
import { getToken } from '../../auth/services/localStorageService';
import { postRequest } from '../../../shared/utils/apiHelpers';
import { ACTIVITY_URL } from '../../../shared/utils/constants';


const API_URL = 'https://alx-webstack-simple-inventory.onrender.com/api/v1';

export const getProducts = async () => {
    try {
        const response = await getRequest(`${API_URL}/products`);
        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error fetching products');
    }
};

export const getActivities = async (page, limit) => {
    try {
        const response = await getRequest(`${ACTIVITY_URL}/`, {page,limit});
        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error fetching activity');
    }
};

export const createProduct = async (productData) => {
    try {
        const token = getToken();
        if (!token) throw new Error('Token is not provided');

        const response = await axios.post(`${API_URL}/products`, productData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error creating product');
    }
};

export const updateProduct = async (id, productData) => {
    try {
        const response = await putRequest(`${API_URL}/products/${id}`, productData);
        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error updating product');
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await deleteRequest(`${API_URL}/products/${id}`);
        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error deleting product');
    }
};

export const searchProducts = async (query) => {
    try {
        const response = await getRequest(`${API_URL}/search`, { query });
        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error searching products');
    }
};

export const createCustomer = async (customerData) => {
    try {
        const response = await postRequest(`${API_URL}/customers`, customerData);
        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error creating customer');
    }
};

export const createActivity = async (data) => {
    try {
        const response = await postRequest(`${API_URL}/activity`, data);
        return response?.data;
    } catch (error) {
        console.error('Error creating activity:', error);
        throw error;
    }
};
