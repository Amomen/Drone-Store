import React from 'react';

const Carts = ({cart}) => {
    const {name,price}=cart;
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
};

export default Carts;