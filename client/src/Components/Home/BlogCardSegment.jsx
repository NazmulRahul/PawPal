import React from 'react'
import BlogCard from './BlogCard'
import BlogSide from '../../assets/blogSide.png'
import AnimatedSection from '../Utils/AnimatedSection'

const BlogCardSegment = () => {
  return (
    <div className='w-full h-auto flex justify-center '>
        <div className="w-[40%] h-full flex flex-col p-10 overflow-hidden">
            <AnimatedSection index={3} fromLeft={true}>
                <img
                    className="float-left w-[70%] h-auto object-contain rounded-md mr-4 mb-2"
                    src={BlogSide}
                    alt="Blog Image"
                />
            </AnimatedSection>
            <AnimatedSection index={3}>
                <div class="w-full h-auto flex flex-col gap-[10px] gloria-hallelujah-regular monitor:text-6xl laptop:text-2xl">
                    <h1 className='text-xl font-bold '>A New Beginning with PawPal</h1>
                    <p className=''>Lena had always wanted a dog. But with her busy job and a small apartment, she never felt ready—until she found <strong>PawPal</strong>.</p>
                    <p className=''>One evening, while scrolling through pet adoption listings, she saw him—<strong>Benny</strong>, a golden retriever with warm, soulful eyes.
                    His profile said he had been waiting months for a home. Without hesitation, Lena clicked <strong>“Adopt”</strong>.</p>
                    <p className=''>The next morning, PawPal’s <strong>pet transportation</strong> 
                        service brought Benny straight to her doorstep. As soon as he stepped out of the cozy travel crate, 
                        his tail wagged furiously, and Lena knew she had made the right choice.</p>
                    <p className=''>Days turned into weeks, and Benny became her best friend. They explored parks, shared lazy Sundays,
                        and even celebrated small victories together—like when Benny finally learned to sit on command. But one evening,
                        Benny seemed off. He was sluggish and refused his favorite treat. Worried, Lena used the <strong>PawPal pet medicine service</strong> 
                        to get expert advice. Within minutes, a vet recommended the right care, and soon, Benny was back to his playful self.</p>
                    <p className=''>Looking at him curled up beside her, Lena smiled. Thanks to PawPal, she didn’t just find a pet—she found family.</p>
                </div>
                
            </AnimatedSection>
        </div>

        <div className="w-[60%]  h-full  flex justify-center items-center">
            <div className="flex w-[90%] h-[40%] mid-laptop:h-[30%] monitor-h-[50%]">
                <div className="w-[70%] h-full flex flex-wrap gap-[10px]">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
                <div className="w-[30%] h-full  relative">
                    <div className="inset-0 absolute">
                        <video 
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='top-0 left-0 right-0 bottom-0 h-full w-full relative'>
                            <source src='https://cdn.pixabay.com/video/2022/07/25/125485-733802512_large.mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
        {/* <AnimatedSection index={1}>
            <div className="w-[100px] h-[100px] bg-black"></div>
        </AnimatedSection> */}
    </div>
  )
}

export default BlogCardSegment
