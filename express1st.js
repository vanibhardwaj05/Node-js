import express from 'express'
const app = express()
app.get("/home",(req,res)=>{
    res.send("This is home page")
})
app.get("/contact",(req,res)=>{
    res.send(`<p>This is the contact form</p>
        <input type='text' name='name'>
        <input type='submit' value='Submit'>
        `)
})
app.listen(3000)