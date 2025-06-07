import React from 'react'
import pic from '../../../assets/Submit.png'
import { useSelector } from 'react-redux'
import { transportForm } from '@/Store/Transport'

const Submit = ({translate}) => {
    const currentTransportForm = useSelector(transportForm)
    const {owner, pet,travel, document, agency}=currentTransportForm;

    const handleSubmit = ()=>{
        const formData = new FormData();
        if(owner) formData.append('owner',JSON.stringify(owner));
        if(pet) formData.append('pet',JSON.stringify(pet));
        if(travel) formData.append('travel',JSON.stringify(travel));
        if(agency) formData.append('agency',JSON.stringify(agency));

        if(document){
            const {vacFront, vacBack, standing, sitting}=document

            if(vacFront) formData.append('vacFront',vacFront);
            if(vacBack) formData.append('vacBack',vacBack);
            if(standing) formData.append('standing',standing);
            if(sitting) formData.append('sitting',sitting);
        }
    }
  return (
    <section style={{transform:`translateX(${translate}%)`}} className=' text-white transition-transform duration-500 shrink-0 w-full h-full gap-[20px] rounded-4xl flex flex-col justify-center items-center'>
            <div className="w-60 h-60 object-cover flex justify-center items-center rounded-full shadow-lg border-4 border-purple-500">
                <img className='w-[110%] h-[155%] mb-[-10px] object-cover' src={pic} alt="" />
            </div>
            <button onClick={handleSubmit} 
             className="mt-6  tracking-widest px-[100px] py-1 text-lg cursor-pointer hover:text-white font-semibold text-black bg-purple-400 hover:bg-purple-600 rounded-full shadow-lg transition"
            ><span >CARRY ME</span></button>
    </section>
  )
}

export default Submit
