import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsCartCheck} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
const MobileView = ({handleIcon,active}) => {
  return (
    <>
    <ul className={active?"sm:hidden flex flex-col text-lg font-bold items-center fixed inset-0 justify-center left-1/4 gap-9 bg-black/10 backdrop-blur-2xl":"hidden"}> 

    {/* close-icon */}
    <li>
            <AiOutlineClose onClick={handleIcon} className='text-3xl font-bold transition duration-700 '/>
    </li> 
     
      <li className='hover:text-white transition duration-700 active:text-red-500 visited:font-extrabold'>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className='hover:text-white transition duration-700 active:text-red-500 visited:font-extrabold'>
        <NavLink to="product">Product</NavLink>
      </li>
      <li className='hover:text-white transition duration-700 active:text-red-500 visited:font-extrabold'>
        <NavLink to="about">About</NavLink>
      </li>
      <li className='hover:text-white transition duration-700 active:text-red-500 visited:font-extrabold'>
        <NavLink to="contact">Contact</NavLink>
      </li>
      <li className='hover:text-white transition duration-700 active:text-red-500 visited:font-extrabold'>
        <NavLink to="/cart" className="relative">
          <BsCartCheck className='text-3xl'/>
          <span className='absolute -top-3 left-3  w-6 h-6 bg-black grid place-content-center  text-white rounded-full '>0</span>
        </NavLink>
      </li>
    </ul>
</>
  )
}

export default MobileView
