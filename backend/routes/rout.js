import express, { Router } from 'express';
import { createuser, getusers, login } from '../controllers/user.js';
import { addtask, completeTask, deleteTask, getTasks, updateTask } from '../controllers/tasks.js';

const router = express.Router(); // Use express.Router() to handle routes

// Define routes
router.post('/create', createuser);
router.get("/users", getusers)
router.post("/login", login)

// tasks
router.post("/newtask", addtask)
router.delete("/deletetask/:id", deleteTask)
router.put("/update/:id", updateTask)
router.post("/complete/:id", completeTask)
router.get("/gettasks", getTasks)
export default router;
