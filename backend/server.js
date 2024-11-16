
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import connectToMongo from './db/connectToMongo.js';

const app=express();
const PORT=process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //to parse the incoming request with JSON payloads (from req.body)
app.use("/api/auth",authRoutes);

app.get('/',(req,res)=>{
    //root route of the server http://localhost:5000/
    res.send('Hello World');
});



app.listen(PORT,()=>{
    connectToMongo();
    console.log(`Server is running on port ${PORT}`);
});

