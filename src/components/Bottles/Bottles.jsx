import React, {use, useState, useEffect} from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart } from '../../utilities/localStorage';

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] =useState([]);
    const bottles = use(bottlesPromise)

    // useEffect
    useEffect(() => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles)

        const storedCart = [];

        for(const id of storedCartIds){
            // console.log(id)
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }

        // console.log(storedCart);
        setCart(storedCart);
        

    }, [bottles]);


    const handleAddToCart = (bottle) => {
        // console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart)

        // save the bottle id in the storage
        addToStoreCart(bottle.id)
    }
    
    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            <h3>Added to cart: {cart.length}</h3>

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