import express, { Router } from 'express';
import { createuser, getusers, login } from '../controllers/user.js';
import { addtask, completeTask, deleteTask, getTasks, updateTask } from '../controllers/tasks.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router(); // Use express.Router() to handle routes



// Define routes
router.post('/create',authenticateToken, createuser);
router.get("/users",authenticateToken, getusers)
router.post("/login", login)

// tasks
router.post("/newtask",authenticateToken, addtask)
router.delete("/deletetask/:id",authenticateToken, deleteTask)
router.put("/update/:id",authenticateToken, updateTask)
router.post("/complete/:id",authenticateToken, completeTask)
router.get("/gettasks",authenticateToken,getTasks)
export default router;
