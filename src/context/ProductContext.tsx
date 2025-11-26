import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { Product } from '../types/Product';
import axios from 'axios';

type ProductsContextType = {
    products: Product[];
    loading: boolean;
}

export const ProductsContext = createContext<ProductsContextType>({
    products: [],
    loading: true,
});

type Props = {
  children: ReactNode;
};

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }

  return context;
};

export const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await axios.get('https://dummyjson.com/products');
        setProducts(result.data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
   <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );

}