import user from "../models/user.js";

export const createuser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate the user data
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        // Create new user
        const newUser = new user({ username, password });

        // Save the user to the database
        await newUser.save();

        // Respond with the created user
        res.status(201).json(newUser);
    } catch (error) {
        console.error("An error occurred:", error.message);
        res.status(500).json({ message: "Server error, please try again later" });
    }
}

export const sample = (req, res) => {
    res.send("Sample route");
}
