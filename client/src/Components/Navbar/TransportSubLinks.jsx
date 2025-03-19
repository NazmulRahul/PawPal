import React from 'react'

const TransportSubLinks = () => {
  return (
    <div className="w-[40%] h-full bg-neutral-800 flex flex-col">
        <button className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Services</p>
        </button>
        <button className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Pricing</p>
        </button>
        <button className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Booking</p>
        </button>
        <button className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>FAQs</p>
        </button>
    </div>
  )
}

export default TransportSubLinks
