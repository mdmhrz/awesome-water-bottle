import React from 'react';
import './bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    // console.log(bottle);
    const {name, price} = bottle;

    
    return (
        <div className='card bottle'>
            <img src={bottle.img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;