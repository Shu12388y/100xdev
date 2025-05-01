import jwt from "jsonwebtoken"
import { JWT } from "../config/env"


const user  = {
    id:1,
    name:"mon",
    role:"admin",
    department:"IT",
    accesslevel:4
}


export const token = jwt.sign(user,JWT,{expiresIn:'1h'})