import { blog, setBlog } from '@/Store/Blog'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogShow from './BlogShow'
import test from '../../data/test'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const BlogShowContainer = () => {
    const currentBlog = useSelector(blog);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleExit = ()=>{
        dispatch(setBlog(null));
    }
    const handleGoHome = ()=>{
        navigate('/')
        dispatch(setBlog(null));
    }
  return (
    <div className={` ${currentBlog?'flex':'hidden'} fixed justify-center px-[12%] items-start top-0 bottom-0 left-0 right-0 backdrop-blur-xl z-50 overflow-y-scroll`}>
        <button onClick={handleExit} className=" font-extralight fixed z-[60] right-10 top-4 text-red-600 text-3xl cursor-pointer">
            <FontAwesomeIcon icon="fas fa-times" />
        </button>
        <div onClick={handleGoHome} className="fixed z-[60] left-10 top-4  cursor-pointer">
            <div className="w-[50px] h-[50px]">
                <img src={logo} className='w-full h-full object-contain' alt="" />
            </div>
        </div>
        <div className="w-full min-h-full pt-[60px] px-[3%] bg-white/50">
            {currentBlog && <BlogShow doc={currentBlog}/>}
        </div>
    </div>
  )
}

export default BlogShowContainer
