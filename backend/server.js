
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import connectToMongo from './db/connectToMongo.js';
import messagesRoutes from './routes/messageRoutes.js';

import cookieParser from 'cookie-parser';

const app=express();
dotenv.config();
const PORT=process.env.PORT || 5000;


app.use(express.json()); //to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser()); 

app.use("/api/auth",authRoutes);
app.use("/api/messages",messagesRoutes);






app.listen(PORT,()=>{
    connectToMongo();
    console.log(`Server is running on port ${PORT}`);
});

