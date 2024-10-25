// class based controller

export class Filehandler{
    constructor(upload){
        this.upload = upload
    }

    upload(_req,res){
        this.upload.uploader("test.mp4")
        res.json({
            message:"File uploaded"
        })
    }


}