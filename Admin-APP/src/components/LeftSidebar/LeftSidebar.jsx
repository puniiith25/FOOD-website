import React from 'react'
import './LeftSidebar.css'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const LeftSidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="sidebar-content">
        <NavLink to='/add' className="sidebar-options">
          <img src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-options">
          <img src={assets.order_icon} alt="" />
          <p>List Item</p>
        </NavLink>
        <NavLink to='/order' className="sidebar-options">
          <img src={assets.order_icon} alt="" />
          <p>Order</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default LeftSidebar
