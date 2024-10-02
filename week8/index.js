import dotenv from "dotenv";
dotenv.config({
    path:'.env'
})




import express from "express";
import { userRouter } from "./Routes/User.Routes.js";
import { CourseRouter } from "./Routes/Courses.Routes.js";
import { adminRouter } from "./Routes/Admin.Routes.js";
import { DB } from "./database.js";

const app = express();


app.use(express.json())
app.use("/api/v1/user", userRouter);
app.use("/api/v1/courses", CourseRouter);
app.use("/api/v1/admin", adminRouter);

DB()
  .then(() => [
    app.listen(3000, () => {
      console.log("server is on...");
    }),
  ])
  .catch((err) => {
    console.log(err);
  });
