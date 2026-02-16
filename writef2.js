import fs from 'fs'
let studentdata={
    name: "Vani",
    cgpa:8.9,
    email:"aish@gmail.com"
}
fs.writeFile("writef2.txt",JSON.stringify(studentdata,null,10),(err)=>{// 5-> is the pace of lining 
// if we dont put it it will come in on line it will be difficult to read if inplace of null ['name','email'] is written then
// name and emial will be written ignoring cgpa if we want everthing then use null 10 is the rowspace 
    if(err){
        console.log("Error in storing student data")
    }
    else{
        console.log("Student data is stored")
    }
    fs.readFile("writef2.txt","utf-8",(err,data)=>{
        if(err){
            console.log("Error in fetching data");
        }
        else{
            console.log("Data fetched: ",data);
        }
    })
})