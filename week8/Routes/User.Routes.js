import {Router} from "express"


export const userRouter =  Router()


userRouter.post("/signup",function(req,res){
    res.json({
        message:"signup"
    })
    return
})


userRouter.post("/signin",function(req,res){
    res.json({
        message:"signin"
    })
    return
})


userRouter.get("/purchases",function(req,res){
    res.json({
        message:"purchases"
    })
    return
})