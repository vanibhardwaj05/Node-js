
import express from 'express'
let app=express()
import { authentication } from './authentication.js'// this is for post maethod bpdy parse ko mappkrta h post method se
app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.send(`
        <form action='/submit' method='POST'>
            <input type='text' name='username'><br>
            <input type='text' name='password'><br>
            <input type='submit' value='submit'><br>
        </form>
    `)
})
app.use(authentication)
app.post("/submit",(req,res)=>{
    res.send("Welcome Admin!")
})
app.listen(3000)