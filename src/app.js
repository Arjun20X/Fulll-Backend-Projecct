import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express();



// hm app.use() ka istemal configurations and middlewares set krne k liye krte hai



// this is used to allow cross origin requests to the server
// so that you do not get cors error
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true,
}))

// this is used for accepting json data 
app.use(express.json({limit: "16kb"}));app

// this is used for accepting data from the url
// extend is used for accepting nested objects in request
app.use(express.urlencoded({extended: true, limit: "16kb"}));


// for static data like pdf or any image that i want to store at my server 
app.use(express.static("public"))


// cookie parser a use ye hai ki jo hmara esrver hai vo user k browser 
// se cookies access bhi kr paye for store bhi kr paye
app.use(cookieParser());


export {app}