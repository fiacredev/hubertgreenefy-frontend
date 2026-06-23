import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});


router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // simple validation 
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const newMessage = new Message({
      name,
      email,
      phone,
      subject,
      message
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage); // return the saved message
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// MARK AS READ
router.put("/:id", async (req, res) => {
  const msg = await Message.findByIdAndUpdate(
    req.params.id,
    { status: "Read" },
    { new: true }
  );
  res.json(msg);
});

router.delete("/:id", async (req, res) => {
  await Message.findByIdAndDelete(req.params.id);
  res.json({ msg: "Message deleted" });
});

export default router;