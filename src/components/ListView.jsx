import React, { useContext } from 'react'
import { AppContext } from '../context/ProductContext'
import { NavLink } from 'react-router-dom'
import Price from './helpers/Price'
const ListView = () => {
    const {filterproducts} = useContext(AppContext)
    // console.log(products)
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

        <div>
                        {
                            filterproducts.map((ele)=>{
                                const {description} = ele
                                const subdescription = description.slice(0,147)
                            
                                return (
                                    <div key={ele.id} className=''>
                                    

                                           
                                        <div className='grid  p-8 gap-12 sm:grid-cols-2  border-black border-[1px] mb-4  transition duration-700'>

                                           <figure className=' bg-white  shadow-xl sm:shadow-none grid place-items-center hover:scale-105 transition duration-700 '>
                                              <img src={ele.image} alt={ele.name} className='w-[95%] mr-5 ml-5 mb-3 mt-3 rounded-lg ' />
                                            </figure>

                                            <div className='grid gap-6'>
                                                <div>
                                                <p className='font-semibold text-xl'>{ele.name}</p>
                                                </div>
                                                
                                                <div className=''>
                                                  <p>{<Price price={ele.price}/>}</p>
                                                  <p className='text-left mb-3'>
                                                     
                                                    {subdescription}...
                                                     
                                                  </p>
                                                  <NavLink to={`/singlepage/${ele.id}`}>
                                                        <button
                                                            className='bg-white text-blue-700 p-2 cursor-pointer hover:text-black hover:bg-slate-200 transition duration-700 font-semibold border-black border-[1px]'>Read More
                                                        </button>
                                                  </NavLink>
                                                </div>

                                               
                                           
                                            </div>
                                        
                                        </div>
                                           

                                   



                                    </div>
                                    
                                )
                            })
                        }
       </div>
        </div>
    </>
  )
}

export default ListView
