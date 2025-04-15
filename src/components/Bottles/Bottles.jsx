import React, {use} from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise)
    // console.log(bottles);
    
    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle}>
                    </Bottle>)
            }
        </div>
    );
};

export default Bottles;