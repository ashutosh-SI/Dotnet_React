import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = (props) => {
  return (
    <div className="card m-2" style={{ width: 18 + "rem" }}>
      <img
        className="card-img-top"
        src="https://via.placeholder.com/286x180"
        alt={props.product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.productName}</h5>
        <h6 className="card-title">₹ {props.product.price}</h6>
        <span class="badge text-bg-secondary">{props.product.category}</span>
        <span class="m-1 badge text-bg-primary">
          {props.product.productCode}
        </span>
        <p className="card-text">{props.product.description}</p>
        <span>
          <FaStar width={10} height={10} /> {props.product.starRating}
        </span>
        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = `/products/${props.product.productId}`)}
        >
          View Product
        </button>'
      </div>
    </div>
  );
};

export default ProductCard;