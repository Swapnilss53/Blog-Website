const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("<h1>Hello everyone website started</h1>");
})

app.listen(3000 || process.env.PORT,function(){
    console.log("server started");
})