import React from 'react'
import "./navbar.scss"
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

import { Link } from 'react-router-dom';


const Navbar = () => {
    const { totalItems, isOpen, setIsOpen } = useContext(CartContext);

const { menuOpen, setMenuOpen} = useStade (true)

    return (
        <div>
            <div className="navbarContainer">
                <div>
                    <h2>MyApp</h2>
                </div>

                <nav className='mobileNav'>
                    <Link to="/">HOME </Link>
                    <Link to="/about">ABOUT </Link>
                    <Link to="/shop">SHOP </Link>
                    <Link to="/contact">CONTACT </Link>
                </nav>

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

                    <div className='menu'>

                        <Menu onClick={()=>setMenuOpen(!menuOpen)}
                            color='#F9FAFB' />
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Navbar