import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from 'axios'
export const StoreContext = createContext(null)


const StoreContextProvider =(props)=>{
    const url = 'http://localhost:4000'

    const [cartitem,setcartitem] =useState("");
    const [token,setToken] = useState("");
    const [food_list ,setFood_list] = useState([])

    const addtocart = (itemid)=>{
        if(!cartitem[itemid]){
            setcartitem((prev)=>({...prev,[itemid]:1}))
        }else{
            setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }

    }
    const removeFromcart =(itemid)=>{
        setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    const getTotalAmount = ()=>{
        let totalamount =0;
        for(const item in cartitem){
            if(cartitem[item]>0){
            let iteminfo = food_list.find((product)=>product._id===item);
            totalamount += iteminfo.price * cartitem[item]
            }}
        return totalamount;
    }
    
    const fetchFoodlist = async ()=>{
        const response = await axios.get(url +'/api/food/list') 
        setFood_list(response.data.data)
    }
    useEffect(()=>{
        async function  loadData() {
            await fetchFoodlist()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))          
            }
        }
        loadData()   
        

    },[])
    const contextValue = {
        food_list,
        addtocart,
        removeFromcart,
        cartitem,
        setcartitem,
        getTotalAmount,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
    

}

export default StoreContextProvider