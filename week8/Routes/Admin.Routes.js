import {Router} from "express";
import bcrypt from "bcrypt";
import {z} from "zod";
import jwt from "jsonwebtoken";
import { admin } from "../Model/model.js";

export const adminRouter =  Router()
const ADMIN_TOKEN ="hubfgdnoh94890859gfbjbj"

adminRouter.post("/signup",async function(req,res){
    const {email,password,firstname,lastname} =  await req.body;
    // const userInfo = z.object({
    //     email:z.email(),
    //     pasword:z.string().min(4).max(30),
    //     firstname:z.string().min(6).max(10),
    //     lastname:z.string().min(6).max(10)
    // })
    // if(userInfo.success == false){
    //     res.json({"message":"User error"}).status(404)
    //     return
    // }

    const hashedPassword = await bcrypt.hash(password,10);

    await admin.create({
        email,
        password:hashedPassword,
        firstname,
        lastname
    })

    res.json({
        message:"signup"
    })
    return
})


adminRouter.post("/signin",async function(req,res){

     const {email,password} =  await req.body;
     
     const finduser =  await admin.findOne({
        email:email
     })
     
     const checkPassword = bcrypt.compare(password,finduser.password);

     if(!checkPassword){
        res.json({"message":"wrong password"}).status(404)
        return
     }
     const userId = JSON.stringify(finduser._id)

     const token =  await jwt.sign(userId,ADMIN_TOKEN);
     console.log(token)


    res.json({
        message:"signin"
    })
    return
})


adminRouter.get("/purchases",function(req,res){
    res.json({
        message:"purchases"
    })
    return
})