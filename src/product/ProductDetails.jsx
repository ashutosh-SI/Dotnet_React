import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productAPIservices";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getProductByIdHandler(id);
  }, []);

  async function getProductByIdHandler(id) {
    let data = await getProductById(id);
    if (data != null) {
      setProduct(data);
    }
    console.log(product);
  }
  return (
    <div className="container">
      <h1>Product Details {id}</h1>
      <p>Name : {product.productName}</p>
      <p>Price : {product.price}</p>
      <p>Category : {product.category}</p>
      <p>Description : {product.description}</p>
      <p>Product Code : {product.productCode}</p>
      <p>Star Rating : {product.starRating}</p>
    </div>
  );
};

export default ProductDetails;