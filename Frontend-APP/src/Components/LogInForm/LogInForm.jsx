import React, { useContext, useState } from 'react'
import './LogInForm.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const LogInForm = ({setShowlogin}) => {
  const {url ,setToken } = useContext(StoreContext)

    const [currtState ,setcurrState] = useState("Sign Up")
    const [data ,setdata] =useState({
      name:"",
      email:"",
      password:""
    })
    const onChangeHandler = (event)=>{
      const name = event.target.name
      const value = event.target.value
      setdata(data=>({...data,[name]:value}))
    }
    const onlogin =async(event)=>{
      event.preventDefault()
      let newurl = url
      if (currtState==="SignIn") {
        newurl += '/api/user/login'
        
      }
      else{
        newurl +="/api/user/register"
      }
      const response = await axios.post(newurl,data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowlogin(false)
        
      }
      else{
        alert(response.data.message)
      }
    }
    
  return (
    <div className='LogInForm'>
        <form onSubmit={onlogin} className='LogInForm-PopUp'>
           <div className="Login-title">
            <h2>{currtState}</h2>
            <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
           </div>
           <div className="Login-popup-inputs">
            
            {currtState==='SignIn'?<></>:<input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder='Your name' required/> }
            <input name='email' value={data.email} onChange={onChangeHandler} type="email" placeholder='email' required />
            <input name='password' value={data.password} onChange={onChangeHandler} type="password" placeholder='Password' required />
           </div>
           <button type='submit'>{currtState==='Sign Up'?"Create Account":"SignIn"}</button>
           <div className="Login-Form-Conditions">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
           </div>
           
            <div className="Login-pops">
                    {currtState==="SignIn"? <p>Create Account? <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>:<p>Already you have Account <span onClick={()=>setcurrState("SignIn")}>SignIn here </span></p>}
            </div>
        </form>
       
    </div>
  )
}

export default LogInForm
