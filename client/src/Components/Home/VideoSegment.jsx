import React from 'react'
import AnimatedSection from '../Utils/AnimatedSection'
import gif from '../../assets/gif01.gif'

const VideoSegment = () => {
  return (
    <div className="w-full shrink-0 h-screen flex flex-col ">
     <div className="relative w-full flex-1"> {/* Adjust height as needed */}
      <video
        className=" absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={'https://cdn.pixabay.com/video/2021/06/13/77510-563001938_large.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="  absolute top-0 left-0 right-0 w-full h-full bg-gray-950/30 flex items-center">
        <div className=" w-[30%] h-full flex flex-col justify-center items-end">
            <AnimatedSection index={1}>
                <p className='gloria-hallelujah-regular text-4xl text-white'>Connecting paws</p>
            </AnimatedSection>
            <AnimatedSection index={4}>
                <p className='gloria-hallelujah-regular text-7xl text-white font-extrabold'>With people!</p>
            </AnimatedSection>
        </div>
      </div>
    </div>
    <div className="w-full h-[120px] flex bg-gray-900">
      {
        Array.from({length:14},()=><img className='h-full w-auto' src={gif} alt="" />)
      }
      
    </div>
    </div>
  )
}

export default VideoSegment
