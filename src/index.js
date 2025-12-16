import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try{
        await connectDB();

        app.on("Error",(error)=>{
            console.log("error connecting to MongoDB",error);
        });

        app.listen(process.env.PORT || 8000,()=>{
            console.log("Server running on port ",process.env.PORT);
        });

    }catch(error){
        return res.status(500).json({
            message: "Cannot Start Server"
        })
    }
}

startServer();