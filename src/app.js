import express from "express";
import userRouter from "./routers/user.route.js";

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);

export default app;
