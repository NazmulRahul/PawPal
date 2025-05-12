import React from 'react'
import Tiptap from './Tiptap'
import Blogs from './Blogs'

const CreateBlog = () => {
  return (
    <div className=' w-full h-screen overflow-y-scroll pt-[80px] flex gap-[5%] pr-[5%] justify-end items-start'>
                <Blogs/>
        <div className="w-[65%]  pt-[50px]  h-auto gap-4  pb-8 flex justify-start items-center ">
                <Tiptap/>
        </div> 
    </div>
  )
}

export default CreateBlog
