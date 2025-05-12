import React, { useEffect, useState } from 'react'
import petTransportServices from '@/data/TransportServices'

const Agencies = ({translate}) => {
  const [isActive, setIsActive] =useState(null)
  useEffect(()=>console.log(isActive))
  return (
    <section style={{transform:`translateX(${translate}%)`}} className='transition-transform duration-500 shrink-0 w-full h-full rounded-4xl flex justify-center items-center'>
        <div className=" ml-[4%] w-[90%] min-h-[70%] flex flex-wrap justify-center items-start gap-x-[30px] gap-y-[30px] ">
          {
            petTransportServices.map((item)=><button onClick={()=>setIsActive(item.id)} key={item.id} className={` ${isActive===item.id?'border-green-700':'border-neutral-200'} h-[180px] shrink-0 rounded-xl border-2 group  hover:border-blue-700 w-[280px] group cursor-pointer relative flex bg-gray-800 justify-start items-center p-[20px] gap-[30px]`}>
        
              <div className={`w-[120px] h-[120px] p-[10px] border-2 group-hover:border-blue-700  rounded-full ${isActive===item.id?'border-green-700':'border-neutral-200'}`}>
                  <img className='w-full h-full rounded-full object-cover' src={item.url} alt="" />
              </div>
              <div className="w-[40%] h-full flex justify-center items-center">
                  <p className='text-white'>{item.title}</p>
              </div>
              
          </button>)
          }
        </div>
    </section>
  )
}

export default Agencies
