import bodyParser from "body-parser";
import { v2 as cloudinary } from "cloudinary"; // Import Cloudinary (v2) correctly
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import contactRoutes from "./Router/Contact.Router.js";
import registerRoutes from "./Router/Register.Admin.Router.js";
import userRoutes from "./Router/User.Router.js";
import connectDB from "./utils/db.js";
import { upload } from "./utils/multer.js"; // Multer configuration

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Enable CORS for frontend access
app.use(
  cors({
    origin: ["http://localhost:5173", "http://192.168.116.220:5173"], // Frontend URLs
    credentials: true,
  })
);

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary Cloud Name: ", process.env.CLOUDINARY_CLOUD_NAME);
console.log("Cloudinary API Key: ", process.env.CLOUDINARY_API_KEY);
console.log("Cloudinary API Secret: ", process.env.CLOUDINARY_API_SECRET);

// File Upload API
app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",  // Automatically detect the file type (image, video, etc.)
    });

    res.json({
      public_id: result.public_id,  // Cloudinary public ID
      url: result.secure_url,       // Cloudinary secure URL for the uploaded file
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "File upload failed" });
  }
});

// Parse JSON request bodies
app.use(bodyParser.json());

// Use API Routes for Contacts, Register, and Users
app.use("/api", contactRoutes);
app.use("/api", registerRoutes);
app.use("/api", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
