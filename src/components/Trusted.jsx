import React from 'react'
import {AiFillAmazonCircle} from "react-icons/ai"
import {FaAtlassian} from "react-icons/fa"
import {BsMeta} from "react-icons/bs"
import {FiFacebook} from "react-icons/fi"
const Trusted = () => {
  return (
    <>
      <div className='w-full sm:mt-3 md:mt-11 bg-gray-200'>

          <div className=' w-[100%] max-w-6xl mt-3  mx-auto'>

              <div className=' grid  p-8 gap-6'>
                <h3 className='font-bold text-center text-lg opacity-90'>Trusted By 10000+ Companies</h3>

                <div className='grid grid-cols-2 sm:grid-cols-4 gap-10'>
                {/* 1st-icon */}
                  <div className='flex items-center gap-1 justify-center grayscale'>
                    <AiFillAmazonCircle className='text-4xl'/>
                    <p className='font-bold'>Amazon</p>
                  </div>

                  {/* 2nd-icon */}
                  <div  className='flex items-center gap-1 justify-center grayscale'>
                    <FaAtlassian className='text-4xl'/>
                    <p className='font-bold'>Atlassian</p>
                  </div>

                  {/* 3rd-icon */}

                  <div className='flex items-center gap-1 justify-center grayscale'>
                    <BsMeta className='text-4xl'/>
                    <p className='font-bold'>Meta</p>
                  </div>

                  {/* 4th-icon */}
                  <div  className='flex items-center gap-1 justify-center grayscale'>
                    <FiFacebook className='text-4xl'/>
                    <p className='font-bold'>Facebook</p>
                  </div>

                </div>
              </div>
          </div>

      </div>
    </>
  )
}

export default Trusted
