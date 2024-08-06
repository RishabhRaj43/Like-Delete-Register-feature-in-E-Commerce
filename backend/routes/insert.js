import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.post("/",async(req,res)=>{
  try {
    console.log(req.body);
  const {user} = req.body;

  const userSchema = new mongoose.Schema({
    name:String
  })

  const User = mongoose.model("User",userSchema);

  const newUser = new User({
    name:"afdsf"
  })
  await newUser.save();

  res.json({"message":"User Added Successfully",
    name:user})
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
    
  }
  
})


export default router