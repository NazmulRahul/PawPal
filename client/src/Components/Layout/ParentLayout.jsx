import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const ParentLayout = () => {
    
  return (
    <div className='w-screen bg-[#EBE8DB] h-screen flex justify-center items-center'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default ParentLayout
