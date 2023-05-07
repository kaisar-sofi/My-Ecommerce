import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/ProductContext'
import {BsCheck} from "react-icons/bs"
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import {  toast } from 'react-hot-toast';
import { NavLink } from 'react-router-dom'
import { Cartcontext } from '../context/Cartcontext'

const Color = () => {
  const{singleproduct} = useContext(AppContext)
  // console.log(singleproduct)
  const{handleaddtocart} = useContext(Cartcontext)
  const result = Object.assign({},...singleproduct)
  const{id,colors,stock} = result
  const[mycolor,setMycolor]  = useState(colors[0])
  const [count,setCount] = useState(1)
 

 

  function handledecrease(){
    count>1 ?setCount(count-1): setCount(0)
    
  }
  function handleincrease()
  {
    count < stock ?setCount(count+1) : (toast.success(`only ${stock} available`))
  }
  return (
   <>
    <div className='grid gap-3'>
      <div className='flex gap-2  items-center'>
        <p>
          Available Colors:

          </p>
          <p>
          {
            colors.map((color,index)=>{
                        return <button  key={index} style={{backgroundColor:color}}
                        onClick={()=>setMycolor(color)}
                         className={mycolor ===color ? 'rounded-full w-5 h-5 outline-none cursor-pointer' :'rounded-full w-5 h-5 outline-none opacity-75  cursor-pointer'}>
                            {
                                mycolor== color ?(<BsCheck className=' text-yellow-700 text-xl '/>) :(null)
                            }
                        </button>
                        
            })
          }
          </p>
      </div>

      {/* increment&decrement functionality */}

            {/* <CountCart/> */}

            <div className='flex items-center gap-6'>
              <button onClick={handledecrease}><AiOutlineMinus className='text-xl'/></button>
              <p className='font-bold'>{count}</p>
              <button onClick={handleincrease}><AiOutlinePlus  className='text-xl'/></button>
            </div>

            <NavLink to="/cart"
            onClick={()=>{handleaddtocart(result,id,mycolor,count)}}>
            <button className='bg-blue-800 w-fit text-lg font-semibold pl-3 pt-2 pb-2 border-blue-900 border-b-2 hover:bg-blue-600 pr-3 text-white rounded-lg'>Add to Cart</button>
            </NavLink>
    </div>
   </>
  )
}

export default Color
