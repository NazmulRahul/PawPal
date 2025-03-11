import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isNavBgWhite, setIsNavBgWhite } from '../../Store/Utils'

const Navbar = () => {
    const dispatch = useDispatch()
    const currentIsNavBgWhite = useSelector(isNavBgWhite)
  return (
    <div className={`fixed flex top-0 left-0 right-0 h-[50px] ${currentIsNavBgWhite?'bg-transparent':'bg-white'}`}>
      <div onMouseEnter={()=>dispatch(setIsNavBgWhite(true))} onMouseLeave={()=>dispatch(setIsNavBgWhite(false))} className={` cursor-pointer relative h-[100px] w-full ${currentIsNavBgWhite?'bg-[#F5F5F5]':'backdrop-blur-2xl'} transition-colors duration-900`}></div>
    </div>
  )
}

export default Navbar
