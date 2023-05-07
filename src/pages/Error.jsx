import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className='w-full'>
        <div className=' mx-auto w-[100%] max-w-6xl mt-10 pb-6  grid place-items-center'>

            <div className=' grid place-items-center gap-6'>
              <h3 className='font-bold text-5xl '>404</h3>
              <p className='text-2xl font-medium text-center'>OOOPS...Page not found</p>
              <p className='text-center break-words'>The page you are looking for does not exist.Click the Button below to go back to home</p>
             <NavLink to="/">
                <button class="inline-block px-5 py-2 w-fit text-white bg-blue-600 rounded-md hover:bg-blue-700 md:mx-0">
                              Home
                </button>  
             </NavLink>
            </div>
        </div>
      </div>
    </>
  )
}

export default Error
