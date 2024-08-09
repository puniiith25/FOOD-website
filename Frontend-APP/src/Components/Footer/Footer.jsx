import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-cantainer">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, odit ea ex illo cupiditate reiciendis at aliquam laboriosam tempora accusamus, sed qui iusto provident! Perspiciatis, aut numquam. Nostrum, necessitatibus explicabo.</p>
          <div className="Social-media">
            <img src={assets.facebook_icon} alt="" className="facebook_logo" />
            <img src={assets.linkedin_icon} alt="" className="Linkdin_logo" />
            <img src={assets.twitter_icon} alt="" className="Twitter_logo" />
          </div>
        </div>
        <div className="footer-center">
          <p>COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>

        </div>
        <div className="footer-right">
          <p>GET IN TOUCH</p>
          <ul>
            <li>+91-222-333-9696</li>
            <li>Tomato@gmail.com</li>
          </ul>

        </div>
      </div>
     
      <div className="App-Download">
        <div className='Text-Experience'>
        <p>For Better Experience Download </p> <h4>Tomato App</h4>
        </div>
        <div className="Download-App-platform">
          <img src={assets.app_store} alt="" />
          <img src={assets.play_store} alt="" />
        </div>

      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 © Tomato. com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
