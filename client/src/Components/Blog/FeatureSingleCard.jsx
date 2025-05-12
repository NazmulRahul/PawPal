import React from 'react'

const FeatureSingleCard = ({translate}) => {
  return (
    <div style={{transform: `translateX(${-translate*100}%)`}} className="w-[350px] h-[280px] shrink-0 relative transition-transform duration-1000">
        <img className='w-full h-full object-cover bg-black' src="https://i.pinimg.com/736x/3e/09/91/3e0991b4ef981c92b1d8d05bde7ccdcf.jpg" alt="" />
            <div className="absolute w-[320px] h-[180px] bg-[#EBDACB] right-[4%] top-[80%] p-[3%]">
                <div className="w-full h-full  flex flex-col justify-start items-start">
                    <p className='tracking-wide font-mono text-md mb-[10px] w-full overflow-hidden text-yellow-900'>FEATURE POST</p>
                    <p className='tracking-wide font-mono text-xl h-[39%] w-full overflow-hidden text-yellow-900'>Hola! wanna express your thoughts? Start writing now... he he hee he ehe eeell </p>
                    <button className='self-center w-[150px] h-[30px] bg-[#BFA181] hover:bg-white border-[1px] border-[#BFA181] cursor-pointer mt-[20px] ml-[-10%] group'>
                        <p className='text-white tracking-widest text-sm font-semibold group-hover:text-[#BFA181]'>VIEW POST</p>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default FeatureSingleCard
