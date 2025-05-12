import React from 'react'

const BlogCard = () => {
  return (
            <div className="w-[400px] h-[280px] relative">
                <img className='w-full h-full object-cover bg-black' src="https://i.pinimg.com/736x/3e/09/91/3e0991b4ef981c92b1d8d05bde7ccdcf.jpg" alt="" />
                    <div className="absolute w-[350px] h-[350px] bg-[#EBDACB] right-[7%] top-[80%] p-[3%]">
                        <div className="w-full h-full  flex flex-col justify-start items-start border-[2px] p-[10px] border-neutral-100">
                            <p className='tracking-wide font-mono text-3xl h-[48%] w-full overflow-hidden text-yellow-900'>Hola! wanna express your thoughts? Start writing now... he he hee he ehe eeell </p>
                            <p className='w-[85%] h-[28%] font-sans text-neutral-600 mt-[10px] overflow-hidden text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita ab quaerat illo quia consequatur nostrum corporis vero odio rem. At ducimus numquam nisi fugit earum, sunt cum fuga itaque?</p>
                            <button className='self-center w-[150px] h-[30px] bg-[#BFA181] hover:bg-white border-[1px] border-[#BFA181] cursor-pointer mt-[7px] ml-[-10%] group'>
                                <p className='text-white tracking-widest text-sm font-semibold group-hover:text-[#BFA181]'>VIEW POST</p>
                            </button>
                        </div>
                    </div>
            </div>
  )
}

export default BlogCard
