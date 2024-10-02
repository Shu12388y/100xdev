import mongoose from "mongoose";


export async function DB() {
        try {
            await mongoose.connect(process.env.URI)
        } catch (error) {
            console.log("error",error)
        }   
}