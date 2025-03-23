import React from 'react'
import RollingElement from '../Utils/RollingElement'

const HeroSegment = () => {
  return (
    <div className='w-full h-full flex px-[10%] gap-[5%] '>
      
        <RollingElement>
          <div className="w-full h-screen bg-blue-800 rounded-b-2xl"></div>
        </RollingElement>
        <RollingElement index={2}>
          <div className="w-full h-[90vh] bg-red-800 rounded-b-[10%]"></div>
        </RollingElement>
      
    </div>
  )
}

export default HeroSegment
