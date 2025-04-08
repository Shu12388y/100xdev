import express from "express";

const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:3001"];

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        next();
    } else {
        res.status(403).json({ message: "Forbidden: Origin not allowed" });
    }
});

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello" });
});

app.listen(3003, () => {
    console.log('server is on');
});
