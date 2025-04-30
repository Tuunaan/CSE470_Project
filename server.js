import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import paymentRoutes from "./routes/paymentRoute.js";

//configure environment

//database configuration
connectDB();
console.log("var", process.env.NEW_VAR);

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/checkout", paymentRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server Running on $ port ${PORT}`.bgCyan.white);
});
