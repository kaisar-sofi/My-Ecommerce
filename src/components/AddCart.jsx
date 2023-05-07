import React, { useContext } from 'react'
import Price from "./helpers/Price"
import {AiTwotoneDelete} from "react-icons/ai"
import { Cartcontext } from '../context/Cartcontext'

const AddCart = ({id,name,mycolor,image,price,count}) => {
    const {handledeletecart} =useContext(Cartcontext)
  return (
    <>
        <div className='mt-6'>
            <div className='grid grid-cols-3 md:grid-cols-5  place-items-center'>
                {/* ist-div */}
                <div className='grid smm:grid-cols-2 sm:grid-cols-2 gap-3 place-items-center'>
                <figure className='bg-white grid place-items-center relative rounded-md hover:scale-105 transition duration-1000'>
                        <img src={image} alt="" className='w-[60%] hover:grayscale transition duration-1000 pt-2 pb-2'/>
                </figure>
                    
                    <div className=''>
                   
                   <p>
                     {name}
                   </p>
                       
                        <div className=' flex items-center gap-1'>

                            <p>Color:</p>
                            <div style={{backgroundColor:mycolor}} className='w-5 h-5 rounded-full'></div>
                        </div>
                    </div>
                </div>

                {/* 2nd-div */}
                <div className='hidden md:block'>
                    <Price price={price}/>
                </div>

                {/* 3rd-div */}
                <div>
                    {count}
                </div>

                {/* 4th-div */}
                <div className='hidden md:block'>
                    <p><Price price={price*count}/></p>
                </div>

                {/* 5th-div */}
                <div>
                        <AiTwotoneDelete className='text-2xl cursor-pointer text-gray-700 transition duration-700 hover:text-red-800'
                            onClick={()=>handledeletecart(id)}
                        />
                </div>
            </div>
        </div>
    </>
  )
}

export default AddCart
