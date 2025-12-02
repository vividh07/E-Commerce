const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
connectDB();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to Xspark API!");
});

// API ROUTES

app.use("/api/users", userRoutes);

// Product API

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port http://localhost:${PORT}`);
});
