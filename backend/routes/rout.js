import express, { Router } from 'express';
import { createuser, getusers, sample } from '../controllers/user.js';
import { addtask, deleteTask, getTasks, updateTask } from '../controllers/tasks.js';

const router = express.Router(); // Use express.Router() to handle routes

// Define routes
router.post('/create', createuser);
router.get("/", sample);
router.get("/users", getusers)

// tasks
router.post("/newtask", addtask)
router.delete("/deletetask/:id", deleteTask)
router.put("/update/:id", updateTask)
router.get("/gettasks", getTasks)
export default router;
