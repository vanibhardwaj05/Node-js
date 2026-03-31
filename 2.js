// implement a custom middleware called authentication in express that checks whether the 
// user iis an admin or not if the url contains ?admin=true,allowaccess to the /user route
// and print "welcome admin" in the terminal and also send the same as response on the browser
// otherwise respond ith "you are not authenticated"

import express from 'express'
let app = express()
let authentication = (req, res, next) => {
    if (req.query.admin === "true") {
        console.log("welcome admin")
        next()
    } else {
        res.send("you are not authenticated")
    }
}
let logger = (req, res, next) => {
    console.log("Before logging")
    console.log("After logging")
    next()
}
app.get("/home", (req, res) => {
    console.log("This is the home page")
    res.send("Home Page")
})
app.use(logger)
app.get("/products", (req, res) => {
    console.log("This is products page")
    res.send("Products Page")
})
app.get("/user", authentication, (req, res) => {
    res.send("welcome admin")
})
app.listen(3000)
