import React from 'react'
import AnimatedSection from '../Utils/AnimatedSection'

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
        <source src={'https://res.cloudinary.com/dz4jwmv4k/video/upload/v1733845602/samples/cld-sample-video.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="  absolute top-0 left-0 right-0 w-full h-full bg-gray-950/30 flex items-center">
        <div className=" w-[30%] h-full flex flex-col justify-center items-end">
            <AnimatedSection index={1}>
                <p className='cherry-bomb-one-regular text-5xl text-white'>Connecting paws</p>
            </AnimatedSection>
            <AnimatedSection index={4}>
                <p className='cherry-bomb-one-regular text-7xl text-white'>with people!</p>
            </AnimatedSection>
        </div>
      </div>
    </div>
    <div className="w-full h-[120px] bg-red-950"></div>
    </div>
  )
}

export default VideoSegment
