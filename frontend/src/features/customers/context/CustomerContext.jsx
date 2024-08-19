/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { fetchCustomers, fetchCustomerById, searchCustomers } from '../services/customerService'; // Adjust path as necessary

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [preview, setPreview] = useState(false);

    useEffect(() => {
        const getCustomers = async () => {
            try {
                const data = await fetchCustomers();
                setCustomers(data);
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };

        getCustomers();
    }, []);

    const handlePreview = async (customerId) => {
        try {
            const data = await fetchCustomerById(customerId);
            setSelectedCustomer(data);
            setPreview(true);
        } catch (error) {
            console.error('Error fetching customer details:', error);
        }
    };

    return (
        <CustomerContext.Provider value={{ customers, selectedCustomer, preview, handlePreview, setPreview, searchCustomers }}>
            {children}
        </CustomerContext.Provider>
    );
};
