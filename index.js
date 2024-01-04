import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import booksRouter from "./src/features/books/book.routes.js";
import userRouter from "./src/features/users/users.routes.js";
import cookieParser from 'cookie-parser';
import { auth } from './src/middlewares/jwtAuth.js';

const app = express();
app.use(cookieParser())
app.use(express.json());

app.use('/api/user', userRouter)
app.use("/api/books", auth, booksRouter);

export default app;