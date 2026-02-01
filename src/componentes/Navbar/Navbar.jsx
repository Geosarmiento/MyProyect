import React from 'react'
import "./navbar.scss"

import { ShoppingCart, User, Menu  } from 'lucide-react';

import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import Cart from "../Cart/Cart/Cart.jsx"


const Navbar = () => {

    const { totalItems } = useContext(CartContext);

    const [ isOpen, setIsOpen ] = useState(false);

    

    return (
        <div>
            <div className="navbarContainer">
                <div>
                    <h2>MyApp</h2>
                </div>


                <div className='iconContainer'>
                    {isOpen && <Cart onClose={() => setIsOpen(false)} />}
                    
                    <div className='user'> 
                        <User 
                            color='#F9FAFB'/>
                    </div>
                        
                     <div  className='shoppingCart'> 
                        <ShoppingCart 
                            onClick={() => setIsOpen(true)} 
                            color='#F9FAFB' />
                            <span className='totalItem'>{totalItems}</span>
                    </div>

                     <div className='menu'> 
                        <Menu 
                            color='#F9FAFB'/>
                    </div>
                  
                </div>


            </div>

        </div>
    )
}

export default Navbar