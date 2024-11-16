import mongoose from "mongoose";

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log("Connected to MongoDB");
    }  catch (error) {
        console.error("Error connecting to MongoDB", error.message);
    }  
};

export default connectToMongo;