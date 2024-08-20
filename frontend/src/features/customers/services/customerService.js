import { getRequest } from '../../../shared/utils/apiHelpers'; // Adjust path as necessary
import { CUSTOMER_URL } from '../../../shared/utils/constants'; // Adjust path as necessary

const API_URL = 'http://localhost:3000/api/v1';
export const fetchCustomers = async () => {
    try {
        const response = await getRequest(CUSTOMER_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching customer data:', error);
        throw error;
    }
};

export const fetchCustomerById = async (customerId) => {
    try {
        const response = await getRequest(`${CUSTOMER_URL}/${customerId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching customer details:', error);
        throw error;
    }
};

export const searchCustomers = async (query) => {
    try {
        const response = await getRequest(`${API_URL}/search-customers`, { query });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error searching customers');
    }
};
