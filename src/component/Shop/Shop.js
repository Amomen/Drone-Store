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
      <div>
        {
          cart.map((item)=>(
            <h4 key={item.id}>{item.name}</h4>
            
          ))
        }
      </div>
        {/* <Carts cart={cart}></Carts> */}
      </div>
    </div>
  );
};

export default Shop;
