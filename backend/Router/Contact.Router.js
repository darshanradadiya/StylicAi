import express from 'express';
import { CreateContact, Getcontact } from '../Controller/Contact.Controller.js';

const router = express.Router();

// Define the POST route for creating a contact
router.post('/contact', CreateContact);
router.get('/getcontact', Getcontact);

export default router; // Export the router as the default export