//Write out the skeleton of a RESTful Express server.

//CONFIGURATION
var express = require('express');
var file = require('./file');
var port = process.env.PORT || 8800;

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


//ROUTES
//get all unicorns
app.get('/file', function (req, res) {
});

//get specific unicorn
app.get('/file/:id', function (req, res) {
});

//create new unicorn
app.post('/file', function (req, res) {
});

//change info in unicorn obj
app.put('/file/:id', function (req, res) {
});

//delete unicorn :(
app.delete('/file/:id', function (req, res) {
});


//LISTENER
app.listen(port, function () {
  console.log('Listening on port ', port);
});
