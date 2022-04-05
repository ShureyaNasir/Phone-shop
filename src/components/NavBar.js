import React from 'react'
import {FaDashcube} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='header'>
    <FaDashcube className='icon'/>
    <h2>Danwanaa Phones and Accessories</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to ="/about">About Us</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to ="/contact us">Contact Us</Link></li>
      </ul>
    </div>
  )
}

export default NavBar