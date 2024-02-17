// create a component that fetches data from an api and displays it.

import { useEffect, useState } from "react";

const FetchDisplay = () => {
  const [productData, setProductData] = useState([]);

  const getProducts = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const json = await resp.json();
    setProductData(json?.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {productData.length > 0 ? (
          productData.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
};

export default FetchDisplay;
