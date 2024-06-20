import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {dbConnection} from './database/dbConnection.js'

const app = express()
dotenv.config({path:"./config/config.env"})

dbConnection()
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"], // we want to post to fron end
    credentials:'true'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true})) // to get form data 

export default app