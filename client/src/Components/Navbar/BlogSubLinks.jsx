import { setBlogTabIndex } from '@/Store/Blog'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const BlogSubLinks = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="w-[40%] h-full  flex flex-col">
        <button onClick={()=>{dispatch(setBlogTabIndex(1)); navigate('/blog')}} className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Adoption</p>
        </button>
        <button onClick={()=>{dispatch(setBlogTabIndex(2)); navigate('/blog')}} className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Breeds</p>
        </button>
        <button onClick={()=>{dispatch(setBlogTabIndex(3)); navigate('/blog')}} className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Health and Wellness</p>
        </button>
        <button onClick={()=>{dispatch(setBlogTabIndex(4)); navigate('/blog')}} className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Training</p>
        </button>
        <button onClick={()=>{dispatch(setBlogTabIndex(5)); navigate('/blog')}} className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Other information</p>
        </button>
    </div>
  )
}

export default BlogSubLinks
