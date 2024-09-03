import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCustomerById, updateCustomer } from '../services/customerService';
// import { dataURLtoFile } from '../../auth/services/helpers';

const EditCustomerPage = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [updatedCustomer, setUpdatedCustomer] = useState({});
  // const [image, setImage] = useState(null);
  // const [urlImage, setUrlImage] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const getCustomers = async () => {
      try {
        console.log({ id });

        const customerToEdit = await fetchCustomerById(id);
        setCustomer(customerToEdit);
        // setUrlImage(customerToEdit?.image)
        setUpdatedCustomer(customerToEdit);
      } catch (error) {
        console.error('Error fetching customer:', error);
      }
    };
    getCustomers();
  }, [id]);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImage(reader.result);
//       };

//       reader.readAsDataURL(file);
//     }
// };

const handleChange = (e) => {
  const { name, value } = e.target;
  setUpdatedCustomer(prevCustomer => ({ ...prevCustomer, [name]: value }));
};

const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    setLoading(true)
    // let imageFile;
    // if (image) {
    //   imageFile = dataURLtoFile(image, 'image.jpg')
    // }
    await updateCustomer(id, updatedCustomer);
    setLoading(false)
    navigate('/customers');
  } catch (error) {
    setLoading(false)
    console.error('Error updating customer:', error);
  }
};

if (!customer) return <div className="p-6">Loading...</div>;

return (
  <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md border border-primary">
    <h1 className="text-3xl font-bold mb-6 text-center">Edit Customer</h1>
    <form onSubmit={handleUpdate} className="space-y-6">
      {/* {
          image ?
            <img src={image} className=" h-32 w-32 m-auto mt-6 rounded-full" alt="user_image" /> :
            <img src={urlImage} className=" h-32 w-32 m-auto mt-6 rounded-full" />
        }
        <input type="file" accept="image/*" name='image' onChange={handleFileChange} className=" shadow-sm w-fit px-2 py-1 mt-2 rounded self-center" /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Customer Name</label>
          <input
            type="text"
            name="name"
            value={updatedCustomer.name || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Customer Phone</label>
          <input
            type="text"
            name="phone"
            value={updatedCustomer.phone || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Gender</label>

          <select
            id="gender"
            name="gender"
            value={updatedCustomer.gender || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required>
            <option value="" disabled>Select your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

        </div>

      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => navigate('/customers')}
          className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Cancel
        </button>
        {
          loading ?
            <p
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Loading...</p> :
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Update Customer
            </button>
        }
      </div>
    </form>
  </div>
);
};

export default EditCustomerPage;
