import express from 'express'
const app = express()
// path module help in fetching the front end file
import fs, { read } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename= fileURLToPath(import.meta.url)
const __dirname= dirname(__filename)
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"form.html"))
})
app.post("/submit",(req,res)=>{
    const {name,email}=req.body
    let newUser = {name,email}
    let content = ''
    let readstream = fs.createReadStream("newdata.json","utf-8")
    readstream.on("data",(chunk)=>{
        content+=chunk
    })
    readstream.on("end",()=>{
        let users = []
        if(content!==''){
            users = JSON.parse(content)
        }
        users.push(newUser)
        let writestream = fs.createWriteStream("newdata.json")
        writestream.write(JSON.stringify(users,null,2))
    })
    res.send(`<h3> Details submitted as : ${name} and ${email} </h3>`)
})
app.listen(3000)
