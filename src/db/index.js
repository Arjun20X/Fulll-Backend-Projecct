import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) // mongoose.connect() return an object which is stored in connectionInstance
        console.log(`\n MongoDb connected !! DB HOST : ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MongoDb connection Failed" , error);
        process.exit(1);// this will terminate this process or function is error occur and exit code will be one for failure
    }
}

export default connectDB