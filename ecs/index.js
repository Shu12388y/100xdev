const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello World" });
});

app.get("/cpu", (req, res) => {
  return res.status(200).json({ message: "cpu task" });
});

app.listen(3000, () => {
  console.log("server is on");
});
