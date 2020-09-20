import React from 'react';
import './Cart.css';

const cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd) => total + prd.price,0);
    return (
        <div>
             <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length}</p>
           
            <p>Total Price: {total}</p>
        </div>
    );
};

export default cart;