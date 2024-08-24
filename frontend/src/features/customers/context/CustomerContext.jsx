/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { fetchCustomers, fetchCustomerById, searchCustomers, fetchActivitiesByCustomerId } from '../services/customerService'; // Adjust path as necessary
import { toast } from 'react-hot-toast'

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [preview, setPreview] = useState(false);
    const [activites, setActivites] = useState(null)

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


    useEffect(() => {
        if (selectedCustomer) {
            getAllActivitiesByCid(selectedCustomer._id)
        }

    }, [selectedCustomer])



    const getAllActivitiesByCid = async (cid) => {
        try {
            const data = await fetchActivitiesByCustomerId(cid);
            setActivites(data);

        } catch (error) {
            toast.error(error);
        }
    }

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
        <CustomerContext.Provider value={{ customers, selectedCustomer, preview, handlePreview, setPreview, searchCustomers,activites }}>
            {children}
        </CustomerContext.Provider>
    );
};
