import React from 'react'
import { Outlet } from 'react-router-dom'

const ParentLayout = () => {
  return (
    <div className='w-screen min-h-screen flex justify-center items-center'>
      <Outlet/>
    </div>
  )
}

export default ParentLayout
