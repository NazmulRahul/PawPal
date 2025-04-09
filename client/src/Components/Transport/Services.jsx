import petTransportServices from '@/data/TransportServices'
import React, { useEffect } from 'react'
import ServiceCard from './ServiceCard'
import gif from '../../assets/gif02.gif'

const Services = () => {
  useEffect(()=>console.log(gif))
  return (
    <div className='w-full min-h-screen flex justify-between items-start pt-[5%] mt-[100px] px-[10%]'>
      <div style={{ backgroundImage: `url(${gif})` }} className={` bg-no-repeat w-[30%] h-full flex flex-col justify-center items-center `}>
        <p className=' animate-bounce text-3xl gloria-hallelujah-regular'>Services at your door!</p>
      </div>
      <div className="w-[60%] h-full flex flex-col flex-wrap gap-2 justify-start items-center ">
        {
            petTransportServices.map((item)=><ServiceCard item={item}/>)
        }
      </div>
    </div>
  )
}

export default Services
