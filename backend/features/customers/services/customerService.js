import Customer from '../models/Customer.js';

const createCustomer = async (customerData) => {
  const customer = new Customer(customerData);
  return await customer.save();
};

const getCustomerById = async (id) => {
  return await Customer.findById(id);
};

const getAllCustomers = async () => {
  return await Customer.find();
};

const updateCustomer = async (id, updateData) => {
  return await Customer.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteCustomer = async (id) => {
  return await Customer.findByIdAndDelete(id);
};

export default {
  createCustomer,
  getCustomerById,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
};
