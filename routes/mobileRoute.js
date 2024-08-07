const express = require("express");
const Mobile = require("../models/mobileModel");
const router = express.Router();

// Add Mobile
router.post("/add", async (req, res) => {
  const { model, brand, age, price, image } = req.body;
  try {
    const mobile = new Mobile({ model, brand, age, price, image });
    await mobile.save();
    res.status(201).json(mobile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all mobiles
router.get("/", async (req, res) => {
  try {
    const mobiles = await Mobile.find();
    res.status(200).json(mobiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single mobile
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const mobile = await Mobile.findById(id);
    if (!mobile) {
      return res.status(404).json({ error: "Mobile not found" });
    }
    res.status(200).json(mobile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update mobile
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const mobile = await Mobile.findByIdAndUpdate(id, req.body, { new: true });
    if (!mobile) {
      return res.status(404).json({ error: "Mobile not found" });
    }
    res.status(200).json(mobile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete mobile
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const mobile = await Mobile.findByIdAndDelete(id);
    if (!mobile) {
      return res.status(404).json({ error: "Mobile not found" });
    }
    res.status(200).json({ message: "Mobile deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
