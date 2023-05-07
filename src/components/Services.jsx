import React from 'react'
import {TbTruckDelivery} from "react-icons/tb"
import {GiReceiveMoney} from "react-icons/gi"
import {BiShieldQuarter} from "react-icons/bi"
import {RiSecurePaymentFill} from "react-icons/ri"
const Services = () => {
  return (
    <>
        <div className='w-full sm:mt-3 md:mt-11'> 
            <div className=' w-[100%] max-w-6xl mt-3  mx-auto'>


                    <div className=' grid sm:grid-cols-3  gap-12 mx-auto p-8 '>

                    {/* box-1 */}
                        <div className='h-56 grid place-content-center gap-3 p-5 bg-gray-200 rounded-lg  shadow-xl hover:scale-105 transition duration-700 cursor-pointer'>     
                           <div className='w-11 bg-white h-11 grid place-content-center rounded-full mx-auto'>
                           <TbTruckDelivery className='text-2xl text-blue-900'/>
                           </div>
                            <p>Super Fast and Free Delivery</p>
                        </div>

                        {/* box-2 */}
                        <div className='h-56 grid place-content-start-2 gap-7 '>
                            <div className='bg-gray-200 rounded-lg sm:p-4 flex cursor-pointer justify-center items-center gap-4 hover:scale-105 shadow-xl transition duration-700 ' >
                                <div className='w-11 bg-white h-11 grid place-content-center rounded-full '>
                                <GiReceiveMoney className='text-2xl text-blue-900'/>
                                </div>
                                <p>Money-back Guarantee</p>
                            </div>

                            <div  className='bg-gray-200 rounded-lg sm:p-4 cursor-pointer flex justify-center items-center hover:scale-105 shadow-xl transition duration-700  gap-4  ' >
                            <div className='w-11 bg-white h-11 grid place-content-center rounded-full '>
                            <BiShieldQuarter className='text-2xl text-blue-900'/>
                            </div>
                                <p>Non-contact Shipping</p>
                            </div>
                        </div>

                        {/* box-3 */}
                        <div className='h-56 grid place-content-center gap-3 p-5 bg-gray-200 rounded-lg  shadow-xl hover:scale-105 transition duration-700 cursor-pointer'>
                            <div className='w-11 bg-white h-11 grid place-content-center rounded-full mx-auto'>
                            <RiSecurePaymentFill className='text-2xl text-blue-900'/>
                            </div>
                            <p>Secure Payment System</p>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Services
