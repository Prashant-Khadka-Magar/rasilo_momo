import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/index.js";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import menuRoutes from "./routes/menu.route.js";

dotenv.config({
  path: "./.env",
});

connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Middleware to parse JSON request bodies
app.use(express.json());
// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));
// Middleware to parse cookies from incoming requests
app.use(cookieParser());

// User Routes
app.use("/api/v1/user", userRoutes);

//Menu Routes
app.use("/api/v1/menu", menuRoutes);
app.use("/api/v1/menu/:categoryId", menuRoutes);

//start and listen to the server
app.listen(PORT, () => {
  console.log(`listening on ${PORT} `);
});
