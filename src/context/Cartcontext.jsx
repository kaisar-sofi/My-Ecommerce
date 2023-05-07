import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/Cartreducer"
// import { json } from "react-router-dom";
import { toast } from "react-hot-toast";




export const Cartcontext = createContext()

function Mycartcontext ({children}){
    const getlocalcartdata=()=>{
       let cartdata= localStorage.getItem("cartitem")
       if(cartdata===[])
       {
        return[]
       }
       else{
        return JSON.parse(cartdata)
       }
    }
    const initialstate = {
            cart:getlocalcartdata(),
            // cart : [],
            total_item :"",
            total_amount: "",
            shipping :4000,
    }
    const [state,dispatch] = useReducer(reducer,initialstate)

    // function for adding item in cart
    const handleaddtocart =(result,id,mycolor,count)=>{
      
            dispatch ({type:"ADD-TO-CART",payload:{result,id,mycolor,count}})
            toast.success("Item added")
    }


        // function for delete item from cart using id
    const handledeletecart =(id)=>{
        dispatch({type:"DELETE-ITEM",payload:id})
        toast.success("Item removed")
    }

// storing data in localStorage
        useEffect(()=>{
            dispatch({type:"UPDATE-CART-VALUE"})
            dispatch({type:"SUBTOTAL"})
            localStorage.setItem("cartitem",JSON.stringify(state.cart))
        },[state.cart])


    // function for clearing the cart
    const handleclearcart =()=>{
        
        dispatch({type:"CLEAR-CART"})
        toast.success("Items cleared")
    }

    return <Cartcontext.Provider value={{...state, handleaddtocart,handledeletecart,handleclearcart}}>
        {children}
    </Cartcontext.Provider>
}

export default Mycartcontext