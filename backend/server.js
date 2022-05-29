const express = require("express");
const dotenv = require("dotenv");
const stocks = require("./data/stocks");
const connectDB = require("./config/db");
const app = express();
dotenv.config();

connectDB();
app.get("/", (req, res) => {
  res.send("API is running");
});
app.get("/api/stocks", (req, res) => {
  res.json(stocks);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port :http://localhost:${PORT}`)
);
