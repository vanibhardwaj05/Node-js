// first prgram hello world
import http from 'http'
let server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1 style=color:red>Hello world this is my homepage</h1>")// creating server
    res.write("<p>Design. Create. Captivate</p>")
    res.write("<p>Styles change</p>")
    res.write("Home is where our story begins")
    res.end()// stop browser from loading i.e. task is compelete end loading 
    // && overhead transmission end  is a technical terms
})
server.listen(3000,()=>{// 3000n is port number  if prgram dont run it means some apllication 
// is using sam eprot number just change it 
    console.log("Server is listening on port number 3000")
})