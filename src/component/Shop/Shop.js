import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { f2ed } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Carts from "../Carts/Carts";
import Product from "./Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("generated.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const getCart = (product) => {
    const allProduct = [...cart, product];
    setCart(allProduct);
  };
  return (
    <div className="product-container">
      <div className="shop">
        {products.map((product) => (
          <Product key={product.id} product={product} cart={getCart}></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
