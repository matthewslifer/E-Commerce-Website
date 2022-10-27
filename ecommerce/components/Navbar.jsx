import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">Next.JS Headphones and Audio</Link>
      </p>
      <button type="button" className='cart-icon' onClick="">

      </button>
      </div>
  )
}

export default Navbar