import React from 'react'
import { useSelector } from 'react-redux'
import { isOnHoverNavLink } from '../../Store/Utils'
import data from '../../data/hoverCard'
import AdoptSubLinks from './AdoptSubLinks'
import BlogSubLinks from './BlogSubLinks'
import TransportSubLinks from './TransportSubLinks'

const HoverCard = () => {
    const currentIsOnHoverNavLink = useSelector(isOnHoverNavLink)
  return (
    <div className={`cursor-default w-[500px] h-[300px] bg-gray-900 absolute ${currentIsOnHoverNavLink?'flex':'hidden'}`}>
      {currentIsOnHoverNavLink===1?<AdoptSubLinks/>:null}
      {currentIsOnHoverNavLink===2?<TransportSubLinks/>:null}
      {currentIsOnHoverNavLink===3?<BlogSubLinks/>:null}
      <div className="w-[60%] h-full bg-neutral-800">
        <img className='w-full h-full object-cover' src={data[currentIsOnHoverNavLink-1].url} alt="" />
      </div>
    </div>
  )
}

export default HoverCard 
