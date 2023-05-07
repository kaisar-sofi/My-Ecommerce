import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsCartCheck} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
import { useAuth0 } from "@auth0/auth0-react";
const MobileView = ({handleIcon,active}) => {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  return (
    <>
    <ul className={active?"sm:hidden flex flex-col text-lg font-bold items-center fixed z-30 inset-0 justify-center left-1/4 gap-9 bg-black/10 backdrop-blur-2xl":"hidden"}> 

    {/* close-icon */}
    <li>
            <AiOutlineClose onClick={handleIcon} className='text-3xl font-bold transition duration-700 '/>
    </li> 
     
      <li className='hover:text-blue-800 transition duration-700 active:text-red-500 visited:font-extrabold'>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className='hover:text-blue-800 transition duration-700 active:text-red-500 visited:font-extrabold'>
        <NavLink to="product">Product</NavLink>
      </li>
      <li className='hover:text-blue-800 transition duration-700 active:text-red-500 visited:font-extrabold'>
        <NavLink to="about">About</NavLink>
      </li>
      <li className='hover:text-blue-800 transition duration-700 active:text-red-500 visited:font-extrabold'>
        <NavLink to="contact">Contact</NavLink>
      </li>
      {/* {
                  isAuthenticated &&  <p className='text-base'>{user.name}</p>
       }
      {
                  isAuthenticated 
                  ? <li>
                  <button 
                  className='bg-blue-700 p-1 pl-2 pr-2 rounded-sm transition duration-700 cursor-pointer hover:bg-blue-400 hover:text-white'
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                 </button>
                 </li> 
                 :<li> 
                  <button 
                  className='bg-blue-700 p-1 pl-2 pr-2 rounded-sm transition duration-700 cursor-pointer hover:bg-blue-400 hover:text-white'
                  onClick={() => loginWithRedirect()}>Log In</button>
                  </li> 
              
                } */}


      <li className='hover:text-blue-800 transition duration-700 active:text-red-500 visited:font-extrabold'>
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
