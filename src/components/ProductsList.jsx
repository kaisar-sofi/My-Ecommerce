import React, { useContext } from 'react'
import { AppContext } from '../context/ProductContext'
import Price from './helpers/Price'
import { NavLink } from 'react-router-dom'
const ProductsList = () => {
  const {filterproducts} = useContext(AppContext)

  if(filterproducts.length===0)
  {
    return (
      <div className='grid place-content-center text-3xl mt-11'>
           NO products available
      </div>
    )
  }
  
  return (
   <>
   <div>
 
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                        {
                            filterproducts.map((ele)=>{
                                return (
                                    <div key={ele.id} className=''>
                                    <NavLink to={`/singlepage/${ele.id}`}>

                                           

                                            <figure className='bg-white grid place-items-center relative rounded-md shadow-2xl hover:scale-105 transition duration-1000'>
                                              <img src={ele.image} alt={ele.name} className='w-[90%] hover:grayscale transition duration-1000 pt-2 pb-2 rounded-2xl' />
                                              <figcaption className='absolute bg-white/30 text-black font-semibold p-2 pl-3 top-4 left-[7%]  pr-3 rounded-xl h-fit'>{ele.category}</figcaption>
                                            </figure>

                                            <div className='flex justify-between p-2'>
                                            <p>{ele.name}</p>
                                            <p>{<Price price={ele.price}/>}</p>
                             
                                            </div>

                                    </NavLink>



                                    </div>
                                    
                                )
                            })
                        }
       </div>
   </div>
   </>
  )
}

export default ProductsList
