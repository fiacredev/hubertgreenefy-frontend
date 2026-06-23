import express from "express";
import Promotion from "../models/Promotion.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const promotions = await Promotion.find();
  res.json(promotions);
});

router.post("/", async (req, res) => {
  try {
    const newPromo = new Promotion(req.body);
    await newPromo.save();
    res.status(201).json(newPromo);
  } catch (err) {
    res.status(500).json({ error: "Failed to create promotion" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPromo = await Promotion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedPromo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update promotion" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPromo = await Promotion.findByIdAndDelete(req.params.id);

    if (!deletedPromo) {
      return res.status(404).json({ error: "Promotion not found" });
    }

    res.json({ message: "Promotion deleted successfully", deletedPromo });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete promotion" });
  }
});

export default router;