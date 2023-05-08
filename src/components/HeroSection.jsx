import React from 'react'
import { NavLink } from 'react-router-dom'
import image from "../assets/hero-section.jpg"
import {MdOutlineShoppingCart} from "react-icons/md"
const HeroSection = ({data}) => {
  return (
    <div className='w-full'>

       <div className=' mx-auto w-[100%] max-w-6xl mt-3'>
          <div className='grid grid-cols-1 gap-8 sm:gap-24 sm:grid-cols-2  sm:p-10 p-5 '>
                <div className='flex flex-col gap-2 mt-6 sm:p-12 sm:mt-0 '>
                   <div>
                   <p className='uppercase text-lg text-blue-600  '>
                        Welcome to
                    </p>
                    <h1 className='text-4xl text-opacity-50 font-bold mb-4'>{data.name}</h1>
                   </div>
                   

                    <p className='text-gray-500 break-all mb-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing 
                        elit. Animi odit minima quos, omnis vitae deleniti 
                        odio enim pariatur. Consequuntur nam natus saepe eaque
                         molestias modi,
                    </p>
                    <NavLink to="/product">
                    <button type="button" className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                       <MdOutlineShoppingCart className='text-3xl'/>
                        Buy now
                    </button>
                    </NavLink>
                </div>

                {/* Image */}

                <div className='sm:p-2 w-full  mt-6 sm:mt-0 grid place-items-center sm:shadow-none
                 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
                 md:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                
                   <figure >
                            <img src={image} alt="kaisar" loading='lazy' className='h-80 rounded-md' />
                    </figure>
                   
                </div>


          </div>
       </div>
    </div>
  )
}

export default HeroSection
