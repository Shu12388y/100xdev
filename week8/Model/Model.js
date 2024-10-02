import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    }
});

const courseSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    imageurl:{
        type:String
    },
    createrId:{
        type:mongoose.Types.ObjectId,
        ref:'admin'
    }

})

const adminSchena = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    }

})


const purchaseSchema = new mongoose.Schema({
    courseId:{
        type:mongoose.Types.ObjectId,
        ref:'course'
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },

})


export const user = mongoose.model('user',userSchema);
export const admin = mongoose.model('admin',adminSchena);
export const purchase = mongoose.model('purchase',purchaseSchema);
export const course = mongoose.model('course',courseSchema);