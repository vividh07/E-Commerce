const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscribeRoute = require("./routes/subscribeRoute");
const adminRoutes = require("./routes/adminRoutes")




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

// Cart API

app.use("/api/cart", cartRoutes);

// Checkout API

app.use("/api/checkout", checkoutRoutes);

// Orders API

app.use("/api/orders", orderRoutes)

// Upload API

app.use("/api/upload", uploadRoutes)

// Subscribe API

app.use("/api", subscribeRoute)

// Admin API

app.use("/api/admin/users", adminRoutes)


app.listen(PORT, () => {
  console.log(`Server running at port http://localhost:${PORT}`);
});
