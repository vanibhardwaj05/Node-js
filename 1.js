import http from 'http'
import fs from 'fs'
let s = http.createServer((req, res) => {
    if (req.url == "/") {
        let d = new Date().toString()
        fs.appendFile("log.txt", "Request received on " + d + "\n", (err) => {
            if (err) console.log(err)
        })
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(`
            <h2>Home Page</h2>
            <a href="/about">About</a><br><br>
            <a href="/contact">Contact</a>
        `)
    }
    else if (req.url == "/about") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(`
            <h2>About Page</h2>
            <a href="/">Home</a>
        `)
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(`
            <h2>Contact Page</h2>
            <a href="/">Home</a>
        `)
    }
    else {
        res.writeHead(404, { 'content-type': 'text/plain' })
        res.end("Page not found")
    }
})
s.listen(3000)
