import express from 'express'
let app=express()
import jwt from 'jsonwebtoken'
app.use(express.json())
let SECRET = "key123"
app.post("/login",(req,res)=>{
    let {username,password}=req.body
    if(username=="vani" && password=="123"){
        let token=jwt.sign({user:username},SECRET,{expiresIn:"1h"})
        return res.send(token)
    }
    res.send("Invalid credentials")
})
app.get("/landingpage",(req,res)=>{
    let authorHeader=req.headers.authorization
    if(!authorHeader){
        return res.send("No token provided")
    }
    let token=authorHeader.split(" ")[1]
    jwt.verify(token,SECRET,(err)=>{
        if(err){
            return res.send("invalid token")
        }
        res.send("Dear student,Welcome to the landing page")
    })
})
app.listen(3000)
