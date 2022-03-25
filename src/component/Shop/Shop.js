import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProduct] = useState([]);
  //   useEffect(() => {
  //         fetch("generated.json")
  //       .then((res) => res.json())
  //       .then((data) => setProduct(data));
  //   }, []);
  useEffect(() => {
    fetch("generated.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="product-container">
      <div className="shop">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="cart"></div>
    </div>
  );
};

export default Shop;
