import React, { useContext } from 'react'
import { AppContext } from '../context/ProductContext'
import {NavLink} from "react-router-dom"
import Price from './helpers/Price'

const FeatureProducts = () => {
    const {featureproducts} = useContext(AppContext);
    // console.log(featureproducts)
  return (
    <>
        <div className='w-full  bg-gray-200'>

            <div className=' mx-auto w-[100%] max-w-6xl mt-6  grid p-14'>
                <div className=' grid gap-4 p-7 '>
                    <div>
                        <p className='text-blue-500 opacity-80'>Check Now!</p>
                        <p  className='text-xl font-semibold '>Our Feature Services</p>
                    </div>


                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                        {
                            featureproducts.map((ele)=>{
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
            </div>

        </div>
    </>
  )
}

export default FeatureProducts
