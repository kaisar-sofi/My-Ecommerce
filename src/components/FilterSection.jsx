import React, { useContext } from 'react'
import { AppContext } from '../context/ProductContext'
import {BsCheck} from "react-icons/bs"
import Price from "../components/helpers/Price"
const FilterSection = () => {
  const {filters:{text,category,color,maxprice,price,minprice},handleclearFilters,handlechange,all_products,handleSearch} = useContext(AppContext)
  // console.log(all_products)
  // console.log("filter-secton")
// console.log(category)

  const uniqueData =(data,property)=>{
        let res = data.map((ele)=>{
          return ele[property];
        })
        
        if(property === "colors")
        {
          // res = res.flat()
          return res = [...new Set([].concat(...res))]
        }
        else{
          return res =["All",...new Set(res)]
        }
       
       
        
  }
  const Mycategory = uniqueData(all_products,"category");
  const Mycompany = uniqueData(all_products,"company");
  const Mycolor = uniqueData (all_products,"colors")
  
// console.log(Mycolor)
// console.log(Mycategory)
// console.log(Mycompany)

  return (
   <>
   {/* grid sm:space-y-8 sm:grid-cols-1 grid-cols-3  */}
    <div>
      <div className='flex justify-between mb-4  items-center sm:grid sm:space-y-8'>

      {/* input-search */}
        <div className='hidden smm:block'>
          <form action="" onSubmit={(e)=>e.preventDefault()}>

            <input type="text" name='text' placeholder='Search'
            className='p-1 outline-[2px] border-2'
             value={text}
             onChange={handleSearch} />
          
          </form>
        </div>


        {/* category-field */}
        <div className='hidden sm:block'>
          <p>Category</p>
          <div>
            {
              Mycategory.map((ele,index)=>{
                return <button key={index} type='button'
                        value={ele}
                        name='category' className='flex flex-row hover:text-blue-800 active:text-blue-800 active:underline'
                        onClick={handleSearch}>
                {ele}
                </button>
              })
            }
          </div>
        </div>

            {/* company-field */}

            <div className=''>
                <select name="company" id="company" onClick={handlechange}
                className='outline-[2px] border-2'>

                  {
                    Mycompany.map((ele,index)=>{
                      return <option key={index} 
                      value={ele} name="company"
                      className='cursor-pointer'>
                      {ele}
                      </option>
                    })
                  }
                </select>
            </div>


            {/* color-field */}

            <div className='hidden sm:block'>
                    <p>Colors:</p>
                    
                    <div className='flex gap-1 items-center'>
                        <p className=' font-bold mr-1
                        '>All</p>
                  
                      { 
                        Mycolor.map((ele,index)=>{

                          return <button  key={index} style={{backgroundColor:ele}}
                          onClick={handleSearch}
                          value={ele}
                          name='color'
                         className={color ===ele ? 'rounded-full w-5 h-5  outline-none cursor-pointer' :'rounded-full w-5 h-5 outline-none opacity-75  cursor-pointer'}>
                           
                            {
                              
                                color== ele ?(<BsCheck className=' text-yellow-700 text-xl '/>) :(null)
                            }

                        </button>

                        })
                      }

                    </div>
                   
                    
            </div>


            {/* price-filltering-range */}

            <div  className='hidden  sm:block'>

                      <p className='hidden sm:block'>Price</p>
                      <p><Price price={price}/></p>

                      <input type="range"
                      name="price"
                      min={minprice}
                      max={maxprice}
                      value={price}
                      onChange={handlechange}
                      className='cursor-pointer'
                       />
                      
              
            </div>


            {/* clear-filter-button */}
            <div>

              <button
              onClick={handleclearFilters}
               className='p-2 rounded-sm transition duration-700 bg-blue-900 hover:bg-blue-600 text-white cursor-pointer'>
                Clear Filter
              </button>
            </div>
      </div>
    </div>
   </>
  )
}

export default FilterSection
