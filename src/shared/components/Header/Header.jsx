import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./header.scss"
import Cart from '../Cart/Cart/Cart'

const Header = () => {
  
  return (
    <div>
      <div className='headerContainer'>
        <Navbar/>
        <Cart/>

      

      </div>
    </div>
  )
}

export default Header