import mongoose from "mongoose";

const connectDB = async () => {
     try{
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection Success\n",connectionInstance.connection.host);
     }catch(error){
        console.log("Cannot connect to MongoDB",error);
     }
}

export default connectDB;