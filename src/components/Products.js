import React from 'react'
import phone1 from '../pictures/phone1.jpg'
import phone2 from '../pictures/phone2.jpg'
import phone3 from '../pictures/phone3.jpg'
import phone4 from '../pictures/phone4.jpg'

function Products() {
  return (
    <div>
      <div className='firstrow'>

      
        <div className='card'>
        <h2>SumSung</h2>
        <img src={phone1} alt =""/>
        <p>GHC1200</p>
        <button>Buy Me</button>
        </div>
       

        <div className='card'>
        <h2>IOS</h2>
        <img src={phone2} alt =""/>
        <p>500cedis</p>
        <button>Buy Me</button>
        </div>

        <div className='card'>
        <h2>Techno</h2>
        <img src={phone3} alt =""/>
        <p>500cedis</p>
        <button>Buy Me</button>
        </div>

        <div className='card'>
        <h2>Infinix</h2>
        <img src={phone4} alt =""/>
        <p>GHC500</p>
        <button>Buy Me</button>
        </div>
        </div>
        
        
        <div className='headphones'>

        </div>
        <div className='drives'>

        </div>
        <div className='cases'>
            
        </div>
    
    </div>
  )
}

export default Products