// require('dotenv').config({path:'./env'})
//there is an alternate method to importing dotenv but it
//is still in experimental stage

import dotenv from "dotenv"
import connectDB from "./db/db.js";

dotenv.config({
    path:'./env'
})

connectDB()

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"
const app=express()
;(async()=>{
 try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
        console.log("Error",error);
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })

 } catch (error) {
    console.log("Error: ",error)
    throw error
 }
})()

*/