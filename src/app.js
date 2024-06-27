import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRoute from "./routers/user.route.js"
import { register } from "./controllas/user.controller.js"
const app= express()

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ limit: "16kb", extended: true }))

app.use(cors({
    origin: ["https://localhost:8000/",
    //origin: "*"
    // https://daraz.com/
    ]   
}))

//localhost:8000/api/v1/users/register
app.use('api/v1/users', userRoute)

app.use(cookieParser())


export { app }