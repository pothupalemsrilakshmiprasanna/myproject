import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navsection'>
        <ul>
            <Link to="/abc">
            <li>first</li>
            
            </Link>
            

            <Link to ="/apple">
            <li>second</li>

            </Link>
          

            <Link to="/mango">
            <li>third</li>
            </Link>
           
            <Link to="/banana"> 
            <li>fourth</li>
            </Link>
            
        </ul>

      
    </div>
  )
}

export default Navbar
