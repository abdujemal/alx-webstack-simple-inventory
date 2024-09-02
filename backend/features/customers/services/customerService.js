import Customer from '../models/Customer.js';


const createCustomer = async (customerData) => {
  const existingCustomer = await Customer.findOne({ phone: customerData.phone });
  if (existingCustomer) {
    throw new Error('Customer with this phone number already exists');
  }
  const newCustomer = new Customer(customerData);
  return await newCustomer.save();
};

const getCustomerById = async (id) => {
  return await Customer.findById(id);
};

const getAllCustomers = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  return await Customer.find().skip(skip).limit(limit);
};


const updateCustomer = async (id, updateData) => {
  try {
    // console.log({ imageUrl });
    // if (!imageUrl) {
    // }
    return await Customer.findByIdAndUpdate(id, updateData, { new: true });

  } catch (error) {
    throw new Error('Error updating customer: ' + error.message);

  }
};

const deleteCustomer = async (id) => {
  return await Customer.findByIdAndDelete(id);
};

const searchCustomers = async (query) => {
  try {
    const regex = new RegExp(query, 'i'); // Case-insensitive search
    return await Customer.find({
      $or: [
        { name: regex },
        { phone: regex }
      ]
    });
  } catch (error) {
    throw new Error('Error searching Customers: ' + error.message);
  }
};



export default {
  createCustomer,
  getCustomerById,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  searchCustomers,
};
