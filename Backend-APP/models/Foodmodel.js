import mongoose  from "mongoose";

const FoodSchema = new mongoose.Schema({
    name:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:Number,require:true},
    image:{type:String,require:true},
    category:{type:String,require:true},
})
const foodmodel = mongoose.models.food || mongoose.model("food",FoodSchema)

export default foodmodel;