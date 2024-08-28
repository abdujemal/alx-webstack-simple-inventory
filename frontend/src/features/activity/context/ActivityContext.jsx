import { createContext, useState, useContext, useEffect } from 'react';
import { getActivities, getProducts, updateProduct } from '../services/ActivityService';
import { CustomerContext } from '../../customers/context/CustomerContext';
import { createCustomer } from '../services/ActivityService';
import toast from 'react-hot-toast';

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
  const [activites, setActivites] = useState([])
  const [activityChart, setActivityChart] = useState([])
  const [activityPage, setActivityPage] = useState(2)
  const [loading, setLoading] = useState(false)


  const { searchCustomers, getAllCustomers } = useContext(CustomerContext);

  useEffect(()=>{
    fetchActivities()
    fetchActivities(1)
  },[])

  const loadMoreActivities = ()=>{
    setActivityPage((e)=>e+1)
    fetchActivities(activityPage)
    console.log({activityPage})
    console.log({activites})
  }

  const fetchActivities = async (page, limit) => {
    setLoading(true)
    try {
      const data = await getActivities(page, limit);
      if(page && page == 1){
        setActivites(data);
        
      }else if(page > 1){
        setActivites(e=>[...e,...data]);
        
      }else{
        setActivityChart(data);
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error(error)
      console.error('Error fetching activity:', error);
    }
  };

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
      fetchActivities,
      isSelected,
      activites,
      activityChart,
      loading,
      loadMoreActivities,
      setIsSelected,
      setSelectedCustomer,
    }}>
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContext;

export const useActivity = () => useContext(ActivityContext);