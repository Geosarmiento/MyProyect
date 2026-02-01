import React from 'react'

import "./cart.scss"
import CartList from "../../Cart/CartList.jsx"
import CardSumamry from "../../Cart/CardSummary.jsx"

import { X } from 'lucide-react';


function Cart({ onClose }) {
  return (
    <div className="cart-overlay">

      <div className="cart">

         <X 
          className="x-icon" 
          size={20} onClick={onClose} />


        <h2>Tu carrito</h2> 

        <CartList/>
        <CardSumamry/>
        {/* productos aquí */}
      </div>
    </div>
  );
}


export default Cart