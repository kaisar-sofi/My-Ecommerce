import React, { useContext, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import { AppContext } from '../context/ProductContext'
import Navigation from '../components/Navigation'
import Price from "../components/helpers/Price"
import {FaTruckMoving} from "react-icons/fa"
import {SiGnuprivacyguard} from "react-icons/si"
import {TbReplaceFilled} from "react-icons/tb"
import ImageContainer from '../components/ImageContainer'
import Stars from '../components/Stars'
import  Color from "../components/Color"
const SinglePage = () => {

  const {getsingleprodcuct,singleproduct} = useContext(AppContext)
  // const location = useLocation()
  // const idd = location.pathname.slice(12);
  const {id} = useParams()

  const result = Object.assign({},...singleproduct)


  const {company,name,price,description,stock,stars,reviews,image} = result
 


  useEffect(()=>{
    getsingleprodcuct(id)
  },[getsingleprodcuct])
  
 
  return (
    <>
      <div className='w-full'>

          <Navigation name={name}/>
          <div className=' mx-auto w-[100%]  max-w-6xl mt-6 grid sm:grid-cols-2 p-14 gap-6'>
              
             
              {/* left-side-image-container */}
               <div className='grid'>
                 
                 <ImageContainer image={image}/>


              </div>

              {/* right-side-container */}
                <div className='grid gap-5'>

                    <p className='text-xl opacity-80 font-semibold'>{name}</p>
                    {/* star-component */}
                    <div>
                      <Stars star={stars} review={reviews}/>
                    </div>
                    
                    <p className='font-bold'>
                      MRP: <span className='line-through'>{<Price price={price+250000}/>}</span>
                    </p>

                    <p className='text-blue-800 font-semibold'>
                      Deal of the Day: <Price price={price}/>
                    </p>
                    <p className='  pr-[1.5rem] text-justify '>
                      {description}
                    </p>

                    {/* icons-div */}

                    <div className=' flex flex-wrap gap-4 justify-center items-center '>
                      <div className='flex flex-col items-center'>
                        <FaTruckMoving className='text-2xl'/>
                        <p>Free Delivery</p>
                      </div>

                      <div className='flex flex-col items-center'>
                        <SiGnuprivacyguard className='text-2xl'/>
                        <p>1 year Warranty</p>
                      </div>

                      <div className='flex flex-col items-center'>
                        <TbReplaceFilled className='text-2xl' />
                        <p>20 Days Replacement</p>
                      </div>
                    </div>

                    <p>
                      Available: <span className='font-bold'>{stock>0?"In Stock":"Not Available"}</span>
                    </p>

                      <p>Brand: <span className='font-bold'>{company}</span> </p>
                      <hr className=' bg-black/90 h-[2px]' />

                      {/* colors-of-items */}
                      <div>
                        {
                          stock > 0 && (<Color/>)
                        }
                      </div>


                </div>

          </div>
      </div>
    </>
  )
}

export default SinglePage
