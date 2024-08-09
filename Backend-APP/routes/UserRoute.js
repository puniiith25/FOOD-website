import express from 'express'
import { UserLogin,UserRigister } from '../controllers/Usercontroller.js'

const UserRouter = express.Router()

UserRouter.post("/register",UserRigister)
UserRouter.post("/login",UserLogin);

export default UserRouter