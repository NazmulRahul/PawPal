import React from 'react'
import { useNavigate , Link} from 'react-router-dom'

const TransportSubLinks = () => {
  return (
    <div className="w-[40%] h-full bg-neutral-800 flex flex-col">
        <Link to={'/transport#work'}   className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Work Procedure</p>
        </Link>
        <Link to={'/transport#services'}   className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Services</p>
        </Link>
        <Link to={'/transport#agencies'}   className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Agencies</p>
        </Link>
        <Link to={'/transport#agencies'}   className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Pricing</p>
        </Link>
        <Link to={'/transport#book'}   className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Booking</p>
        </Link>
        <Link to={'/transport#book'}   className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>FAQs</p>
        </Link>
    </div>
  )
}

export default TransportSubLinks
