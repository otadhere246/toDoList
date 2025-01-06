import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const createuser = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Validate the user data
        if (!email || !password || !role) {
            return res.status(400).json({ message: "Email, password, and role are required" });
        }

        const hashedpassword = await bcrypt.hash(password, 10)

        // Create new user
        const newUser = new User({ email, password: hashedpassword, role });

        // Save the user to the database
        await newUser.save();

        // Respond with the created user
        res.status(201).json(newUser);
    } catch (error) {
        console.error("An error occurred:", error.message);
        res.status(500).json({ message: "Server error, please try again later" });
    }
}

export const getusers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error("an error occured: ", error.message);
        res.status(500).json({ message: "Server error, please try again later" });
    }
}




export const sample = (req, res) => {
    res.send("Sample route");
}
