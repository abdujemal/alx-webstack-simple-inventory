import { getRequest } from '../../../shared/utils/apiHelpers'; // Adjust path as necessary
import { CUSTOMER_URL } from '../../../shared/utils/constants'; // Adjust path as necessary

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
