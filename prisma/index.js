import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

import express from "express";
import { prisma } from "./db/db";

const app = express();


app.use(express.json());
app.use(express.urlencoded());


app.post("/createuser", async (req, res) => {
  try {
    const {username,password,age,city} =  await req.body;
    await prisma.user.create({
        data:{
            username,
            password,
            age:parseInt(age),
            city
        }
    })
    res.json({message:"user created"}).status(201)
  } catch (error) {
    res.json({message:error}).status(500)
  }
});




app.listen(3000, () => {
  console.log("server is on");
});
