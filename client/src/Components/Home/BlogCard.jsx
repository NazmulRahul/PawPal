import React from 'react'
import AnimatedSection from '../Utils/AnimatedSection'

const BlogCard = () => {
  return (
    <div className="relative group w-[48%] h-[49%] overflow-hidden">
        <img className=' group-hover:scale-110 transition-transform duration-500 ease-in-out absolute w-full h-full object-cover' src="https://i.pinimg.com/236x/65/3c/40/653c4048217cebfefdb092121e7bea92.jpg" alt="" />
        <div className=" absolute group-hover:flex flex-col justify-end  hidden w-full h-full bg-neutral-950/30 items-end">
            <AnimatedSection isRepeated={true}>
                <p className='text-white w-full h-[65%] overflow-hidden'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur similique illo 
                    inventore ex illum voluptatum excepturi! Illum dolorem, cupiditate blanditiis assumenda 
                    deserunt quibusdam expedita atque recusandae reiciendis quae sapiente nam.
                </p>                
            </AnimatedSection>
        </div>
    </div>
  )
}
export default BlogCard
