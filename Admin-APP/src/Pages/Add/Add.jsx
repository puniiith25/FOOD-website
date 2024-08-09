import React from 'react'
import './Add.css'
import {assets} from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { food_list } from '../../../../Frontend/src/assets/assets'

const Add = ({url}) => {
  const [image ,setimage] = useState(false)
  const [ data ,setdata] =useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })
  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setdata(data=>({...data,[name]:value}))
  }
  const onSubmitHandler = async (event)=>{
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name",data.name)
    formdata.append("description",data.description)
    formdata.append("price",data.price)
    formdata.append("category",data.category)
    formdata.append("image",image)
    const response = await axios.post(`${url}/api/food/add`,formdata)
    if(response.data.success){
      setdata({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })
      setimage(false)
      toast.success(response.data.message)
    }
      
  }
  return (
    <div className='Add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>

        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setimage(e.target.files[0])} type="file" id='image' hidden required />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>

        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows='6' placeholder='Write Content here' required></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category" required>
              <option value="Salad">Salad</option>
              <option value="Rolls">rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='Price' />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
      
    </div>
  )
}

export default Add
