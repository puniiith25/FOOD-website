import express from 'express'
import { addTOCart ,removeFromcart ,getCartData } from '../controllers/cartcontroller.js'
import authMiddleWare from '../middleware/auth.js';

const CartRouter = express.Router();


CartRouter.post('/add' ,authMiddleWare,addTOCart)
CartRouter.post('/remove',authMiddleWare,removeFromcart)
CartRouter.post('/get',authMiddleWare,getCartData)

export default CartRouter