import express from "express";
import { CreateContact, GetContact } from "../Controller/Contact.Controller.js";

const router = express.Router();

router.post("/contact", CreateContact);
router.get("/contacts", GetContact);

export default router;