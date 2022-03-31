import React from 'react';
import Special from '../Special/Special';

const Myself = ( {house,ornament}) => {
    return (
        <div>
            <h4>myself</h4>
            <p> {house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default Myself;