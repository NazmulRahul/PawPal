import React from 'react'
import BlogCard from './BlogCard'
import BlogSide from '../../assets/blogSide.png'

const BlogCardSegment = () => {
  return (
    <div className='w-full min-h-screen  flex justify-center bg-white'>
        <div className="w-[40%] h-full p-10 overflow-hidden">
            <img
                className="float-left w-[70%] h-auto object-contain rounded-md mr-4 mb-2"
                src={BlogSide}
                alt="Blog Image"
            />
        </div>

        <div className="w-[60%] h-full  flex justify-center items-center">
            <div className="w-[90%] h-[60%]  flex ">
                <div className="w-[70%] h-full flex flex-wrap gap-[10px]">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
                <div className="w-[30%] h-full bg-amber-800"></div>
            </div>
        </div>
        {/* <AnimatedSection index={1}>
            <div className="w-[100px] h-[100px] bg-black"></div>
        </AnimatedSection> */}
    </div>
  )
}

export default BlogCardSegment
