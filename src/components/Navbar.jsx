import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex w-full justify-around items-center">
        <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" srcset="" className='mt-5'/>
        </div>
        <ul className='flex gap-6 font-semibold'>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <button className='button px-2 py-1 text-white font-semibold'>Login</button>
       
    </nav>
  )
}

export default Navbar
