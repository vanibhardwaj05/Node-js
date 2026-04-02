import express from 'express'
const app=express()
const users={
    vani: { role: "admin" },
    nandini: { role: "teacher" },
    ishani: { role: "student" },
};
const permissions = {
    admin: ["dashboard" , "users","profile"],
    teacher: ["dashboard" , "profile"],
    student: ["profile"]
};

const getUser = (req,res,next)=>{
    const username = req.query.user;// display->?user=vani
    if(!username || !users[username]){
        return res.send("User not found.Use ?user=vani");
    }
    req.user = users[username];
    next();
};
app.use(getUser);

// -------------------------RBAC MIDDLWARE----------------------------

const checkAccess = (page)=>(req,res,next)=>{
    const role=req.user.role;
    if(permissions[role].includes(page)){
        next();
    }
    else{
        res.send("Access Denied");
    }
};

// -------------------------------ROUTES------------------------------

app.get("/dashboard",checkAccess("dashboard"),(req,res)=>{
    res.send("Welcome to Dashboard");
});
app.get("/users",checkAccess("users"),(req,res)=>{
    res.send("User Management Page");
});
app.get("/profile",checkAccess("profile"),(req,res)=>{
    res.send("Student Profile Page");
});

app.listen(3000)
// http://localhost:3000/users?user=nandini run program