import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  like : Boolean
});

const User = mongoose.model("User", userSchema);

export default User