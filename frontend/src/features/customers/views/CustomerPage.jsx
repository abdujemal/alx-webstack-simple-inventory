// src/pages/CustomerPage.js

import { useContext } from 'react';
import { BiSolidUserDetail } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";
import { CustomerContext } from '../context/CustomerContext'; // Adjust path as necessary

const CustomerPage = () => {
    const { customers, selectedCustomer, preview, handlePreview, setPreview } = useContext(CustomerContext);

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-white w-full h-screen overflow-auto relative">
            {/* Main Content */}
            <div className="flex-1">
                <div className="flex flex-col gap-4">
                    {/* Search Bar */}
                    <div className="flex justify-center md:justify-start mb-4">
                        <input
                            className="w-full max-w-md px-4 py-2.5 bg-white rounded-lg shadow-md border border-gray-300"
                            type="search"
                            placeholder="Search..."
                        />
                    </div>

                    {/* Customer Table Header */}
                    <div className="grid grid-cols-1 md:grid-cols-4 text-lg font-bold border-b pb-2 mb-4 gap-4">
                        <div className="text-center md:text-left">Customer ID</div>
                        <div className="text-center md:text-left">Name</div>
                        <div className="text-center md:text-left">Phone No.</div>
                        <div className="text-center">Detail</div>
                    </div>

                    {/* Customer Rows */}
                    {customers.map(customer => (
                        <div
                            key={customer._id}
                            className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center py-3 border-b hover:bg-gray-100 transition duration-500"
                        >
                            <div className="text-center md:text-left">{customer._id}</div>
                            <div className="text-center md:text-left">{customer.name}</div>
                            <div className="text-center md:text-left">{customer.phone}</div>
                            <div className="text-center">
                                <button
                                    onClick={() => handlePreview(customer._id)}
                                    className="text-blue-500 hover:text-blue-700 transition"
                                >
                                    <BiSolidUserDetail className="inline-block w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Preview Pane */}
            <div
                className={`fixed inset-y-0 right-0 bg-primary text-white p-6 transform transition-transform duration-500 ease-in-out w-full max-w-md ${
                    preview ? 'translate-x-0' : 'translate-x-full'
                } ${preview ? 'hide-scrollbar' : ''}`}
            >
                <button
                    onClick={() => setPreview(false)}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
                >
                    <IoIosCloseCircle className="size-10"/>
                </button>
                <div className="flex flex-col h-full">
                    {selectedCustomer && (
                        <>
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold mb-4">Preview Customer</h2>
                                <img
                                    loading="lazy"
                                    src={selectedCustomer.imageUrl || "default-image-url"} // Replace with actual image URL
                                    className="object-contain w-40 h-40 mx-auto mb-4 rounded-full border-4 border-white"
                                />
                                <div className="text-xl font-semibold">{selectedCustomer.name}</div>
                                <div className="text-lg mt-2">{selectedCustomer.phone}</div>
                            </div>

                            {/* Products List */}
                            <div className="text-xl font-bold mb-4">Products</div>
                            <div className="flex-1 overflow-y-auto hide-scrollbar">
                                <div className="space-y-4">
                                    {selectedCustomer.products && selectedCustomer.products.map((product, index) => (
                                        <div key={index} className="flex items-center space-x-4 border-b pb-2">
                                            <img
                                                loading="lazy"
                                                src={product.imageUrl || "default-product-image-url"} // Replace with actual image URL
                                                alt="Product"
                                                className="w-16 h-16 object-cover rounded-md"
                                            />
                                            <div className="flex-1">{product.name}</div>
                                            <div className="text-gray-300">{product.warehouse}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomerPage;
