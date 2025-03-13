import React from 'react'

const BlogSubLinks = () => {
  return (
    <div className="w-[40%] h-full bg-neutral-800 flex flex-col">
        <button className='cursor-pointer w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='hover:translate-x-2 transition-transform duration-300'>Adoption</p>
        </button>
        <button className='cursor-pointer w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='hover:translate-x-2 transition-transform duration-300'>Breeds</p>
        </button>
        <button className='cursor-pointer w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='hover:translate-x-2 transition-transform duration-300'>Health and Wellness</p>
        </button>
        <button className='cursor-pointer w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='hover:translate-x-2 transition-transform duration-300'>Training</p>
        </button>
        <button className='cursor-pointer w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='hover:translate-x-2 transition-transform duration-300'>Other information</p>
        </button>
    </div>
  )
}

export default BlogSubLinks
