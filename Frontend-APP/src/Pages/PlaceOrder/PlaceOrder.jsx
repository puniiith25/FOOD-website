import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalAmount} = useContext(StoreContext)
  return (
    <div>
      <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-feilds">
          <input type="text" placeholder='Frist name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-feilds">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='state'/>
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="number" placeholder='Phone' />
      </div>
      <div className="place-order-right">
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>     
  </div>
  )
}

export default PlaceOrder
