import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { food_list } from '../../../../Frontend/src/assets/assets'

const List = ({url}) => {
  const [list ,setlist] = useState([]);

  const fetchList =async()=>{
    const response = await axios.get(`${url}/api/food/list`)
    
    if(response.data.success){
      setlist(response.data.data)
    }else{
      toast.error("Error")
    }
  
  }
  const removefood =async (foodid)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodid})
    await fetchList()
    if(response.data.success){
      toast.success(response.data.message)
    }

  }
  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className='list add flex-col'>
      <p>All Food List </p>
      <div className="list-table">
        <div className="list-table-formate title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
          <div key={index}  className="list-table-formate ">
            <img src={`${url}/images/`+item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <p onClick={()=>removefood(item._id)} className='X-delete'>X</p>

          </div>
       ) })}
      </div>
      
    </div>
  )
}

export default List
