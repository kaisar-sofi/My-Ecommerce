import React, { useContext } from 'react'
import { Cartcontext } from '../context/Cartcontext'
import AddCart from '../components/AddCart'
import { NavLink } from 'react-router-dom'
import Price from '../components/helpers/Price'
const Cart = () => {

  const {cart,handleclearcart,total_amount, shipping} = useContext(Cartcontext)
  // console.log(cart)

  if(cart.length===0)
  {
    return <div className='grid place-content-center gap-6 mt-[10%]'>
             <div className=' p-14 text-5xl font-semibold'>
              NO items in the cart
              </div>

            <div className=' mx-auto'>
            <NavLink to="/product">
              <button className='p-3 rounded-lg bg-blue-700 hover:text-white transition duration-700 hover:bg-blue-500  border-[2px]'>Continue Shopping</button>
            </NavLink>
          </div>
        </div>
 
  }

  return (
   <>
    <div className='w-full'>
      <div className=' mx-auto w-[100%] max-w-6xl mt-6 flex flex-col  p-14'>

        <div className='grid grid-cols-3 md:grid-cols-5  place-items-center'>

            {/* ist-div */}
              <div>
                 <p>Item</p>
              </div>

              {/* 2nd-div */}
              <div className='hidden md:block'>
                <p>Price</p>
              </div>

              {/* 3rd-div */}
              <div>
                <p>Quantity</p>
              </div>

              {/* 4th-div */}
              <div className='hidden md:block'>
                <p>Subtotal</p>
              </div>

              {/* 5th-div */}
              <div>
                Remove
              </div>
        </div>

        <hr className='bg-black/10 
         w-[90%] mx-auto' />


        {/* cart-items */}
         <div>
          {
            cart.map((ele)=>{
              return<AddCart key={ele.id}{...ele}/>
            })
          }
         </div>
            
            
        <hr className='bg-black/10 mt-3
         w-[90%] mx-auto' />


        {/* clear-item-button */}
        <div className='mt-6  flex justify-center items-center sm:justify-between sm:items-center'>
          
            <NavLink to="/product">
              <button className='p-2 w-fit rounded-lg mx-auto bg-blue-700 hover:text-white transition duration-700 hover:bg-blue-500  border-[2px]'>Continue Shopping</button>
            </NavLink>
        

          
          <button
          onClick={handleclearcart}
           className='p-2 hidden sm:block pr-6 pl-6 w-fit rounded-lg hover:text-white bg-blue-700 transition duration-700 hover:bg-blue-500  border-[2px]'>Clear Cart</button>
          
        </div>


        {/* sub-total-div */}

        <div className='mt-6 grid  place-content-center sm:place-content-end'>
        <div className='bg-gray-200 space-y-2 p-7 rounded-lg'>
            <div className='flex gap-3'>
                <p>Subtotal:</p>
                <p><Price price={total_amount}/></p>
              </div>
              <div className='flex gap-3'>
                <p>Shipping Fee:</p>
                <p><Price price={shipping}/></p>

              </div>
             
              <div className='flex gap-3'>
                <p>Total:</p>
                <p><Price price={total_amount+shipping}/></p>
              </div>
        </div>
          
        </div>
      </div>
    </div>
   </>
  )
}

export default Cart
