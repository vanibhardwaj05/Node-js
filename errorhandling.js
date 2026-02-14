import fs from 'fs'
try{
    let content=fs.readFileSync("burger.txt","utf-8")
    console.log("Pizza prepared: ",content)
}
catch(err){
    console.log("error in reading the file")
}
console.log("Odera bottle of coke")