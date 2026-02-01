import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./header.scss"

const Header = () => {
  return (
    <div>
      <div className='headerContainer'>
        <Navbar/>
      </div>
    </div>
  )
}

export default Header