import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=''>
           <ul className=''>
           <li>logo</li>
           <li>navegacion1</li>
           <li>navegacion2</li>
           <li>navegacion3</li>
           <li className='padding:3px'>
               <Link to='/Login'>  
               <button className='background-color: blue padding:2px color:white border-radius:10px box-shadow: 1px 1px pink'>
                   Iniciar Sesion
               </button>
               </Link>
           </li>
               
           </ul>
        </nav>
    )
}

export default Navbar
