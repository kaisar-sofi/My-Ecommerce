import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducer"
import data from "../data";
import singledata from "../singleproductsdata/singledata";


export const AppContext = createContext();


// const API = "httAps://api.pujakaitem.com/api/products";

 function AppcontextProvider({children}){
    const initialstate = {
           
            products :[],
            featureproducts :[],
            singleproduct:[],
            sortingvalues:"",
            filterproducts:[],
            all_products :[],

            filters :{
                text:"",
                category:"All",
                company:"All",
                color :"",
                maxprice :0,
                minprice:0,
                price:0
            },


    }
    const [state,dispatch] = useReducer(reducer,initialstate)
    
    useEffect(()=>
    {
        dispatch({type:"MY_PRODUCTS",payload:data})
    },[])

    
    // funtion for single-page-product
    const getsingleprodcuct =(id)=>{
        const res = singledata.filter(ele=> ele.id===id)
        dispatch({type:"SINGLE-PRODUCT",payload:res})
    }
  

    // useeffect for product page
    useEffect(()=>{
        
        dispatch({type:"filtersearchproducts"})
    },[state.filters])

    // use-effect for filter-products on basis of select-tag
    useEffect(()=>{
        dispatch({type:"filterproducts",payload:data})
    },[state.sortingvalues])

    

    // funcion for-select value in sort component
const handlesort=(event)=>{
    let value = event.target.value;
    dispatch({type:"Sorting-values",payload:value})

}    

// function for updating filter values in filter-section-component
const handlechange =(e)=>{
    // console.log(e.target.value)
    let name = e.target.name;
    let value = e.target.value;
    // console.log(value)
    // console.log(name)
     dispatch({type:"Update-filter-value",payload:{name,value}})

}

const handleSearch =(e)=>{
    // console.log(e.target.value)
    let name = e.target.name;
    let value = e.target.value;
    // console.log(value)
    // console.log(name)
     dispatch({type:"Update-filter-value",payload:{name,value}})

}
    
// funtion for clear-filters
const handleclearFilters =()=>{
    dispatch({type:"ClearFilters"})
    // console.log("button")

}


    return (<AppContext.Provider value={{...state,getsingleprodcuct,handlesort,handleclearFilters,handlechange,handleSearch}}>
        {children}
    </AppContext.Provider>)
}
export default AppcontextProvider