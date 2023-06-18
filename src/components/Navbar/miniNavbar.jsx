import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import './navbar.css'

const MiniNavbar = () => {
     return ( 
          <div className='flex  w-full justify-between items-center py-0 fixed top-0 z-20 mini-navbar'>
               <span className=''>Hide</span>
            <ul className='flex justify-between items-center mt-0 pt-0'>
               <li className=''>
                    <Link to='/' className='mx-1'><FiFacebook /></Link>
               </li>
               <li>
                    <Link to='/' className='mx-1' ><FiInstagram /></Link>
               </li>
               <li>
                    <Link to='/' className='mx-1' >how to use</Link>
               </li>
               <li>
                    <Link to='/' className='mx-1' >SignOut</Link>
               </li>
            </ul>
          </div>
      );
}
 
export default MiniNavbar;