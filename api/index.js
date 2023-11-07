import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv'

// importing routes
import userRouter from "./routes/user.route.js"

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


app.use('/api/user', userRouter);