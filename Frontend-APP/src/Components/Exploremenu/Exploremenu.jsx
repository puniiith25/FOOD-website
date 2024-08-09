import React, { useState } from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category , setcategory} ) => {

  return (
    <div className='Exploremenu'>
        <h1>Explore our Menu</h1>
        <p className="Explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and
        culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="Explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div key={index} onClick={()=>{setcategory(prev=>prev===item.menu_name?'all':item.menu_name)}}>
                        <img className={category===item.menu_name?'actives':''} src={item.menu_image} alt="" />
                        <p className={category===item.menu_name?'active-Underline':''} >  {item.menu_name}</p>

                    </div>
                )

            })}
        </div>
        <hr/>
    </div>
  )
}

export default Exploremenu
