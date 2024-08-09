import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  const [proimage,setproimage] = useState(false)
  const [token ,setToken]= useState("")
  



  return (
    <div className='Navbar'>
      <img className='logo' src={assets.logo} alt="" />
      <div className='NavPro'>
        <label htmlFor="DP-image">
          
          <img className='profile' src={proimage?URL.createObjectURL(proimage):assets.profile_image} alt="" />
        </label>
        <input  type='file' id='DP-image' onChange={(e)=>{setproimage(e.target.files[0])}} hidden required/>
      </div>  
    </div>
  )
}

export default Navbar
