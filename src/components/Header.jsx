import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {BsCartCheck} from "react-icons/bs"
import MobileView from './MobileView'
import {BiMenuAltRight} from "react-icons/bi"
import { Cartcontext } from '../context/Cartcontext'
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  const {total_item} = useContext(Cartcontext)
  const[active,setActive] =useState(false);

  function handleIcon(){
    setActive(!active);
  }
  return (
    <div className='w-full h-16  border-gray-300  bg-gray-200 flex justify-between  items-center p-4'>
      <NavLink to="/" className="font-extrabold tracking-wider border-[0.1rem] pl-2 pr-2 shadow-2xl border-black">KAISAR</NavLink>
     
      

      <nav>
              {/* toggle-icon */}
              <div className='sm:hidden'>
              <BiMenuAltRight onClick={handleIcon} className='text-4xl  font-bold transition duration-700 '/>
              </div>


            <ul className=' hidden sm:flex  gap-9 justify-center ml-5 text-xl'>
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
                  <BsCartCheck/>
                  <span className='absolute -top-3 left-3  w-6 h-6 bg-black grid place-content-center  text-white rounded-full '>{total_item}</span>
                </NavLink>
              </li>
            </ul>

            <MobileView handleIcon={handleIcon} active={active}/>

          
      </nav>



       
          

       
    </div>
  )
}

export default Header
