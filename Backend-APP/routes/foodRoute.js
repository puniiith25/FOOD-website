import express from 'express'
import { addfood,listfood,removefood} from '../controllers/foodcontroller.js'
import multer from 'multer'


const foodRoute = express.Router();

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req ,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRoute.post('/add',upload.single("image"),addfood)
foodRoute.get('/list',listfood)
foodRoute.post('/remove',removefood)





export default foodRoute;