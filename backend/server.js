import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/rout.js';
import { connect } from 'mongoose';
import dbConnection from './config/dbconnection.js';
import cookieParser from 'cookie-parser';
import cors from "cors"

dotenv.config();

const app = express();

// Middleware to parse incoming JSON
app.use(express.json());
app.use(cors())
app.use(cookieParser())
// Connect to the database
dbConnection();



// Use routes defined in `userRoutes`
app.use("/api/auth", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
