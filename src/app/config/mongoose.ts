import mongoose from "mongoose";
const connectDB = async () => {
    try {
        mongoose.connect(`${process.env.MONGO_DB}`);
        console.log("connect DB success");
    } catch (error) {
        console.log("connect DB failed", error);
    }
}

export default connectDB;