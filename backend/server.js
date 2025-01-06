import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import dbConnection from "./config/dbconnection";

dotenv.config();

const app = express();
console.log(".added log ")

//..............
const PORT = process.env.PORT || 3000;

dbConnection();
// .................
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
})
