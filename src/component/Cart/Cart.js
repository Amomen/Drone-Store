import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className="cart-container">
        <div>
          {cart.map((item) => (
            <h4 key={item.id}>{item.name}</h4>
          ))}
        </div>
        <div>
          <button className="choose-btn">Choose One</button>
        </div>
        <div>
          <button className="clear-btn">
            Clear Cart
            {/* <FontAwesomeIcon icon="fa-solid fa-trash-can"></FontAwesomeIcon> */}
          </button>
        </div>
        {/* <Carts cart={cart}></Carts> */}
      </div>
    );
};

export default Cart;



