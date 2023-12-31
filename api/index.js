import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv'

// importing routes
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config()

// connect to the database
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Database Connected");
    }).catch((err) => {
        console.log(err);
    });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

// using middleware
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

/* middleware for handling error */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
