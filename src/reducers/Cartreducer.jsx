
const Cartreducer = (state,action)=>{

    switch(action.type)
    {
        case "ADD-TO-CART":
            let {id,count,mycolor,result} =action.payload
                let tempproduct;
                let existingproduct= state.cart.find((ele)=>{
                    return ele.id === id+mycolor
                })


                if(existingproduct)
                {
                        let updateproduct = state.cart.map((ele)=>{
                            if(ele.id=== id+mycolor)
                            {
                                let updatedcount = ele.count +count;
                                if(updatedcount>=ele.max)
                                {
                                    updatedcount = ele.max
                                }
                                return{
                                    ...ele,
                                    count:updatedcount
                                }
                            }
                            else{
                                return ele
                            }
                           
                        })
                        return{
                            ...state,
                            cart: updateproduct
                        }
                }
                else{
                     tempproduct={
                        id: id + mycolor,
                        name: result.name,
                        mycolor,
                        count,
                        image:result.image[0].url,
                        price:result.price,
                        max : result.stock,
                    }
                }

            

          
            return{
                ...state,
                cart:[...state.cart,tempproduct]
            }

            case "DELETE-ITEM":
               let updatedcart = state.cart.filter((ele)=>{
                            return ele.id !== action.payload
               })
                return {
                    ...state,
                    cart:updatedcart
                }

                case "CLEAR-CART":
                    return{
                        ...state,
                        cart:[]
                    }

                    case "UPDATE-CART-VALUE":
                        let carttotalvalue = state.cart.reduce((accum,currentvalue)=>{
                                let {count} = currentvalue;

                                accum = accum+count;
                                return accum;
                        },0)

                        return {
                            ...state,
                            total_item: carttotalvalue
                        }

                        case "SUBTOTAL":
                            
                            let total_price= state.cart.reduce((accum,curr)=>{
                                let  {price,count}= curr;
                                accum = accum+ (price*count)
                                return accum
                            },0)
                            return {
                                ...state,
                                total_amount:total_price
                            }
        default:
            return state
    }
}
export default Cartreducer