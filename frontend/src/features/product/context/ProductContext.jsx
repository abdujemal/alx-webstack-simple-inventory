/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';
import { getProducts } from '../services/productService';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(2);

  useEffect(() => {
    fetchProducts();
  }, []);


  const loadMoreProducts = async () => {
    console.log({ products, 'page': page });
    setPage((e) => e + 1);
    await fetchProducts(page);

  };

  const fetchProducts = async (page) => {
    try {
      // setLoading(true);
      const data = await getProducts(page);
      if (page && page > 1) {
        setProducts((e) => [...e, ...data]);
        setFilteredProducts((e) => [...e, ...data]);
      }
      else {
        setProducts(data);
        setFilteredProducts(data);
      }

    } catch (err) {
      setLoad(false);
      setError(err.message);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, filteredProducts, setFilteredProducts, loading, setLoading, error, loadMoreProducts, load }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
