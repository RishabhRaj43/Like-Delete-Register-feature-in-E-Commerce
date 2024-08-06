import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import newConnect from "./MongoDb/connect.mongo.js";
import insert from "./routes/insert.js";

dotenv.config();

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

newConnect();

// Routes
app.use("/api",insert)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
