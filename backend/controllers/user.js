import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const createuser = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Validate the user data
        if (!username || !password ) {
            return res.status(400).json({ message: "username, password are required" });
        }

        const hashedpassword = await bcrypt.hash(password, 10)

        // Create new user
        const newUser = new User({ username, password: hashedpassword });

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


export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both username and password",
      });
    }

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Username does not exist",
      });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username }, // Payload
      process.env.JWT_SECRET, // Secret key from environment variable
      { expiresIn: '1h' } // Token expiration
    );

    // Return the token and user details in the response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token, // Include the token
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
};
  
