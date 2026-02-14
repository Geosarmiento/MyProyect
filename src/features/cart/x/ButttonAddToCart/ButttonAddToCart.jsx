import React from 'react'
import "./buttonAddToCart.scss"


import { useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx"


const ButttonAddToCart = ( { product } ) => {

        const { addToCart } = useContext(CartContext);
    


    return (
        <div>
             <button className='add-btn' 
                     onClick={() => addToCart(product)}>Agregar al Carrito
                      </button>

        </div>
    )
}

export default ButttonAddToCart