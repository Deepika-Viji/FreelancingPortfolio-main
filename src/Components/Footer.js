import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-bg_black'>
            <div className='flex flex-col justify-center items-center mt-24'>
                <div className='text-orange tracking-spacewider text-custom-xlg font-bold font-sans'>Contact</div>
                <div className='text-4xl font-bold_650 tracking-normal mt-5 text-white'>I'd Love To Connect With You.</div>
                <div className='text-custom-xxlg text-grey mt-5 font-lora_regular'>Let me get to know more about you.</div>
            </div>

            <div className='flex md:flex-row sm:flex-col  justify-center gap-10 items-center '>
                <div className='flex flex-col mb-9 mt-20'>
                    <FaLocationArrow className='text-white text-3xl ml-16' />
                    <div className='text-orange font-bold text-xl'>Where to find me</div>
                    <div className='text-light_black w-1/2 ml-5'>531 Lasuen Mall
                        Stanford, CA
                        94305 US</div>
                </div>
                <div className='flex flex-col'>
                    <IoIosMail className='text-white text-5xl ml-14' />
                    <div className='text-orange font-bold text-xl ml-5'>Email Me At</div>
                    <div className='text-light_black w-1/2'>sunnybd97@gmail.com</div>
                </div>
                <div className='flex flex-col'>
                    <FaLinkedinIn className='text-white text-5xl ml-16' />
                    <div className='text-orange font-bold text-xl ml-5'>Let's Connect</div>
                    <div className='text-blue hover:text-light_black w-[600px] ml-7'><a href="https://www.linkedin.com/in/swkang73/">LinkedIn Profile</a></div>
                </div>

            </div>
        </div>
    )
}

export default Footer