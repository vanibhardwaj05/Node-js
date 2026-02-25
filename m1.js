import express from 'express'
let app = express()
let logger = (req,res,next)=>{
    console.log("Before logging")
    console.log("After logging")
    next()
}
// app.use(logger)
app.get("/home",(req,res)=>{
    console.log("This is the home page")
    res.send()
})
app.use(logger)
app.get("/products",(req,res)=>{
    console.log("This is products page")
    res.send();
})
app.listen(3000)
// change next betw befor and after or first then printining will be diff 
// logger is just like function 
// calling and next also logger is middleware