import React, {use, useState} from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
    // console.log(bottles);
    const [cart, setCart] =useState([])

    const handleAddToCart = () => {
        console.log('Bottle will be added to the cart');
    }
    
    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}>
                        </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;