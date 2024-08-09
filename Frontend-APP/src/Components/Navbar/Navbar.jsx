import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'


const Navbar = ({setShowlogin}) => {

  const [menu ,setMenu] = useState("")
  const {cartitem,food_list,token,setToken} =useContext(StoreContext);

  const Navigate = useNavigate()
  const Logout = ()=>{
    localStorage.removeItem("token");
    setToken("")
    Navigate("/")
  }

  return (
    <div className='Navbar'>
      <div className="Nav-Left">
        <Link to='/' ><img src={assets.logo} alt="" className="Nav-logo" /></Link>
        <ul className="Nav-Menu">
          <Link to='/' className='links-active'><li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li></Link>
          <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
          <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</li>
          <li onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact-Us</li>
        </ul>
      </div>
      <div className="nav-Right">
        <div className="Nav-Search-bar">
          <input type="text" className='Nav-input'/>
          <button className='Nav-sar-icon'><img src={assets.search_icon} alt="" /></button>
        </div>
        <div className="Nav-Search-icon">
          <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>
          {food_list.map((item,index)=>{
            if(cartitem[item._id]>0){
              return(
                <div className="Dot"></div>
              )
            }
          })}
         
        </div>
        {!token?<button className='SignIn' onClick={()=>setShowlogin(true)}>Sign In</button>:
        <div className='Nav-pro'>
          <img className='pro' src={assets.profile_icon} alt="" srcset="" />
          <ul className='Nav-pro-drop-down'>
            <li ><img  src={assets.bag_icon} /><p>Orders</p></li>
            <hr />
            <li onClick={Logout}><img id='logout-img' src={assets.logout_icon} alt="" /><p id='LogOut'>LogOut</p></li>
          </ul>
        </div>
}
        
      </div>
      
    </div>
  )
}

export default Navbar
