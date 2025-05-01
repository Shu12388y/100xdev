import jwt from "jsonwebtoken";
import { JWT } from "../config/env.js";

export const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: "Internal Server error", error: err });
};

export const authHandlerMiddleware = (req, res, next) => {
  let token;
  let autheader = req.headers.Authorization || req.headers.authorization;

  if (autheader) {
    token = autheader;
    if (!token) {
      res.status(401).json({ message: "No token" });
    }

    try {
      const decode = jwt.decode(token, JWT);
      req.user = decode;

      next();
    } catch (error) {
      res.status(400).json({ message: "Token is not verified" });
    }
  } else {
    res.status(401).json({ message: "No token" });
  }
};
