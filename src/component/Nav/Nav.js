import React from "react";
import logo from "../../phones/logo-sticky-1.png";
import './Nav.css'
const Nav = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="">Shop</a>
        <a href="">Orders</a>
        <a href="">Inventory</a>
        <a href="">About</a>
      </div>
    </nav>
  );
};

export default Nav;
