const fs = require("fs");

const express =require('express');

var hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper('getDate', ()=>{
    return new Date().getFullYear()
});

hbs.registerHelper('large', (text)=>{
    return text.toUpperCase();
});

app.set("view engine", "hbs");

app.get("/",(req,res)=>{
    res.render("home.hbs",{
        title:"Home Page",
        message:"All our message here"
    })
});

app.get("/about",(req, res)=>{
    res.render("about.hbs",{
        title:"About us",
        message:"Here is everything about us."

    })
});

app.use(express.static(__dirname + "/public"));



app.listen(3000)