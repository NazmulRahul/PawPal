import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';



const SignUp = () => {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center gap-3 bg-neutral-900 text-white shadow-lg shadow-neutral-800'>
        <p className='text-4xl font-extrabold '>Create Account</p>
          <div className="w-[30%] h-[50px]  flex justify-between items-center">
            <div className="h-[40px] w-[40px] rounded-full bg-neutral-700 shadow-md shadow-neutral-500 flex justify-center items-center">
              <FontAwesomeIcon icon={faFacebook} style={{color:'white', height:'20px'}} />
            </div>
            <div className="h-[40px] w-[40px] rounded-full bg-neutral-700 shadow-md shadow-neutral-500 flex justify-center items-center">
              <FontAwesomeIcon icon={faGoogle} style={{color:'white', height:'20px'}} />
            </div>
            <div className="h-[40px] w-[40px] rounded-full bg-neutral-700 shadow-md shadow-neutral-500 flex justify-center items-center">
              <FontAwesomeIcon icon={faLinkedin} style={{color:'white', height:'20px'}} />
            </div>
          </div>
          <p className=' text-lg font-semibold'>or use your email for registration</p>
          <div className="w-[70%] h-auto">
            <input 
            placeholder='Name'
            type="text" 
            className='w-full  outline-none h-[45px] rounded-lg bg-neutral-700  placeholder:text-neutral-400 text-[14px] font-semibold pl-[10px]'
            />
            <input 
            placeholder='Email'
            type="text" 
            className='w-full mt-3  outline-none h-[45px] rounded-lg bg-neutral-700  placeholder:text-neutral-400 text-[14px] font-semibold pl-[10px]'
            />
            <div className="flex w-full h-[45px] rounded-lg bg-neutral-700 mt-3 px-[10px]">
              <input 
              placeholder='Password'
              type={"text"} 
              className='flex-1  h-[45px] rounded-lg outline-none   placeholder:text-neutral-400 text-[14px] font-semibold  '
              />
            </div>
          </div>
            <button className='gradient-shiny-button'>
                <span className='text-[12px]'>Sign UP</span>
            </button>
      </div>
    )
}

export default SignUp
