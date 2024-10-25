// import { s3Uploader } from "./s3-uploader.js"

export const filehandler = {
    filehandlerController:async(req,res,{upload})=>{
        upload.s3Uploader("test.mp4")
        res.json({
            message:"Uploading file"
        })
    }
}