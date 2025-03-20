import React from 'react'
import TransportHero from './TransportHero'
import TransportDetailsCard from './TransportDetailsCard'

const TransportSegment = () => {
  return (
    <div className='w-full h-auto flex pt-[5%] '>
      <TransportHero/>
      <div className="flex-1 h-full flex flex-col justify-start items-center pt-[10%] gloria-hallelujah-regular">
        <p className='text-2xl font-bold'>Because Every Pet Deserves a Smooth Ride Home</p>
        <p className='text-xl'>&</p>
        <p className='text-xl font-bold'>Here how we do it</p>
        <TransportDetailsCard/>
      </div>
    </div>
  )
}

export default TransportSegment
