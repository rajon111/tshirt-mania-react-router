import React, { createContext, useState } from 'react';
import Aunti from '../Aunti/Aunti';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('diamond')

const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const ornament = 'D-Ring';
    const handleHouse = () => {
        const newHouseCount = house + 1
        setHouse(newHouseCount)

    }
    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>

                <h4>Grandpa</h4>

                <p>House:{house} <button onClick={handleHouse}>Buy A House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunti house={house}></Aunti>
                </section>

            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;