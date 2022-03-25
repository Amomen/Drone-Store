import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ cart, product }) => {
  const { id, name, price, image } = product;

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>

        <p>
          
        </p>
      </div>
      <button onClick={() => cart(product)} className="cart-button">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
