import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import promotionRoutes from "./routes/promotions.js";
import messageRoutes from "./routes/message.js";
// import Image from "./routes/images.js"
import authRoutes from "./routes/auth.js";  

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("finally you are there"));  
app.use("/api/promotions", promotionRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);   

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));