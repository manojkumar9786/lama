import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header>
      <nav className='p-4 flex justify-between px-10 py-3'>
        <div className='flex gap-2 items-center font-bold text-3xl'>
           <img src='./images/logo.png' alt="" />
           <h1 className='text-primary'>LAMA.</h1>
        </div>
        <div className='flex items-center gap-4'>
          <IoSettingsOutline size={30} />
          <FaRegBell size={30} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
