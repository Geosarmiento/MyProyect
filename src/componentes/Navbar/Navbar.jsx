import React from 'react'
import "./navbar.scss"
import { ShoppingCart, User, Menu  } from 'lucide-react';
import { useContext  } from "react";
import { CartContext } from "../../context/CartContext.jsx";


const Navbar = () => {
    const { totalItems, isOpen, setIsOpen } = useContext(CartContext);

    
    return (
        <div>
            <div className="navbarContainer">
                <div>
                    <h2>MyApp</h2>
                </div>
                
                <div className='iconContainer'>
                    <div className='user'> 
                        <User 
                            color='#F9FAFB'/>
                    </div>
                        
                     <div  className='shoppingCart'> 

                    <ShoppingCart 
                        onClick={() => setIsOpen(!isOpen)}
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