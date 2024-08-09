import express from 'express'
import cors from "cors"
import { connentDB } from './config/db.js';
import foodRoute from './routes/foodRoute.js';
import UserRouter from './routes/UserRoute.js';
import 'dotenv/config.js'
import CartRouter from './routes/cartRoute.js';



// App Config
const app = express();
const port = process.env.port || 4000;

// middleware 
app.use(express.json());
app.use(cors())

//DB Connection 
connentDB();

// Api endpoint 
app.use("/api/food",foodRoute)
app.use("/images",express.static("uploads"))
app.use("/api/user",UserRouter)
app.use('/api/cart',CartRouter)


app.get("/",(req,res)=>{
    res.send("API Workng ")
})

app.listen(port,(req,res)=>{
    console.log(`Server Started on http://localhost:${port}`)
})
