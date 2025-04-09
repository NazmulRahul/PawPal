import React from 'react'

const Transport = ({translate}) => {
  return (
    <section style={{transform:`translateX(${translate}%)`}} className='transition-transform duration-500 shrink-0 w-full h-full rounded-4xl flex justify-between'>
        <div className="w-[40%] h-full rounded-3xl">
        <img src={'https://i.pinimg.com/736x/5e/a4/b3/5ea4b3a1b47cb04a70f2d0ca98dd0cb3.jpg'} className='w-full h-full rounded-3xl object-cover' alt="" />
        </div>
        <div className="w-[50%] h-full flex flex-col justify-start items-center pt-[40px] gap-[15px] text-white ">
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] outline-blue-600 border-neutral-300 pl-4 text-white placeholder:text-neutral-200' placeholder='Pickup Address' type="text" />
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] outline-blue-600 border-neutral-300 pl-4 text-white placeholder:text-neutral-200' placeholder='Origin City' type="text" />
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] outline-blue-600 border-neutral-300 pl-4 text-white placeholder:text-neutral-200' placeholder='Origin State' type="text" />
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] outline-blue-600 border-neutral-300 pl-4 text-white placeholder:text-neutral-200' placeholder='Destination Address' type="text" />
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] outline-blue-600 border-neutral-300 pl-4 text-white placeholder:text-neutral-200' placeholder='Destination City' type="text" />
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] outline-blue-600 border-neutral-300 pl-4 text-white placeholder:text-neutral-200' placeholder='Destination State' type="text" />
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] outline-blue-600 border-neutral-300 pl-4 text-white placeholder:text-neutral-200' placeholder='Relocation Purpose' type="text" />
        </div>
    </section>
  )
}

export default Transport
