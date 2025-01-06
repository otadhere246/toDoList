import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/rout.js';
import { connect } from 'mongoose';
import dbConnection from './config/dbconnection.js';

dotenv.config();

const app = express();

// Middleware to parse incoming JSON
app.use(express.json());
app.use(bodyParser.urlencoded())

// Connect to the database
dbConnection();
app.get("home", (req, res) => { console.log("...........") })

// Routes
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
