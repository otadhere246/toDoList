import Tasks from "../models/tasks.js";

export const addtask = async (req, res) => {
    try {
        const { title, description } = req.body
        const istaskexists = await Tasks.findOne({ title })
        console.log("is task esxist ",istaskexists)
        if (istaskexists) return res.status(400).json({ message: "Task already exists." })
        const newTask = new Tasks({ title, description });
        await newTask.save();
        res.status(201).json(newTask)
    }
    catch (error) {
        console.error("an error occured: ", error)
        res.status(400).json({ message: error.message })
    }
}

export const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find()
        res.json(tasks)
    }
    catch (error) {
        console.error("an error occured: ", error)
        res.status(500).json({ message: error.message })
    }
}

// delete 

export const deleteTask = async (req, res) => {
    try {
        await Tasks.findByIdAndDelete(req.params.id)
        res.json({ message: "Task deleted successfully." })
    }
    catch (error) {
        console.error("an error occured: ", error)
        res.status(500).json({ message: error.message })
    }
}

// update task
export const updateTask = async (req, res) => {
    try {
        const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedTask)
    }
    catch (error) {
        console.error("an error occured: ", error)
        res.status(400).json({ message: error.message })
    }
}

export const completeTask = async (req, res) => {
    try {
        const completedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(completedTask)
    }
    catch (error) {
        console.error("an error occured: ", error)
        res.status(400).json({ message: error.message })
    }
}