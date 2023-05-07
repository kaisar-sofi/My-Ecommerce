import React from 'react'
import { NavLink } from 'react-router-dom'


const Navigation = ({name}) => {
   
  return (
    <>
        <div className='w-full bg-gray-200 p-3 flex gap-1'>
                <NavLink to="/">
                <button className='text-blue-700 hover:text-black transition duration-700 cursor-pointer text-xl leading-6 flex  ' >Home/ </button>
                </NavLink>
            
                {name}
              
        </div>
    </>
  )
}

export default Navigation
