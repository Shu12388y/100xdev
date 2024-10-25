import express from "express";
import { uploader } from "./file-uploader.js";
import { filehandler } from "./filehandler.Controller.js";
import { s3Uploader } from "./s3-uploader.js";


const app =  express()

app.use(express.json())


// here we are using uploader function but in future if we need
// to use a other uploader then we have to remove the upload function with
// the new function
app.get("/file-upload/",async(req,res)=>{
    // const {path} = await req.params
    const path = await req.body.path
    await uploader(path)
    res.status(200).json({
        message:"File upload"
    })
})


// let's use a dependency - injection

app.get("/file",(req,res)=>filehandler.filehandlerController(req,res,{upload:s3Uploader}))




app.listen(3000,()=>{
    console.log("server is on")
})