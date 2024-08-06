import express from "express";
import User from "../models/user.mode.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).send(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/", async (req, res) => {
  try {
    const { _id, like } = req.body;
    // console.log(_id);

    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    user.like = like;

    await user.save();

    res.status(200).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/new", async (req, res) => {
  try {
    const { name, like } = req.body;
    // console.log({ name, like });

    const newUser = new User({
      name: `${name}`,
      like: `${like}`,
    });

    await newUser.save();

    res.json({ message: "User Added Successfully", data: newUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getlike", async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).send({ data: users });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.status(200).send("User Deleted Successfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
