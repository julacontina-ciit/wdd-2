import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/welcome", (req, res) => {
  res.status(200).json({
    message: "Handshake from express.",
  });
});
