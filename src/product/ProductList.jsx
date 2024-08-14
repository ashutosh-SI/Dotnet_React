import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../services/productAPIservices";
import ProductCard from "./ProductCard";
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsHandler();
  }, []);

  async function getProductsHandler() {
    let data = await getProducts();
    if (data != null) {
      setProducts(data);
    }
    console.log(products);
  }
  return (
    <div>
      <h1>Product List :{products.length} </h1>
      <div className="row ">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <h1>No Products Found</h1>
        )}
      </div>
    </div>
  );
};

export default ProductsList;