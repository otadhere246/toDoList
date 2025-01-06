import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import dbConnection from "./config/dbconnection";

dotenv.config();

const app = express();

//..............
const PORT = process.env.PORT || 3000;

dbConnectio();
// .................
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
})
