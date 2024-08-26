/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { fetchCustomers, fetchCustomerById, searchCustomers, fetchActivitiesByCustomerId } from '../services/customerService'; // Adjust path as necessary
import { toast } from 'react-hot-toast'

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [preview, setPreview] = useState(false);
    const [activites, setActivites] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(2);

    useEffect(() => {
        getCustomers();
    }, []);


    useEffect(() => {
        if (selectedCustomer) {
            getAllActivitiesByCid(selectedCustomer._id)
        }

    }, [selectedCustomer])

    const loadMoreCustomers = async () => {
        console.log({customers});
        setPage((e) => e + 1);
        await getCustomers(page);

    };

    const getCustomers = async (page, limit) => {
        setLoading(true);
        try {
            const data = await fetchCustomers(page, limit);

            if (page && page > 1) {
                setCustomers((e) => [...e, ...data]);

                setFilteredCustomers((e) => [...e, ...data])
            }
            else {
                setCustomers(data);
                setFilteredCustomers(data)
            }

            ;
            setLoading(false);

        } catch (error) {
            setLoading(false);
            console.error('Error fetching customer data:', error);
        }
    };



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
        <CustomerContext.Provider value={{ customers, setCustomers, selectedCustomer, preview, handlePreview, setPreview, searchCustomers, activites, filteredCustomers, setFilteredCustomers, loadMoreCustomers, loading }}>
            {children}
        </CustomerContext.Provider>
    );
};