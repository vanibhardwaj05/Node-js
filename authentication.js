export default function authentication(req,res,next){
    let {username,password}=req.body
    if(username == 'admin' && password =='admin'){
        next()
    }
    else{
        res.send("Invalid credentials")
    }
}
// deafult upar allow karta jb hum import krenge next file mein we can use 
// diff name itherwise we have to use smae name as function