import userModel from "../models/Usermodel.js";
import jwt from 'jsonwebtoken'
import validator from 'validator'
import bcrypt from 'bcrypt'

// USer Login 
const UserLogin = async (req,res)=>{
    const { email,password} = req.body
    try {
        const user = await userModel.findOne({email})
        if (!user) {
            return res.json({success:false,message:"User Doesn't have Any Account"})
            
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.json({success:false,message:" Wrong Password"})
            
        }
        const token = createToken(user._id)
        res.json({success:true,token})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}
// Create Token 
const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// USer register 
const UserRigister =async (req,res)=>{
    const {name,email,password}= req.body;
    try {
        const exists = await userModel.findOne({email});
        // Check User Alreay Exist
        if (exists) {
            return res.json({success:false,message:"User Already Exist"})            
        }
        // Check Email Valid
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Invalid Email !!"})
            
        }
        // Password Feild
        if (password.length<8) {
            return res.json({success:false,message:"Enter Strong Password !!"})
            
        }
        // hasing User Password 
        const salt = await bcrypt.genSalt(10)
        const hashedpassword =await bcrypt.hash(password,salt);
        // New User Model
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedpassword
        })
        // Save user Data On database
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})
        

    } catch (error) {
        consolelog(error)
        res.json({success:false,message:"Error"})
    }
    
    }

export {UserLogin,UserRigister}