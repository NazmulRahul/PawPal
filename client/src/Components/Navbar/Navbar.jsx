import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isNavBgWhite, setIsNavBgWhite } from '../../Store/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/logo.png'

const Navbar = () => {
    const dispatch = useDispatch()
    const currentIsNavBgWhite = useSelector(isNavBgWhite)
    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log('submitting..')
    }
  return (
    <div className={`z-40 fixed flex top-0 left-0 right-0 h-[50px] ${currentIsNavBgWhite?'bg-transparent':'bg-white'}`}>
      <div 
        onMouseEnter={()=>dispatch(setIsNavBgWhite(true))} 
        onMouseLeave={()=>dispatch(setIsNavBgWhite(false))} 
        className={` z-50 relative h-[100px] w-full ${currentIsNavBgWhite?'bg-[#F5F5F5]':'backdrop-blur-xl'} transition-colors duration-900 flex items-center justify-between px-[5%]`}>
          <div className="w-[100px] h-full flex flex-col justify-center items-center">
            <img className='w-[150px] h-[60%] object-contain' src={logo} alt="" />
            <p className='font-extrabold cherry-bomb-one-regular text-2xl text-orange-500'>Paw Pal</p>
          </div>
          <div className="w-[60%] h-full flex justify-between items-center">
            <div className="w-[55%] h-full flex justify-between items-end pb-[20px]">
              <button className='text-black hover:text-red-700 hover:underline text-lg font-semibold cursor-pointer'>Adopt</button>
              <button className='text-black hover:text-red-700 hover:underline text-lg font-semibold cursor-pointer'>Transport</button>
              <button className='text-black hover:text-red-700 hover:underline text-lg font-semibold cursor-pointer'>Blogs</button>
              <button className='text-black hover:text-red-700 hover:underline text-lg font-semibold cursor-pointer'>AboutUs</button>
            </div>
            <form onSubmit={handleSubmit} className="w-[40%] h-full  flex justify-end items-end pb-[20px]">
              <div className='w-[80%] h-[30px] flex items-center border-[1px] border-black rounded-lg px-[5px]'>
                <input type="text" className='flex-1 h-full outline-none' placeholder='Search something...' />
                <button type='submit' className='cursor-pointer'>
                    <FontAwesomeIcon className='text-xl' icon="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </form>
          </div>
          <div className="w-[300px] h-full  flex justify-start items-end pb-[20px] gap-[10px]">
            <div className="w-[55px] h-[55px] rounded-full bg-gradient-to-b  from-orange-400 to-red-700 flex justify-center  items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-black  cursor-pointer">
                <img src="https://i.pinimg.com/736x/24/23/98/24239866c8495158664b9d2f385c1c39.jpg" className='w-full h-full rounded-full  object-cover' alt="" />
              </div>
            </div>
            <p className='font-semibold text-lg mb-[10px] cursor-pointer'>Jhon Doe</p>
          </div>
      </div>
    </div>
  )
}

export default Navbar
