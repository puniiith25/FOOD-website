import foodmodel from "../models/Foodmodel.js";
import fs from 'fs'

// add food
const addfood = async(req,res)=>{
    let image_filename = `${req.file.filename}`
    const food =new foodmodel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename

    })
    try {
        await food.save();
        res.json({success:true,message:"food added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"food not added"})
        
    }


}
// All Food List
const listfood = async (req , res )=>{
    try {
        const foods =await foodmodel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        res.json({success:false,message:"Food Not  ADDED"})
    }
}
// Delete Food Item
const removefood =async (req,res)=>{
    try {
        const food = await foodmodel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodmodel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removes"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Food deleted"})
        
    }
}

export{addfood,listfood,removefood}