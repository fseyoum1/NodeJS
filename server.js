
// hello world example of express 
// we required an incorporated express 
//
const express = require('express');
// the word app is 
const app = express();
// this port makes it to listen for a Http request, a port our server is tuned too
//app.listen(3000); 

// GET 
app.get("/", function(req, res) {
	// a whole bunch of information is loaded within the request object. 
	//console.log(request);
	// here I am sending plain text but you can send html to the console
	//res.send("Hello");
	res.send("<h1> Hello World</h1>");
});

//nodemon installation 

app.get("/contact", function(req, res) {
	res.send("Contact me at fitsum.s@gmail.com");
});
app.get("/about", function(req, res) {
	let str = "I am fitsum working on nodejs trying to implement a server";
	res.send(str);
});
app.listen(3000, function() {
	console.log("Server started on port 3000");
});