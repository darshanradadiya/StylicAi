import express from 'express';
import { CreateContact } from '../Controller/Contact.Controller.js';

const router = express.Router();

// Define the POST route for creating a contact
router.post('/contact', CreateContact);

export default router; // Export the router as the default export