import {Router} from "express";


export const CourseRouter =  Router();

CourseRouter.post("/purchase",(req,res)=>{
    res.json({
        message:"purchase"
    })
    return
})



CourseRouter.get("/preview",(req,res)=>{
    res.json({
        message:"preview"
    })
})