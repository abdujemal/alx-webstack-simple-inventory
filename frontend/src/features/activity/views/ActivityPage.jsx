import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ActivityContext from '../context/ActivityContext';
import { getProducts, updateProduct } from '../../product/services/productService';
import { createCustomer } from '../services/ActivityService';
import { createActivity } from '../services/ActivityService';

const ActivityPage = () => {
  const [product, setProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [initialStock, setInitialStock] = useState(0);
  const [stockMessage, setStockMessage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [isStockTouched, setIsStockTouched] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [gender, setGender] = useState('');
  const [stock, setStock] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [canSubmit, setCanSubmit] = useState(true);
  const [alert, setAlert] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    noResults,
    handleSearch,
    handleSelectCustomer,
    isSelected,
    selectedCustomer,
  } = useContext(ActivityContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        const productToEdit = products.find(p => p._id === id);
        setProduct(productToEdit);
        setUpdatedProduct(productToEdit);
        setInitialStock(productToEdit?.stock || 0);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchQuery, handleSearch]);

  useEffect(() => {
    if (initialStock <= 0) {
      setStockMessage('There is no available stock.');
      setTotalPrice(0);
      setCanSubmit(false);
    } else {
      setStockMessage('');
      setCanSubmit(true);
    }
  }, [initialStock]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('value: ', value);
    if (name === 'stock') {
      const inputValue = parseInt(value, 10) || 0;
      const newStock = initialStock - inputValue;

      if (newStock < 0) {
        setStockMessage('There is no available stock.');
        setUpdatedProduct(prevProduct => ({ ...prevProduct, [name]: 0 }));
        setTotalPrice(0);
        setCanSubmit(false);
      } else {
        setStockMessage('');
        setUpdatedProduct(prevProduct => ({ ...prevProduct, [name]: newStock }));
        setTotalPrice(inputValue * (product?.price || 0));
        setCanSubmit(true);
        setStock(inputValue);
      }

      setIsStockTouched(true);
    } else {
      setUpdatedProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) {
      return; // Prevent submission if the stock is not available
    }
    try {
      let result;

      if (!isSelected) {
        const customerData = { name: customerName, phone: customerPhone, gender };
        result = await createCustomer(customerData);
      }
      const activityData = {
        customerName: customerName,
        customerId: selectedCustomer ? selectedCustomer._id : result._id,
        status: 'Payed', // Adjust as needed
        pid: product?._id,
        pName: product?.productName,
        pSku: product?.SKU,
        pImage: product?.image,
        pLocation: product?.location,
        pPrice: product?.price,
        pStock: stock
      };
      console.log({updateProduct});
      
      await updateProduct(id, updatedProduct);

      console.log('Sending activity data:', activityData);
      await createActivity(activityData);

      navigate('/products');
    } catch (error) {
      console.error('Error reording  activity:', error);
      setAlert({ type: 'error', message: error.message });
    }
  };

  const handleCustomerSelection = (customer) => {
    setCustomerName(customer.name);
    setCustomerPhone(customer.phone);
    setGender(customer.gender);
    handleSelectCustomer(customer);
  };

  const handleCloseAlert = () => {
    setAlert(null); // Clear alert
  };

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md border border-gray-300">
      {alert && (
        <div
          className={`p-4 mb-4 border rounded-lg ${alert.type === 'error' ? 'bg-red-100 text-red-700 border-red-300' : 'bg-green-100 text-green-700 border-green-300'}`}
        >
          {alert.message}
          <button onClick={handleCloseAlert} className="ml-4 text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-9 text-center">Buy Product</h1>

      <div className="flex justify-center mb-4">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 bg-white rounded-lg shadow-md border border-gray-300 text-center"
          type="search"
          placeholder="Search Customer..."
        />
      </div>

      {noResults ? (
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold mb-4">No customers found</h2>
        </div>
      ) : (
        searchResults.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4">Search Results:</h2>
            <div className="space-y-4">
              {searchResults.map(customer => (
                <div
                  key={customer._id}
                  onClick={() => handleCustomerSelection(customer)}
                  className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="text-lg font-semibold">{customer.name}</div>
                      <div className="text-sm text-gray-600">{customer.phone}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}

      <form onSubmit={onSubmit} className="mt-6">
        <div className="mb-4">
          <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
            Customer Name
          </label>
          <input
            type="text"
            pattern="[A-Za-z\s]+"
            title="Customer name should only contain letters and spaces"
            id="customerName"
            name="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="mt-1 block w-full px-4 py-2.5 bg-white rounded-lg shadow-md border border-gray-300"
            placeholder="Customer Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select

            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 block w-full px-4 py-2.5 bg-white rounded-lg shadow-md focus:outline-none"
            required>

            <option value="" disabled>Select your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>


          </select>

        </div>
        <div className="mb-4">
          <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">
            Customer Phone
          </label>
          <input
            type="text"
            pattern="(\d{10})"
            title="Phone number should be in the format 0900000000 or 0700000000"
            id="customerPhone"
            name="customerPhone"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            className="mt-1 block w-full px-4 py-2.5 bg-white rounded-lg shadow-md border border-gray-300"
            placeholder="Customer Phone"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
            Product Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2.5 bg-white rounded-lg shadow-md border border-gray-300"
            placeholder="Product Stock"
            min="0"
            required
          />
          {stockMessage && <div className="mt-2 text-red-500">{stockMessage}</div>}
        </div>
        {isStockTouched && totalPrice > 0 && (
          <div className="mb-4">
            <label htmlFor="totalPrice" className="block text-sm font-medium text-gray-700">
              Total Price
            </label>
            <div className="mt-1 block w-full px-4 py-2.5 bg-gray-100 rounded-lg shadow-md border border-gray-300">
              ${totalPrice.toFixed(2)}
            </div>
          </div>
        )}
        <button
          type="submit"
          className={`w-full px-4 py-2 rounded-lg ${canSubmit ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
          disabled={!canSubmit}
        >
          BUY PRODUCT
        </button>
      </form>
    </div>
  );
};

export default ActivityPage;
