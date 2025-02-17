import mongoose from "mongoose";

const connectMongo = async () => {
    if(mongoose.connection.readyState === 1){
        console.log("reusing existing MongoDB connection");
        return mongoose.connection.asPromise();
        
    }

    try{
        await mongoose.connect(process.env.MONG_URI as string);
        console.log("MongoDB connected successfully");
    }catch (error){
        console.log("MongoDB connection successfully", error);
        throw new Error("failed to connect to MongoDB")
        
    }
}

export default connectMongo;