import React, { useState, useEffect } from "react";
import { Product } from "./Product";

export const ProductListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      console.log("aca");
      try {
        const response = await fetch(
          `https://api.mercadolibre.com/sites/MLA/search?q=:iphone&limit=4`
        );

        const resultsResponse = await response.json();
        setProducts(resultsResponse.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="Product_list">
      {products.map((product) => (
        <Product
          title={product.title ?? ""}
          key={product.id ?? ""}
          picture={product.thumbnail ?? ""}
          price={product.price ?? ""}
          description={product.description ?? ""}
          location={product.address.state_name ?? ""}
        />
      ))}
    </div>
  );
};
