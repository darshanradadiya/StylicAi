import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import contactRoutes from "./Router/Contact.Router.js";
import registerRoutes from "./Router/Register.Admin.Router.js";
import userRoutes from "./Router/User.Router.js";
import connectDB from "./utils/db.js";

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Enable CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://192.168.1.22:5173"], // Front-end URL
    credentials: true,
  })
);

// Parse JSON request bodies
app.use(bodyParser.json());

// Use the contact routes
app.use("/api", contactRoutes);
app.use('/api', registerRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
// const HOST = process.env.HOST || "localhost";w

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// app.listen(PORT, HOST, () => { console.log(`Server running on http://${HOST}:${PORT}`); });