// synchronous way
import fs from 'fs'
let content = fs.readFileSync("pizza1.txt","utf-8")
console.log("Pizza prepared: ",content);
console.log("Order a bottle of coke")
