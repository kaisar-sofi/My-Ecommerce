import React, { useEffect, useState } from 'react'

const ImageContainer = ({image =[{url:""}]}) => {
    const [img,setImge] = useState(image[0])
    const[myimage,setMyimage] =useState(true);
  useEffect(()=>{
    setImge("")
    // setImge(image[0])
  },[])
  return (
    <>
    <div className='flex flex-col-reverse sm:flex sm:flex-row  gap-4 place-items-center '>
        <div className='flex items-center sm:flex-col justify-center gap-3' >
            {
                image.map((imge)=>{
                      return(
                       
                         <img src={imge.url} key={imge.id} alt={imge.filename} className='w-12 h-12 rounded-full z-10 sm:w-28 sm:rounded-none sm:h-20 cursor-pointer mb-3 grayscale'
                            onClick={()=>{
                                setImge(imge)
                                setMyimage(false)
                                }}
                         />
                    
                        
                )
            })
            }
        </div> 
        
         <div>
         {
           myimage? (<img src={image[0].url} alt={image.filename} className='w-80' />):(<img src={img.url} alt={img.filename} className='w-80'/>)
         }
            
            
         </div>
    </div>


    </>
  )
}

export default ImageContainer
