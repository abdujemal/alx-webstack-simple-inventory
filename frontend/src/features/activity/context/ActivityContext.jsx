import { createContext, useState, useContext } from 'react';
import { getProducts, updateProduct } from '../services/ActivityService';
import { CustomerContext } from '../../customers/context/CustomerContext';
import { createCustomer } from '../services/ActivityService';

const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    customerName: '',
    customerPhone: '',
    stock: ''
  });
  const [isSelected, setIsSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);


  const { searchCustomers, getAllCustomers } = useContext(CustomerContext);

  const fetchProduct = async (id) => {
    try {
      const products = await getProducts();
      const productToEdit = products.find(p => p._id === id);
      setProduct(productToEdit);
      setUpdatedProduct({ ...productToEdit, stock: '' });
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const fetchCustomers = async () => {
    try {
      const results = await getAllCustomers();
      setSearchResults(results);
      setNoResults(results.length === 0);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleSearch = async (query) => {
    if (query.trim()) {
      try {
        const results = await searchCustomers(query);
        setSearchResults(results);
        setNoResults(results.length === 0);
      } catch (error) {
        console.error('Error searching customers:', error);
      }
    } else {
      setSearchResults([]);
      setNoResults(false);
    }
  };

  const handleUpdate = async (id, updatedProduct) => {
    try {
      await updateProduct(id, updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };


  const handleSelectCustomer = (customer) => {
    setIsSelected(true)
    setSelectedCustomer(customer);
    setUpdatedProduct(prevProduct => ({
      ...prevProduct,
      customerName: customer.name,
      customerPhone: customer.phone
    }));
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleCreateCustomer = async (customerData) => {
    try {
      await createCustomer(customerData);
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };



  return (
    <ActivityContext.Provider value={{
      product,
      setProduct,
      updatedProduct,
      setUpdatedProduct,
      searchQuery,
      setSearchQuery,
      searchResults,
      noResults,
      selectedCustomer,
      fetchProduct,
      fetchCustomers,
      handleSearch,
      handleUpdate,
      handleSelectCustomer,
      handleCreateCustomer,
      isSelected,
    }}>
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContext;
