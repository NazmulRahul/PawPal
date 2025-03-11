import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { user } from '../Store/Auth'

const Home = () => {

    // test store
    const currentUser = useSelector(user)
    useEffect(()=>{
        console.log(currentUser)
    })
    
  return (
    <div className='w-full h-full bg-red-500 flex justify-center items-center'>
      <p className=' text-5xl'>home</p>
    </div>
  )
}

export default Home
