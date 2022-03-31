import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornament}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <p>{ring}</p>
        </div>
    );
};

export default Special;