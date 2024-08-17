/* eslint-disable react/prop-types */
import  { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialProducts = Array.from({ length: 10 }, (_, index) => ({
    id: `1741D${index}`,
    name: "Dollan Watch",
    sku: "12569756",
    location: "Warehouse 1",
    price: "$123",
    stock: "1108",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/422177226cd72c14791e4076ac2068a07858195ebfddf8320e9e0beaafab071b?placeholderIfAbsent=true&apiKey=9392bf5430554535ad397aae3c4fade4",
  }));

  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  return (
    <ProductContext.Provider value={{ products, setProducts, filteredProducts, setFilteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);