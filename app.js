const port = 8080;
 
// Libraries
const express = require('express');
var app = express();
 
// Request logging
app.use(function(req, res, next) {
    console.log(req.url);
    next();
});
 
// Start server
console.log("Starting server in: " + __dirname + '/');
app.use(express.static(__dirname + '/'));
app.listen(port, function() { 
    console.log("Server running at " + port)
});