import React from 'react'
import BlogCard from './BlogCard'

const BlogCardContainer = () => {
  return (
    <div className='w-full flex flex-wrap justify-center gap-x-[10px] gap-y-[310px]  mt-[70px]'>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
    </div>
  )
}

export default BlogCardContainer
