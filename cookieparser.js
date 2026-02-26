// used when user want to store something data like dark theme white theme
//  third party module cookie parecer
import express from 'express'
let app=express()
import s from 'cookie-parser'
app.use(s())
app.get("/setcookie",(req,res)=>{
    res.cookie("course","Node.js",{maxAge:60000})
    res.cookie("marks",89,{maxAge:60000})
    res.send("The cookies is set")
})
app.get("/fetchcookie",(req,res)=>{
    res.send(req.cookies)
    console.log(req.cookies)
})
app.get("/deletecookie",(req,res)=>{
    res.cookie("course","Node.js",{maxAge:-1})
    res.cookie("marks",89,{maxAge:-1})
    res.send("The cookies is deleted")
})
app.listen(3000)