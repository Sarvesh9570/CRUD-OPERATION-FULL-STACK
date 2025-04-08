const express = require("express");
const mongoose = require("mongoose");
const user = require("../models/userModel");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userAdded = await user.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// get all user
router.get("/", async (req, res) => {
  try {
    const showAll = await user.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.send(400).json({ error: error.message });
  }
});

// get single user by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleuser = await user.findById({ _id: id });
    res.status(200).json(singleuser);
  } catch (error) {
    res.send(400).json({ error: error.message });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleuser = await user.findByIdAndDelete({ _id: id });
    res.status(200).json(singleuser);
  } catch (error) {
    res.send(400).json({ error: error.message });
  }
});

//update
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const updateUser = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    res.send(400).json({ error: error.message });
  }
});

module.exports = router;
