import React from 'react'
import {FaStar,FaStarHalfAlt} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"
const Stars = ({star,review}) => {
  const rating=  Array.from({length:5},(elem,index)=>{
        let number = index+ 0.5;
                        
        return(
            <span>
                {star>= index+1 ? (<FaStar className='text-xl text-orange-600'/>)
                : star >=number ? (<FaStarHalfAlt className='text-xl text-orange-600'/>)
                :(<AiOutlineStar className='text-xl text-orange-600 translate-y-[1px]'/>)
                }
            </span>
        )
  })
 
    
    return (
        <>
            <div className='flex items-center gap-1'>
                    <div className='flex gap-2 items-center'>
                        {rating}
                    </div>
                
                <p>({review} reviews)</p>
            </div>
        </>
    )
   
  
}

export default Stars
