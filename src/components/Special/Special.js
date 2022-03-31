import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    // const [ornament,house] = useContext(RingContext)
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <p>{house}</p>
            <button onClick={()=>setHouse(house+1)}>add</button>
        </div>
    );
};

export default Special;