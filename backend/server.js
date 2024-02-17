const solution = require("./Path");
// const User=require("./userModel");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
const path=require('path');
require("dotenv").config({path: path.resolve(__dirname,"../.env")});

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    booked: Array,
    history: Array
})

const User = mongoose.model('User', userSchema);

const mongoDB = process.env.DATABASE_TOKEN;
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
    console.log("Database Connected")
}

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());


app.post('/create', async (req, res) => {
    let user = new User();

    let findk = await User.find({ username: req.body.UserName });
    if (findk.length == 0) {
        user.username = req.body.UserName;
        user.email = req.body.Email;
        user.password = req.body.Password;
        user.booked = [];
        user.history = [];
        let docs = await user.save();
        res.send(docs)
    }
    else{
        res.send("Already exist in database");
    }
})
app.post('/retrieve',async(req,res)=>{
    let find=await User.findOne({username:req.body.UserName});
    res.send(find);
})
app.post('/validate',async(req,res)=>{
    let findk=await User.findOne({username:req.body.UserName,password:req.body.Password});
    if(findk!=null){
        res.send(findk);
    }
    else{
        res.send("Not Found");
    }
})

app.put('/update/:user',async(req,res)=>{
    
    let update=await User.updateOne({username:req.params.user},{
        $push:{booked:req.body.objdata}
    })
    let changedata=await User.findOne({username:req.params.user});
    res.send(changedata);
})
app.get('/set-cookie/:user',(req,res)=>{
    res.cookie('Username',req.params.user);
    res.send("cookie is set");
})
app.get('/get-cookie',(req,res)=>{
    if(!req.cookies.Username){
        res.send("No User");
    }
    else{
        let str=req.cookies.Username;
        res.send(str);
    }  
})
app.get('/del-cookie',(req,res)=>{
    res.clearCookie('Username');
    res.send("Cookie cleared")
})
app.get('/request/:from/:to', (req, res) => {
    // console.table(req.params);
    let frompath = JSON.parse(req.params.from);
    let topath = JSON.parse(req.params.to);
    let result = solution.findPath(frompath, topath);
    res.send(JSON.stringify(result));
})

// --------------------------Deployment-------------------------

var __dirname1=path.resolve();
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname1,"/frontend/build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname1,"frontend","build","index.html"));
    })
}
else{
    app.get("/",(req,res)=>{
        res.send("API Running succssfully");
    })
}

// --------------------------Deployment-------------------------


app.listen(process.env.PORT);