import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    //conditional rendering options
        //1.element variable
        let command;
        if(cart.length ===0){
            command = <p>Please atleast add 1 item</p>
        }else if(cart.length ===1){
            command =<p>You can add more..</p>
        }else{
            command =<p>   THANKS!!</p>
        }
    return (
        <div>
            <h2>This is cart:{cart.length}</h2>
           
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={()=>handleRemoveFromCart(tshirt )}>X</button>
                    </p>)
            }
             {command}
        </div>
    );
};

export default Cart;