import React from "react";
import "./Carts.css";
const Carts = ({ item }) => {
  const { name, price, image } = item;
  return (
    <div>
      <div className="cart-box">
        <div className="flex-cart">
          <img src={image} alt="" />
          <h4>{name}</h4>
        </div>
      </div>
      {/* <Carts cart={cart}></Carts> */}
    </div>
  );
};

export default Carts;
