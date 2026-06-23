import mongoose from "mongoose";

const promotionSchema = new mongoose.Schema({
  title: String,
  description: String,
  discount: String,
  expiresAt: Date,
  active: Boolean
});

export default mongoose.model("Promotion", promotionSchema);