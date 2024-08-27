import { getRequest, deleteRequest } from '../../../shared/utils/apiHelpers'; // Adjust path as necessary
import { ACTIVITY_URL, CUSTOMER_URL } from '../../../shared/utils/constants'; // Adjust path as necessary


const API_URL = 'https://alx-webstack-simple-inventory.onrender.com/api/v1';
export const fetchCustomers = async (page, limit) => {
    try {
        const response = await getRequest(CUSTOMER_URL, { page, limit });
        return response?.data;
    } catch (error) {
        console.error('Error fetching customer data:', error);
        throw error;
    }
};

export const fetchCustomerById = async (customerId) => {
    try {
        const response = await getRequest(`${CUSTOMER_URL}/${customerId}`);
        return response?.data;
    } catch (error) {
        console.error('Error fetching customer details:', error);
        throw error;
    }
};

export const fetchActivitiesByCustomerId = async (customerId) => {
    try {
        const response = await getRequest(`${ACTIVITY_URL}/cid/${customerId}`);
        return response?.data;
    } catch (error) {
        console.error('Error fetching activity by Cid:', error);
        throw error;
    }
};




export const searchCustomers = async (query) => {
    try {
        const response = await getRequest(`${API_URL}/search-customers`, { query });
        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error searching customers');
    }
};

export const deleteCustomer = async (id) => {
    try {
        const response = await deleteRequest(`${API_URL}/customers/${id}`);
        return response?.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error deleting customer');
    }
};