import express from 'express';
const app=express();
import userurls from './userroute.js';
app.use('/user',userurls);// this suer is prefix like we have to do localhost:3000/user/profile 
// if we remove user then only localhost:3000/profile
app.listen(3000,()=>{
    console.log("Server is running")
})