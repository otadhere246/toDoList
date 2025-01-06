import mongoose from "mongoose";  // Importing mongoose

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI)  // Ensure the correct environment variable name
        .then(() => console.log("DB Connected Successfully"))
        .catch(err => console.log("DB Connection Error: ", err));  // Improved error message
};
export default dbConnection
