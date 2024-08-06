import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.mongoUrl;

const newConnect = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected");
    
  } catch (error) {
    console.log(error.message);
  }
};

export default newConnect;
