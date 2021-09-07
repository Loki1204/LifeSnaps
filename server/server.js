import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";


dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to LifeSnaps");
});
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
