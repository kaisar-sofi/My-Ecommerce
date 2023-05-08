import React from 'react'
import {BsFacebook} from "react-icons/bs" 
import {BsInstagram} from "react-icons/bs"
import {AiOutlineYoutube} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineMail,AiOutlineCopyright,AiOutlineArrowRight} from "react-icons/ai"
import {IoMdCall} from "react-icons/io"
const Footer = () => {
  return (
   <>
    <div className='w-full bg-black/90 relative'>
        <div className=' mx-auto w-[100%] max-w-6xl mt-32 bg-yellow '>
                
                <div className='bg-gray-200 w-[70%] mx-auto  sm:w-[90%]  rounded-xl flex flex-col gap-4 sm:flex-row sm:gap-0 justify-around items-center p-5 -translate-y-10'>
                    <div>
                        <p>Ready to get started? <br />Talk to us today</p>
                    </div>
                    <div>
                        <button className="flex justify-center items-center gap-3 w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
                        Get Started
                        <AiOutlineArrowRight className='text-2xl'/>
                        </button>
                    </div>
                </div>

                {/* 2nd-box */}
                <div className='text-white grid grid-cols-1 gap-11 sm:gap-5  md:grid-cols-4 sm:grid-cols-2 place-items-start sm:place-items-center sm:items-baseline p-4'>
                    <div className=' whitespace-break-spaces space-y-3'>
                        <p>My Ecom Store</p>
                        <p>Lorem ipsum dolor,sit amet <br />consectetur adipisicing elit</p>
                    </div>

                    <div className='flex flex-col gap-3 '>
                        <p>SIGN UP TO OUR NEWSLETTER</p>
                        <input type="text" placeholder='Email' className='p-1 text-black focus:outline rounded-md outline-none focus:border-black' />
                        <button className="flex justify-center items-center gap-3 px-5 py-2 w-fit text-white bg-blue-600 rounded-md hover:bg-blue-700 md:mx-0">
                            Subscribe
                            <AiOutlineArrowRight className='text-2xl'/>
                        </button>  
                    </div>

                    <div className='space-y-3'>
                        <p>Follow Us</p>
                        <div className=' flex gap-6'>
                        
                            <div className='w-9 h-9  grid place-content-center rounded-full border-white border-2'>
                                <BsFacebook className='text-white text-lg cursor-pointer hover:scale-125 transition duration-500 '/>
                            </div>

                            <div className='w-9 h-9  grid place-content-center  rounded-full border-white border-2'>
                                <BsInstagram className='text-white text-lg  cursor-pointer hover:scale-125 transition duration-500 '/>
                            </div>
                            
                            <div className='w-9 h-9  grid place-content-center rounded-full border-white border-2'>
                                <AiOutlineYoutube className='text-white text-lg  cursor-pointer hover:scale-125 transition duration-500 '/>
                            </div>
                            
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <p>Contact</p>
                        <div className='flex gap-1'>
                            <AiOutlineHome className='text-lg'/>
                            <p>JK,TY 196788,INDIA</p>
                        </div>

                        <div className='flex gap-1'>
                            <AiOutlineMail className='text-lg'/>
                            <p>info@gmail.com</p>
                        </div>

                        <div className='flex gap-1'>
                            <IoMdCall className='text-lg'/>
                            <p>+91-8898766000</p>
                        </div>
                       
                    </div>
                </div>               
        </div>
        {/* closing tag of middle section */}

        {/* hr-line */}
        <div className='w-full h-1 mt-4 bg-white'> </div>


        <div className='mt-5 text-white flex  items-center justify-center pb-4'>
        
            <AiOutlineCopyright className='text-xl text-white '/>
            <p>{new Date().getFullYear()} Kaisar.</p>
            <p>All Rights Reserved...</p>
        </div>
    </div>
    

    
   </>
  )
}

export default Footer
