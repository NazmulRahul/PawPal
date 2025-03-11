import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { user } from '../Store/Auth'
import AnimatedSection from '../Components/Utils/AnimatedSection'

const Home = () => {

    // test store
    const currentUser = useSelector(user)
    useEffect(()=>{
        console.log(currentUser)
    })
    
  return (
    <div className='w-full h-full  bg-red-500 flex flex-col justify-center items-center'>
      <p className=' text-5xl'>home</p>
      <AnimatedSection>
        <p className='text-3xl'> first section</p>
      </AnimatedSection>
      <AnimatedSection>
        <p className='text-3xl'> second section</p>
      </AnimatedSection>
    </div>
  )
}

export default Home
