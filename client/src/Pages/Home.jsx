import React, { useEffect , useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isNavBgWhite, scrollY, setIsNavBgWhite, setScrollY } from '../Store/Utils'
import AnimatedSection from '../Components/Utils/AnimatedSection'
import VideoSegment from '../Components/Home/VideoSegment'
import BlogCardSegment from '../Components/Home/BlogCardSegment'

const Home = () => {

    const scrollRef =useRef(null)
    const dispatch = useDispatch();
    const currentScrollY = useSelector(scrollY);

    const handleScroll = ()=>{
      const scrollY = scrollRef.current.scrollTop;
      if(scrollY>currentScrollY ) dispatch(setIsNavBgWhite(true))
      else if(scrollY<currentScrollY) dispatch(setIsNavBgWhite(false))
      dispatch(setScrollY(scrollY))
    }
  return (
    <div ref={scrollRef} onScroll={handleScroll} className="flex flex-col h-full w-full overflow-y-scroll scrollbar-hidden">
      <VideoSegment/>
      <BlogCardSegment/>
    </div>
  )
}

export default Home
