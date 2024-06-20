import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {dbConnection} from './database/dbConnection.js'
import { errorMiddleware } from './error/error.js'

const app = express()
dotenv.config({path:"./config/config.env"})


app.use(cors({
    origin:[process.env.FRONTEND_URL], //what to connect with backend
    methods:["POST"], // we want to post to frontend
    credentials:'true'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true})) // to get form data 


// Routes
app.get("/",(req,res)=>{
    res.json({
        message:"Hello Welcome "
    })
})

dbConnection()
app.use(errorMiddleware)
export default app