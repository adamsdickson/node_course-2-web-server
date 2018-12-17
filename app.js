const fs = require("fs");

const express =require('express');

var app = express();

var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');



app.use((req,res,next)=>{
    var now = new Date().toString();
    var log = `${now}: ${req.method} and ${req.url} `;
    console.log(log);
    fs.appendFile("server", log+ "\n")


    next()
});

app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    res.render("main.hbs")
    next()
});


hbs.registerHelper("Magic", (test)=>{
    return test.toUpperCase();
});



app.get("/", (req,res)=>{
    res.render("home.hbs", {
        title:"Home",
        message:"Welcome On board"

    })

});

app.get('/about', (req,res)=>{
    res.render('about.hbs', {
        title:"Calling",
        subject:"Nothing"
    });

});


app.listen(3000, ()=>{console.log("App is now running")});