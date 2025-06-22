import mongoose from "mongoose"

export const connectToDB = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/project1");
        console.log("Connected to db");
    }
    catch(error){
        console.log("Could not connect to db",error);
        process.exit(1)
    }
}