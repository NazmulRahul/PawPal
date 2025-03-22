import React, { useEffect , useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isNavBgWhite, scrollY, setIsNavBgWhite, setScrollY } from '../Store/Utils'
import SwappableImage from '@/Components/AdoptionDetails/SwappableImage'
import PetDetailsInfo from '@/Components/AdoptionDetails/PetDetailsInfo'
import CommentSection from '@/Components/AdoptionDetails/CommentSection'
import UserInfo from '@/Components/AdoptionDetails/UserInfo'

const PetAdoptionDetails = () => {
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
    <div ref={scrollRef} onScroll={handleScroll} className="flex flex-col h-full w-full overflow-y-scroll scrollbar-hidden bg-[#fffae6] px-14">
      <SwappableImage/>
      <section className='grid grid-cols-2 gap-3 mt-10'>
        <div className='flex flex-col gap-4'>
          <PetDetailsInfo/>
          <UserInfo/>
        </div>
        <CommentSection/>
      </section>
    </div>
  )
}

export default PetAdoptionDetails