import React from 'react'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='w-full min-h-[600px] flex flex-col mt-[150px] bg-neutral-800 text-white'>
        <div className="w-full h-[50%] flex justify-start items-center gap-[40px] px-[10%]">
            <div className="w-[200px] h-[200px] rounded-full">
                <img src={logo} className='w-full h-full rounded-full object-contain' alt="" />
            </div>
            <div className="flex-1 h-full flex flex-col gap-[25px] justify-start items-start pt-[5%] gloria-hallelujah-regular">
                <p className='text-4xl '>Thanks for staying with Paw Pal</p>
                <p className='ml-[40px]'>- From Travel to Adoption – Caring for Pets at Every Step!</p>
            </div>
        </div>
        {/* <div className="w-full h-[100px] bg-blue-500 flex justify-start gap-[30px]">
            
        </div> */}
        <div className="w-full flex-1 bg-amber-600 flex justify-between">
            <div className="flex-1 h-full bg-orange-500"></div>
            <div className="flex-1 h-full bg-green-600"></div>
            <div className="flex-1 h-full bg-black"></div>
            <div className="flex-1 h-full bg-white"></div>
        </div>
      
    </div>
  )
}

export default Footer
