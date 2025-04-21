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
app.use(express.json({limit: "16kb"}));

// this is used for accepting data from the url
// extend is used for accepting nested objects in request
app.use(express.urlencoded({extended: true, limit: "16kb"}));


// for static data like pdf or any image that i want to store at my server 
app.use(express.static("public"))


// cookie parser ka use ye hai ki jo hmara server hai vo user k browser 
// se cookies access bhi kr paye or store bhi kr paye
app.use(cookieParser());


// routes import
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)
// http://localhost:8000/api/v1/users/register  (this is how the complete url will look like)
// with /user the control will first go to the userRouter and then 
// there it will check if there is any route /register then it will call
//  the controller attached to that route




export {app}