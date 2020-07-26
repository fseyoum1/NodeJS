const express = require("express");
const { response } = require("express");

const app = express(); // referes to the express module 

app.get("/", function(request, response) {
    response.send("<h1>Hello World</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: fitsum@gmail.com");
});

app.get("/about", function(req, res){
    res.send('This is fitsum working on node.js' + 
    'Intermediate level of js');
});

app.get("/hobbies", function(req, res) {
    res.send("Playing foot ball and running ");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});