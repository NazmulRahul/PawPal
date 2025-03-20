import React from 'react'
import TransportHero from './TransportHero'

const TransportSegment = () => {
  return (
    <div className='w-full h-auto flex pt-[5%] '>
      <TransportHero/>
      <div className="flex-1 h-full flex flex-col justify-start items-center pt-[10%] gloria-hallelujah-regular">
        <p className='text-2xl font-bold'>Because Every Pet Deserves a Smooth Ride Home</p>
        <p className='text-xl'>&</p>
        <p className='text-xl font-bold'>How we do it</p>
        <div className="w-[40%] h-[500px] bg-amber-400 mt-[30px]"></div>
      </div>
    </div>
  )
}

export default TransportSegment
