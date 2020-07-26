const express = require("express");
const e = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("Thank You for sending that " + result);
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {

    let num1 = parseFloat(req.body.wei);
    let num2 = parseFloat(req.body.hei);
    let result = num1 / (num1 * num2);
    res.send("Thank You for sending that " + result);
});






app.listen(3000, function() {
    console.log("server is running on port 3000.");
});


