import React from 'react';
import './cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    // console.log(cart);
    
    return (
        <div className='cart-container'>
            {
                cart.map(bottle => <div>
                    <img src={bottle.img} alt="" />
                    <button onClick={()=> handleRemoveFromCart(bottle.id)} >X</button>
                </div>  )
            }
        </div>
    );
};

export default Cart;