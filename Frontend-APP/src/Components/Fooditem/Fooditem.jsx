import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const Fooditem = ({id,name,price,description,image}) => {
    
    const { cartitem,addtocart,removeFromcart ,url} = useContext(StoreContext)
  return (
    <div className='food-items'>
        <div className="fooditem-img-cantainer">
            <img className='fooodimg' src={url+ '/images/' +image} alt="" />
            {!cartitem[id]
                    ?<img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white} alt="" srcset="" />
                    :<div className='fooditem-counter'>
                        <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" srcset="" />
                        <p>{cartitem[id]}</p>
                        <img onClick={()=>removeFromcart(id)} src={assets.remove_icon_red} alt="" srcset="" />
                    </div>}
        </div>
        <div className="fooditem-info">
            <div className="fooditem-name-rate">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="fooditem-desc">{description}</p>
            <p className="fooditem-price">₹{price}</p>
        </div>
      
    </div>
  )
}

export default Fooditem
