import React, { useState } from 'react'
import FilterSection from '../components/FilterSection'
import Sort from "../components/Sort"
import ProductsList from "../components/ProductsList"
import ListView from '../components/ListView'
import { useContext } from 'react'
import { AppContext } from '../context/ProductContext'
const Product = () => {
  const {handlesort} = useContext(AppContext)
  const[view,setView]= useState(true)
   function gridview(){
          setView(!view)
          console.log(view)
   }
  return (
  <>
    <div className='w-full'>
      <div  className=' mx-auto w-[100%] max-w-6xl mt-6  p-14'>

          <div className='grid  sm:grid-cols-[30%,1fr]'>
                {/* left-side-container */}
           <div>
           <FilterSection/>
           </div>

           {/* right-side-container */}
           <div className=''>
              {/* ist-row */}
              
                <Sort views={gridview} view={view} handlesort={handlesort}/>
                
              

              {/* 2nd-row */}
              <div className=''>
              {
                view ?<ProductsList/> :<ListView/>
              }
                
              </div>
           </div>
          </div>
       
      </div>
    </div>
  </>
  )
}

export default Product
