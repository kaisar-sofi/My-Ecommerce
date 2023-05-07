const ProductReducer =(state,action)=>{


    switch(action.type)
    {
        case "MY_PRODUCTS":
            const featuredata =action.payload.filter((element)=>{
                return element.featured ===true;
           })
    
           return{...state,
            products: action.payload,
            featureproducts :featuredata,
        }
        
            case "SINGLE-PRODUCT":
                return{
                    ...state,
                    singleproduct:action.payload
                }
                

                case "Sorting-values":
                    return{
                        ...state,
                        sortingvalues:action.payload,
                    }

                  
                    case "filterproducts":

                    // max-price for price-filltering
                    let PriceArr = action.payload.map((ele)=>ele.price)
                    // console.log(PriceArr)
                    // let min = Math.min(...PriceArr)
                    let maxprice = Math.max(...PriceArr)
                    // console.log(max)

                    // data-for-sorting
                    let sorteddata;
                    let tempdata = [...action.payload]
                    if(state.sortingvalues ==="a-z")
                    {
                        sorteddata = tempdata.sort((a,b)=>
                        {
                           return a.name.localeCompare(b.name);
                        })
                        return {
                            ...state,
                            filterproducts : sorteddata,
                        }
                    }

                    else if(state.sortingvalues ==="z-a") {

                        sorteddata = tempdata.sort((a,b)=>
                        {
                           return b.name.localeCompare(a.name);
                        })
                        return {
                            ...state,
                            filterproducts : sorteddata,
                        }
                    }

                    else if(state.sortingvalues ==="lowest") {

                        sorteddata = tempdata.sort((a,b)=>
                        {
                           return a.price - b.price;
                        })
                        return {
                            ...state,
                            filterproducts : sorteddata,
                        }
                    }
                   
                    else if(state.sortingvalues ==="highest") {

                        sorteddata = tempdata.sort((a,b)=>
                        {
                           return b.price - a.price;
                        })
                        return {
                            ...state,
                            filterproducts : sorteddata,
                        }
                    }
                   
                    else {
                        return {
                            ...state,
                            filterproducts :[...action.payload],
                            all_products:[...action.payload],
                            filters :{...state.filters,maxprice,price:maxprice}
                            
                        }
                       
                    }

                    case "Update-filter-value":
                        const {name,value} = action.payload;
                        return{
                            ...state,
                            filters:{
                                ...state.filters,[name]:value
                            },
                        }

                        case "filtersearchproducts":
                            let {all_products} = state;
                            // console.log(all_products)
                            let temp_products = [...all_products]

                            

                            const{text,category,company,color,price} =state.filters
                            if(text){
                                temp_products = temp_products.filter((ele)=>{
                                    return ele.name.toLowerCase().includes(text);
                                })
                            }

                            if(category !=="All")
                            {
                                temp_products=temp_products.filter((ele)=>{
                                    return ele.category === category
                                })
                             
                            }
                            

                            if(company !=="All")
                            {
                                temp_products = temp_products.filter((ele)=>{
                                    return ele.company.toLowerCase() ===company.toLowerCase()
                                })
                            }

                            if(color)
                            {
                                temp_products = temp_products.filter((ele)=>{
                                    return ele.colors.includes(color)
                                })
                            }
                            
                            if(price)
                            {
                                if(price===0)
                                {
                                    return {
                                        ...state,
                                        filterproducts:temp_products
                                    }
                                }
                                temp_products = temp_products.filter((ele)=>{
                                    return ele.price <= price

                                })
                            }
                            
                            return {
                                ...state,
                                filterproducts:temp_products
                            }
                            
                            case "ClearFilters":
                                return {
                                    ...state,
                                    filters:{
                                                ...state.filters,
                                                text:"",
                                                category:"All",
                                                company:"All",
                                                color :"",
                                                price:state.filters.maxprice
                                    }
                                }
                
        default:
            return state
    };
    


   
  
}

export default ProductReducer