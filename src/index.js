// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();




























// in this approach we had set up database and express server together in index.js only
// other approach is that where we write db connection fucntion in a diferrent file named db and we call it here
/*
import express from "express";

const app = express();

(async () => {  
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {

            console.log("ERROR : ", error);
            throw error 
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`); 
        })

    }
    catch(error){
        console.error("ERROR", error)
        throw error
    }
}) ()\ // here ()() this is used it is called an ifi (spelling pta nhi pronounce aise hi hota h)
        // ye use krte h turnt function ko execute krne k liye

*/