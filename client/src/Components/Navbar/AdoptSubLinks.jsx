import React from 'react'

const AdoptSubLinks = () => {
  return (
    <div className="w-[40%] h-full bg-neutral-800 flex flex-col">
        <button className='cursor-pointer w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='hover:translate-x-2 transition-transform duration-300'>Cats & Kittens</p>
        </button>
        <button className='cursor-pointer w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='hover:translate-x-2 transition-transform duration-300'>Dogs & Puppies</p>
        </button>
        <button className='cursor-pointer w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='hover:translate-x-2 transition-transform duration-300'>Other type of Pets</p>
        </button>
    </div>
  )
}

export default AdoptSubLinks
