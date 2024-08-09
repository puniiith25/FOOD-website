import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './Cart.css'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const {removeFromcart,cartitem,food_list,getTotalAmount,url} =useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='Cart'>
      <div className="cart-item">
        <div className="cart-items-title">
         <p>Items</p>
         <p>Title</p>
         <p>Price</p>
         <p>Ouantity</p>
         <p>Total</p>
         <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartitem[item._id]>0)
          {
          return(
            <>
            <div className="food-items-lists cart-items-title">
              <img src={url + "/images/"+item.image} alt="" />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartitem[item._id]}</p>
              <p>₹{item.price*cartitem[item._id]}</p>
              <p onClick={()=>removeFromcart(item._id)} className='Cross'>X</p>
            </div>
            <hr/>
            </>
          )
          }
          
        })}
      </div>
      <div className="cart-bottom">
              <div className="cart-total">
                <h2>Cart Totals</h2>
                <div className="cart-total-datles">
                  <p>Sub-Total</p>
                  <p>₹{getTotalAmount()}</p>
                  
                </div>
                <hr />
                <div className="cart-total-datles">
                  <p>Delivery fees</p>
                  <p>₹{!getTotalAmount()?0:2}</p>
                  
                </div>
                <hr />
                <div className="cart-total-datles">
                  <b>Total</b>
                  <b>₹{getTotalAmount()+2}</b>
                  
                </div>
                <button onClick={()=>{navigate('/order')}}>PROCEED TO CHECKOUT</button>
              </div>
              <div className="cart-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="promocode-input">
                  <input type="text" placeholder='promo code'/>
                  <button>SUBMIT</button>
                </div>
              </div>

          </div>
      
    </div>
  )
}

export default Cart
