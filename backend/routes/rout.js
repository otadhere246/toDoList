import express from 'express';
import { createuser, sample } from '../controllers/user.js';

const router = express.Router(); // Use express.Router() to handle routes

// Define routes
router.post('/create', createuser);
router.get("/", sample);

export default router;
