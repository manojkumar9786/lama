import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen'>
           <Outlet />
        </div>
    </div>
  )
}

export default HomeLayout
