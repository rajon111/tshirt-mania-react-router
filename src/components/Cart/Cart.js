import React from 'react';
import './Cart.css'
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
             {cart.length !==4 ? <p>Keep adding</p> : <button>Remove All</button>}
             {cart.length ===4 && <button className='ornage'>Review Order</button>}
        </div>
    );
};

export default Cart;