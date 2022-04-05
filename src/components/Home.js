import React from 'react'
import phones from '../pics/phones.jpg'
import headphones from '../pics/headphones.jpg'
import drives from '../pics/drives.jpg'
import cases from '../pics/cases.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='products'>
        <div className='firstrow'>
        <div className='card'>
        <h2>Smart Phones</h2>
        <img src={phones} alt =""/>
        <p>We sell quality smart phones at affordable prices</p>
        <button><Link to ="/products">view phones</Link></button>
        </div>
     
        <div className='card'>
        <h2>Quality Headphones</h2>
        <img src={headphones} alt =""/>
        <p>We sell quality headphones at affordable prices</p>
        <button> <Link to ="/products">view our headphones</Link></button>
        </div>

        </div>

        <div className='secondrow'>
        <div className='card'>
        <h2>Quality USB drives</h2>
        <img src={drives} alt =""/>
        <p>We sell quality smart pendrives at affordable prices</p>
        <button><Link to ="/products">view our drives</Link></button>
        </div>
        <div className='card'>
        <h2>Affordable and Quality phone cases</h2>
        <img src={cases} alt =""/>
        <p>We sell quality smart phone cases at affordable prices</p>
        <button><Link to ="/products">view our cases</Link></button>
        </div>
        </div>

        
    </div>
  )
}

export default Home