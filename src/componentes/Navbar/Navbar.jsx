import React from 'react'
import "./navbar.scss"
import { ShoppingCart, User, Menu, X, House , Mail, Store, Building2 } from 'lucide-react';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';


const Navbar = () => {
    const { totalItems, isOpen, setIsOpen } = useContext(CartContext);

    const [ menuOpen, setMenuOpen] = useState (false);

    useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);


    
    return (
        <div>
            <div className="navbarContainer">
                <div>
                    <h2>MyApp</h2>
                </div>

            

                <nav className={`mobileNav ${menuOpen ? "open" : ""}`}>
                
                    
                    <Link to="/" onClick={() => setMenuOpen(false)}> HOME <House/> </Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT     <Building2 /></Link>
                    <Link to="/shop" onClick={() => setMenuOpen(false)}>SHOP  <Store/></Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT <Mail/> </Link>
                </nav>
                {menuOpen ? <X /> : <Menu />}

                <nav className='desktopNav'>
                    <Link to="/">HOME </Link>
                    <Link to="/about">ABOUT </Link>
                    <Link to="/shop">SHOP </Link>
                    <Link to="/contact">CONTACT </Link>
                </nav>

                <div className='iconContainer'>
                    <div className='user'>
                        <User
                            color='#F9FAFB' />
                    </div>

                    <div className='shoppingCart'>

                        <ShoppingCart
                            onClick={() => setIsOpen(!isOpen)}
                            color='#F9FAFB' />

                        <span className='totalItem'>{totalItems}</span>
                    </div>

                    

                     {menuOpen ? <X  className='xMenu'
                                     color='#F9FAFB'
                                     onClick={() => setMenuOpen(false)}
                                      /> : <Menu  className='menu'
                            onClick={() => setMenuOpen(!menuOpen)}
                            color='#F9FAFB' />}
                    

                </div>


            </div>

        </div>
    )
}

export default Navbar