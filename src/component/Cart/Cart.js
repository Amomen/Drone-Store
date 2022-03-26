import React, { useState } from "react";
import Carts from "../Carts/Carts";
import "./Cart.css";
const Cart = ({ cart, remove }) => {
  

  const [selectOne, setOne] = useState([]);

  const single = (carts) => {
    let lucky = carts[Math.floor(Math.random() * carts.length)];
    setOne(lucky);
  };
  return (
    <div className="sticky-cart">
      {cart.map((item) => (
        <Carts item={item}></Carts>
      ))}
      <div>
        <button className="choose-btn" onClick={()=>single(cart)}>Choose One</button>
        <p>{selectOne.name}</p>
      </div>
      <div>
        <button onClick={remove} className="clear-btn">
          Clear Cart
          {/* <FontAwesomeIcon icon="fa-solid fa-trash-can"></FontAwesomeIcon> */}
        </button>
      </div>
    </div>
  );
};

export default Cart;
