import express from 'express';
import { Login } from '../Controller/Login.Controller.js';
import { CreateAdmin, getAdminById, getAllAdmins } from '../Controller/Register.Admin.Controller.js';


const router = express.Router();

router.post('/register', CreateAdmin);
router.get('/admins', getAllAdmins);
router.get('/admin/:id', getAdminById);
router.post('/login',Login);

export default router;