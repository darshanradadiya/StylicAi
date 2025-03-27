// filepath: d:\StylicAi\backend\Router\User.Router.js
import express from 'express';
import { getUsers } from '../Controller/User.Controller.js';

const router = express.Router();

// Define the GET route for fetching users
router.get('/users', getUsers);

export default router;