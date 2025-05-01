import express from "express"
import { PORT } from "./config/env.js"
import { errorHandlerMiddleware } from "./middleware/middleware.js"

const app  =  express()



app.use(express.json())


// error handling
app.use(errorHandlerMiddleware)




app.listen(PORT,()=>{
    console.log("listing to",PORT)
})