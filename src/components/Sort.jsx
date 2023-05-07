import React from 'react'
import { useContext } from 'react'
import {BsFillGridFill,BsListTask} from "react-icons/bs"
import { AppContext } from '../context/ProductContext'

const Sort = ({views,view,handlesort,}) => {
//  const{sortingvalues} = useContext(AppContext)
//  console.log(sortingvalues)
  return (
   <>
    <div className=' mb-3 '>
        <div className='flex justify-between'>

           <div className='flex gap-3 items-baseline'>
            {
              view ?   <BsListTask onClick={()=>{views()}} className='text-4xl cursor-pointer text-white bg-black p-1'/> 
              : <BsFillGridFill
                onClick={()=>{views()}}
              className='text-4xl cursor-pointer text-white bg-black p-1'/>
            }

{/*             
              <button
              onClick={()=>views(false)}>
                <BsFillGridFill className='text-4xl text-white'/>
              </button>
              <button
              onClick={()=>views(true)}>
                <BsListTask className='text-4xl text-white'/>
              </button> */}
             
            
            </div> 

            <div>
              Products
            </div> 


            <div>
              <form action="">
                <select
                 name="sort" id="sort" className='outline-[2px] border-2 cursor-pointer'
                 onClick={handlesort}>
                  <option value="lowest">Price lowest</option>
                  <option value="highest">Price Highest</option>
                  <option value="a-z">Price (a - z)</option>
                  <option value="z-a">Price (z - a)</option>
                </select>
              </form>
            </div>
        </div>
    </div>
   </>
  )
}

export default Sort


