import express from "express"
import dotenv from "dotenv"
import dbConnection from "./config/dbconnection.js"

dotenv.config()
const app = express()

dbConnection()

const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})