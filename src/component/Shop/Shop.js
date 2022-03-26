import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { f2ed } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Carts from "../Carts/Carts";
import Product from "./Product/Product";
import "./Shop.css";
import QnA from "../QnA/QnA";

const Shop = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("generated.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const [cart, setCart] = useState([]);

  const remove=()=>{
    let updatedCart=[];
    setCart(updatedCart);
  }
  const getCart = (product) => {
    const exist = cart.find((added) => added.id === product.id);
    if(!exist){
      const allProducts=[...cart,product];
      setCart(allProducts);
    }
    else return;
    
  };
  return (
    <div className="product-container">
      <div className="shop">
        {products.map((product) => (
          <Product key={product.id} product={product} cart={getCart} ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} remove={remove}></Cart>
      </div>
      <QnA></QnA>
    </div>
  );
};

export default Shop;
