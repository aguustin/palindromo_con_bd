import express from "express"
import { dbConnection } from "./database.js"
import morgan from "morgan"
import { port } from "./config.js"
import palindromeRoute from './routes/palindromeRoutes.js'
import cors from "cors"

const app = express()

dbConnection()

app.use(cors())
app.use(express.text())
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"))

app.use(palindromeRoute)

app.listen(port, console.log(`Listened port: ${port}`))