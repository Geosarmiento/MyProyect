import React from 'react'

import "./cart.scss"
import CartList from "../../Cart/CartList.jsx"
import CardSumamry from "../../Cart/CardSummary.jsx"

import { X } from 'lucide-react';

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx";



function Cart() {
  const { isOpen, setIsOpen } = useContext(CartContext);



  return (
    <div className={`cart-overlay ${isOpen ? "show" : ""}`}
         >

      <div className="cart"
         >

        <X
          className="x-icon"
          size={20}
          onClick={() => setIsOpen(false)} />


        <h2>Tu carrito</h2>

        <CartList />
        <CardSumamry />

        {/* productos aquí */}
      </div>
    </div>
  );
}


export default Cart