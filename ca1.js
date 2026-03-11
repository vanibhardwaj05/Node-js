import express from 'express'
const app=express()
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.listen(3000) 