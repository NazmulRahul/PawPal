import { getSpecificBlogs, setBlogTabIndex } from '@/Store/Blog'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const BlogSubLinks = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = (index)=>{
        const types = ['adoption','breeds', 'health and wellness', 'training','others']
        dispatch(setBlogTabIndex(index))
        dispatch(getSpecificBlogs({type:types[index-1]}))
        navigate('/blogs')
      }
  return (
    <div className="w-[40%] h-full  flex flex-col">
        <button onClick={()=>handleClick(1)} className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Adoption</p>
        </button>
        <button onClick={()=>handleClick(2)} className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Breeds</p>
        </button>
        <button onClick={()=>handleClick(3)} className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Health and Wellness</p>
        </button>
        <button onClick={()=>handleClick(4)} className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Training</p>
        </button>
        <button onClick={()=>handleClick(5)} className='cursor-pointer group w-full h-[40px] hover:bg-neutral-700 text-white text-sm flex items-center px-2 font-semibold'>
          <p className='group-hover:translate-x-2 transition-transform duration-300'>Other information</p>
        </button>
    </div>
  )
}

export default BlogSubLinks
