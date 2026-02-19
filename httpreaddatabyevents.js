// http by events
import http from 'http'
import { EventEmitter } from 'events'
import fs from 'fs'

let server=http.createServer((req,res)=>{
    let fileevent = new EventEmitter()
    fileevent.on("myfileevent",(passeddata)=>{
        let rows=''
        for(let i=0;i<passeddata.length;i++){
                    rows+=`
                    <tr>
                    <td>${passeddata[i].id}</td>
                    <td>${passeddata[i].name}</td>
                    <td>${passeddata[i].price}</td>
                    </tr>
                    `
                }
                res.writeHead(200,{'content-type':'text/html'})
                res.end(`
                    <table border="1">
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                    ${rows}
                    </table>
                    `)

    })
    if(req.url=='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.end(`
            <h3>Click on the button to view the data</h3>
            <a href='/fetchdata'>
            <button type='button'>View</button>
            </a>
            `)
    }
    else if(req.url=="/fetchdata"){
        fs.readFile("products.json","utf-8",(err,data)=>{
            if(err){
                res.writeHead(404,{'content-type':'text/html'})
                res.end("<p>No data found</p>")
            }
            else{
                let passeddata=JSON.parse(data)
                fileevent.emit("myfileevent",passeddata)
                
            }
        })
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end("<p> Page not found</p>")
    }
})
server.listen(3000)