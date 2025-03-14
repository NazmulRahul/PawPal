import React from 'react'

const AdoptCardSegment = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-start pt-[5%]'>
      <div className="w-[60%] h-[35%] flex gap-[10px] justify-center">
        <div className="w-[18%] h-[90%] bg-blue-500 rounded-lg  self-start"></div>
        <div className="w-[18%] h-[90%] bg-blue-500 rounded-lg  self-end"></div>
        <div className="w-[18%] h-[90%] bg-blue-500 rounded-lg  self-start"></div>
        <div className="w-[18%] h-[90%] bg-blue-500 rounded-lg  self-end"></div>
        <div className="w-[18%] h-[90%] bg-blue-500 rounded-lg  self-start"></div>
      </div>
    </div>
  )
}

export default AdoptCardSegment;
