import React from "react";
import "./Product.css";
const Product = (props) => {
  const { id, name, price, image } = props.product;
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        
        <p>
          <small>id:{id}</small>
        </p>
      </div>
    </div>
  );
};

export default Product;
