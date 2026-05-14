import express from "express";
import connectDB from "./config/db.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`\nServer is running on port ${PORT}`);
    connectDB();
});

app.get("/welcome", (req, res) => {
    res.status(200).json({
        message: "Handshake from express.",
    });
});
