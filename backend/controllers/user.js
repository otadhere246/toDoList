import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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


export const login = async (req,res) => {
    try {
        const {username, password} = req.body
    if(!username || !password){
        return res.status(404).json({
            success:false,
            message:"enter username and password"
        })
    }
      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({
            success:false,
            message:"the username doesnot exist"
        })
      }

      console.log("user ",user)
  
      // Compare the provided password with the hashed password in the database
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      console.log("password match : ",isPasswordMatch)
      if (!isPasswordMatch) {
        return res.status(404).json({
            success:false,
            message:"password is wrong"
        })
      }
  
      // If successful, return the user (or you can generate a token here)
      return res.status(200).json({
        message: 'Login successful',
        user: {
          id: user._id,
          username: user.username,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
