import express from 'express'
let app=express()
import {createServer} from 'http'
import {Server} from 'socket.io'
let http=createServer(app)
let io= new Server(http)
import path from 'path'
import { fileURLToPath } from 'url'
let __filename=fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename)
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"broadcast.html"))
})
let clients = 0
io.on("connection",(socket)=>{
    clients++
    io.emit("broadcastmsg",`${clients} clients are connected`)
    socket.on("disconnect",()=>{
        clients--
        io.emit("broadcasting",`${clients} clients connected`)
    })
})
http.listen(3000)