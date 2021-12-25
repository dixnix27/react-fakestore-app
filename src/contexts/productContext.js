import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  console.log("products:", products);

  useEffect(() => {
    axios("https://fake-store-app.herokuapp.com/api/products").then((response) =>
      setProducts(response.data)
    );
  }, []);

  const value = {
    products,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductProvider;
