import React from 'react'

const Owner = ({translate}) => {
  return (
    <section style={{transform:`translateX(${translate}%)`}} className=' transition-transform duration-500 shrink-0 w-full h-full rounded-4xl flex justify-between'>
        <div className="w-[40%] h-full rounded-3xl">
        <img src={'https://i.pinimg.com/736x/a4/40/01/a44001fcb8b7ea1137b233b8dfae8ced.jpg'} className='w-full h-full rounded-3xl object-cover' alt="" />
        </div>
        <div className="w-[50%] h-full flex flex-col justify-start items-center pt-[40px] gap-[15px] text-white ">
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] outline-blue-600 border-neutral-300 pl-4 text-white placeholder:text-neutral-200' placeholder='First Name' type="text" />
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] border-neutral-300 pl-4 text-white placeholder:text-neutral-200' type='text' placeholder="Last name" />
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] border-neutral-300 pl-4 text-white placeholder:text-neutral-200' type='text' placeholder="Mobile No." />
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] border-neutral-300 pl-4 text-white placeholder:text-neutral-200' type='text' placeholder="Alternate No." />
            <input className='w-[80%] h-[40px] rounded-lg border-[1px] border-neutral-300 pl-4 text-white placeholder:text-neutral-200' type='text' placeholder="Email" />
            <select  className='shrink-0 w-[80%] h-[40px] rounded-lg border-[1px] outline-blue-600 border-neutral-300 px-4 text-white placeholder:text-neutral-200' placeholder='email' type="text">
                <option disabled selected hidden value="">Gender</option>
                <option className='text-black' value="Male">Male</option>
                <option className='text-black'  value="Female">Female</option>
                <option className='text-black'  value="others">others</option>
            </select>       
        </div>
    </section>
  )
}

export default Owner
