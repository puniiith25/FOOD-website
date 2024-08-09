import mongoose from "mongoose";

export const connentDB = async ()=>{
    await mongoose.connect('mongodb+srv://puniiith25:1111111122@cluster0.jqcuqzh.mongodb.net/Food_Del_App').then(()=>console.log("DB Conected")).catch(()=>console.log(" not Connect"));
}